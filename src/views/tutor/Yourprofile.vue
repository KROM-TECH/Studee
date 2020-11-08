<template>
  <div>
    <Menu />
    <Loader v-show="loader" />
    <div class="modal">
      <transition name="slide" appear>
        <div class="modall" v-if="showModal">
          <div class="modal_box">
            <h3 class="modal_text">Are you sure you want to edit your profile ?</h3>
            <div class="modal_button">
              <button class="btn bb Obtn" style="border:2px solid; margin-top:1rem;" @click="edit">
                Yes
              </button>
              <button
                class="btn bb Obtn"
                style="border:2px solid; margin-top:1rem;"
                @click="showModal = false"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <main class="fade" v-show="!empty">
      <img class="img" src="@/assets/general/profile.png" />
      <p class="err">{{ err }}</p>
      <label class="toggle">
        <input class="toggle-checkbox" type="checkbox" :disabled="!active" v-model="available" />
        <div class="toggle-switch"></div>
        <span class="toggle-label" :class="{ NA: !available }">Available</span>
      </label>

      <div class="contain">
        <div class="box">
          <p class="head">Display Name</p>
          <input
            type="text"
            placeholder="Enter your Display Name"
            :disabled="!active"
            :class="active ? 'active' : ''"
            v-model="display_name"
          />
        </div>
        <div class="box">
          <p class="head">Select Your Type</p>
          <select
            :disabled="!active"
            :class="active ? 'active' : ''"
            v-model="type"
            id="university"
          >
            <option value="" disabled>Type</option>
            <option value="university">University</option>
            <option value="state">State</option>
            <option value="remote">Remote</option>
          </select>
        </div>
      </div>
      <div v-show="type == 'university'">
        <div class="contain">
          <div class="box">
            <p class="head">Select Your University</p>
            <select
              :disabled="!active"
              :class="active ? 'active' : ''"
              v-model="uni_location"
              id="university"
            >
              <option value="" disabled selected>Choose your option</option>
              <option
                v-for="university in Universities"
                :key="university.name"
                :value="university.name"
                >{{ university.name }}</option
              >
            </select>
          </div>
          <div class="box">
            <p class="head">Select Your Faculty</p>
            <select :disabled="!active" :class="active ? 'active' : ''" v-model="faculty">
              <option value="" disabled selected>Choose your option</option>
              <option v-for="faculty in Faculties" :key="faculty.value" :value="faculty.value">{{
                faculty.name
              }}</option>
            </select>
          </div>
        </div>

        <div class="contain" v-show="type == 'university'">
          <div class="box">
            <p class="head">Select Your Level</p>
            <select :disabled="!active" :class="active ? 'active' : ''" v-model="level">
              <option value="" disabled selected>Choose your option</option>
              <option v-for="level in Levels" :key="level.value" :value="level.value">{{
                level.name
              }}</option>
            </select>
          </div>
          <div class="box">
            <p class="head">Rate per hour</p>
            <input
              type="number"
              placeholder="Enter your Rate per hour"
              :disabled="!active"
              :class="active ? 'active' : ''"
              v-model="rate"
            />
          </div>
        </div>
      </div>

      <!-- ================================================================== -->
      <div v-show="type == 'state'">
        <div class="contain">
          <div class="box">
            <p class="head">Select Your state</p>
            <select :disabled="!active" :class="active ? 'active' : ''" v-model="uni_location">
              <option value="" disabled selected>Choose your option</option>
              <option v-for="state in States" :key="state.name" :value="state.name">{{
                state.name
              }}</option>
            </select>
          </div>
          <div class="box">
            <p class="head">Select Your Class</p>
            <select :disabled="!active" :class="active ? 'active' : ''" v-model="Class">
              <option value="" disabled selected>Choose your option</option>
              <option v-for="Class in Classes" :key="Class.name" :value="Class.value">{{
                Class.name
              }}</option>
            </select>
          </div>
        </div>

        <div class="contain" v-show="type == 'state'">
          <div class="box">
            <p class="head">Select Your Subject</p>
            <select :disabled="!active" :class="active ? 'active' : ''" v-model="subject">
              <option value="" disabled selected>Choose your option</option>
              <option v-for="subject in Subjects" :key="subject.name" :value="subject.name">{{
                subject.name
              }}</option>
            </select>
          </div>
          <div class="box">
            <p class="head">Rate per hour</p>
            <input
              type="number"
              placeholder="Enter your Rate per hour"
              :disabled="!active"
              :class="active ? 'active' : ''"
              v-model="rate"
            />
          </div>
        </div>
      </div>

      <div class="contain">
        <div class="box">
          <p class="head">Bio</p>
          <textarea
            v-model="bio"
            type="text"
            placeholder="A little bit about you"
            :disabled="!active"
            :class="active ? 'active' : ''"
          ></textarea>
        </div>
      </div>

      <button v-if="!active" class="btn Obtn" @click="showModal = !showModal">
        Edit
      </button>
      <button
        v-if="active"
        class="btn Obtn"
        :disabled="!display_name || !uni_location || !rate || !bio"
        @click="save"
      >
        Save
      </button>
    </main>
    <main v-show="empty">
      <img class="empty_img" src="@/assets/tutor/teaching.svg" alt="" />
      <P class="empty_text">You have no Tutor profile yet </P>

      <button class="btn Obtn" @click="empty = !empty">
        Create
      </button>
    </main>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Loader from "@/components/Loader";
import firebase from "firebase/app";
import Faculties from "@/helpers/faculties";
import Levels from "@/helpers/level";
import Universities from "@/helpers/universities";
import States from "@/helpers/states";
import Classes from "@/helpers/classes";
import Subjects from "@/helpers/subject";
import "firebase/firestore";
import "firebase/auth";

