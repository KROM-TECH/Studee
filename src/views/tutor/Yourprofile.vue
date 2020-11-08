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
          <p class="head">University / Location</p>
          <input
            type="email"
            placeholder="Enter your University / Location"
            :disabled="!active"
            :class="active ? 'active' : ''"
            v-model="uni_location"
          />
        </div>
      </div>
      <div class="contain">
        <div class="box">
          <p class="head">Courses / Subjects</p>
          <input
            v-model="courses_subjects"
            type="text"
            placeholder="Enter your Courses / Subjects"
            :disabled="!active"
            :class="active ? 'active' : ''"
          />
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
        :disabled="!display_name || !uni_location || !courses_subjects || !rate || !bio"
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
import "firebase/firestore";
import "firebase/auth";

export default {
  components: {
    Menu,
    Loader,
  },
  data() {
    return {
      err: "",
      showModal: false,
      loader: false,
      empty: true,
      active: false,
      available: true,

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
        available: this.available,
        display_name: this.display_name,
        uni_location: this.uni_location,
        courses_subjects: this.courses_subjects,
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
        .then(() => {
          console.log("object");
        })
        .catch((error) => {
          this.loader = false;
          console.log("Error getting documents: ", error);
        });
    },
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