export default {
  components: {
    Menu,
    Loader,
  },
  data() {
    return {
      Faculties,
      Levels,
      Universities,
      States,
      Classes,
      Subjects,

      err: "",

      faculty: "",
      level: "",
      Class: "",
      subject: "",
      showModal: false,
      loader: true,
      empty: true,
      active: false,
      available: true,

      type: "",
      display_name: "",
      uni_location: "",
      courses_subjects: "",
      rate: "",
      bio: "",
    };
  },
  methods: {
    edit() {
      this.showModal = false;
      this.active = !this.active;
    },
    save() {
      this.loader = true;
      this.active = !this.active;
      const profile = {
        type: this.type,
        available: this.available,
        display_name: this.display_name,
        uni_location: this.uni_location,
        faculty: this.faculty,
        level: this.level,
        Class: this.Class,
        subject: this.subject,
        rate: this.rate,
        bio: this.bio,
      };
      console.log(profile);

      firebase
        .firestore()
        .collection(`tutors`)
        .doc(firebase.auth().currentUser.uid)
        .set(profile)
        .then(() => {
          this.loader = false;
        })
        .catch(() => {
          this.loader = false;
          this.err = `Oop Something went wrong <br> try again`;
        });
    },

    fetch_tutor() {
      firebase
        .firestore()
        .collection(`tutors`)
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            this.available = snapshot.data().available;
            this.display_name = snapshot.data().display_name;
            this.uni_location = snapshot.data().uni_location;
            this.rate = snapshot.data().rate;
            this.type = snapshot.data().type;
            this.faculty = snapshot.data().faculty;
            this.level = snapshot.data().level;
            this.Class = snapshot.data().Class;
            this.subject = snapshot.data().subject;

            this.empty = false;
            this.loader = false;
          } else {
            this.loader = false;
          }
        })
        .catch((error) => {
          this.loader = false;
          console.log("Error getting documents: ", error);
        });
    },
  },

  created() {
    this.fetch_tutor();
  },
};
</script>

<style scoped>
.modal_box {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 84vw;
  max-width: 480px;
  height: 185px;
}
.modal_text {
  color: #6c63ff;
  text-align: center;
  padding: 0rem 2rem;
}
p.err {
  color: red;
  margin: 3px 1px;
}
.empty_text {
  font-size: 17px;
  text-align: center;
  color: #6c63ff;
}
.empty_img {
  width: 80vw;
  max-width: 550px;
  height: auto;
}
.box {
  margin: 5px 30px;
}
.contain {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
input {
  width: 180px !important;
  height: 34px;
  border: 1px solid #6c63ff;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0px 1rem;
  color: #6c63ff;
  font-size: 16px;
  text-align: center;
}
select {
  width: 212px !important;
  height: 34px;
  border: 1px solid #6c63ff;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0px 1rem;
  font-size: 16px;
  text-align: center;
  color: #6c63ff;
}
textarea {
  width: 300px;
  max-width: 512px !important;
  height: 34px;
  border: 1px solid #6c63ff;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 5px 1rem;
  font-size: 16px;
  text-align: center;
  color: #6c63ff;
}
input:disabled {
  background-color: #fff;
  cursor: default;
  /* border: none; */
}
select:disabled {
  background-color: #fff;
  /* border: none; */
}
textarea:disabled {
  background-color: #fff;
  /* border: none; */
}
.head {
  line-height: 47px;
  text-align: center;
  color: #6c63ff;
  text-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  font-weight: 700;
}
button {
  overflow: hidden;
}
.img {
  max-width: 200px;
  height: auto;
  border-radius: 50%;
}

main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
}
.active {
  border: none;
  border-bottom: 1.9px solid #6c63ff;
  background-color: rgba(151, 145, 246, 0.3);
  max-width: 20rem;
  max-height: 2.4rem;
  outline: none;
  border-radius: 0px;
}
/* Toggle button CSS */
.toggle {
  /* cursor: pointer; */
  display: inline-block;
}

.toggle-switch {
  display: inline-block;
  background: #ccc;
  border-radius: 16px;
  width: 58px;
  height: 32px;
  position: relative;
  vertical-align: middle;
  transition: background 0.25s;
}
.toggle-switch:before,
.toggle-switch:after {
  content: "";
}
.toggle-switch:before {
  display: block;
  background: linear-gradient(to bottom, #fff 0%, #eee 100%);
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
  width: 24px;
  height: 24px;
  position: absolute;
  top: 4px;
  left: 4px;
  transition: left 0.25s;
}
.toggle:hover .toggle-switch:before {
  background: linear-gradient(to bottom, #fff 0%, #fff 100%);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
}
.toggle-checkbox:checked + .toggle-switch {
  background: #6c63ff;
}
.toggle-checkbox:checked + .toggle-switch:before {
  left: 30px;
}

.toggle-checkbox {
  position: absolute;
  visibility: hidden;
}

.toggle-label {
  margin-left: 5px;
  position: relative;
  top: 2px;
  font-size: 18px;
  color: #1f1890;
  font-weight: 550;
  letter-spacing: 1px;
}
.NA {
  text-decoration: line-through;
  color: gray;
}
button:disabled {
  border-color: grey !important;
  color: grey !important;
}

.modall {
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  z-index: 99;
  width: 100%;
  height: 100%;
  max-width: 100%;
  background-color: rgb(0, 0, 0, 0.25);
  border: 1px solid #6c63ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal_button {
  display: flex;
  flex-wrap: wrap;
}
.bb {
  width: 100px !important;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: scale(0);
}
</style>
