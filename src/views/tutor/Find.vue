<template>
  <div>
    <Loader v-show="loader" />
    <Menu />
    <main class="fade">
      <h1>Find A tutor</h1>
      <section>
        <div class="input-field">
          <label>Select Your Type</label>
          <select v-model="type" id="university">
            <option value="" disabled>Search by University / State</option>
            <option value="university">University</option>
            <option value="state">State</option>
            <option value="remote">Remote</option>
          </select>
        </div>

        <div v-show="type == 'university'">
          <div class="input-field">
            <label>Select Your University</label>
            <select v-model="university" id="faculty">
              <option value="" disabled selected>Choose your option</option>
              <option
                v-for="university in Universities"
                :key="university.name"
                :value="university.name"
                class="left"
                >{{ university.name }}</option
              >
            </select>
          </div>

          <div class="input-field">
            <label>Select Your Faculty</label>
            <select v-model="faculty" id="faculty">
              <option value="" disabled selected>Choose your option</option>
              <option
                v-for="faculty in Faculties"
                :key="faculty.value"
                :value="faculty.value"
                class="left"
                >{{ faculty.name }}</option
              >
            </select>
          </div>

          <div class="input-field">
            <label>Select Your Level</label>
            <select v-model="level" id="level">
              <option value="" disabled selected>Choose your option</option>
              <option
                v-for="level in Levels"
                :key="level.value"
                :value="level.value"
                class="left"
                >{{ level.name }}</option
              >
            </select>
          </div>
        </div>

        <div v-show="type == 'state'">
          <div class="input-field">
            <label>Select Your State</label>
            <select v-model="state" id="faculty">
              <option value="" disabled selected>Choose your option</option>
              <option v-for="state in States" :key="state.name" :value="state.name" class="left">{{
                state.name
              }}</option>
            </select>
          </div>

          <div class="input-field">
            <label>Select Your Class</label>
            <select v-model="Class" id="faculty">
              <option value="" disabled selected>Choose your option</option>
              <option
                v-for="Class in Classes"
                :key="Class.name"
                :value="Class.value"
                class="left"
                >{{ Class.name }}</option
              >
            </select>
          </div>

          <div class="input-field">
            <label>Select Your Subject</label>
            <select v-model="subject" id="faculty">
              <option value="" disabled selected>Choose your option</option>
              <option
                v-for="subject in Subjects"
                :key="subject.name"
                :value="subject.name"
                class="left"
                >{{ subject.name }}</option
              >
            </select>
          </div>
        </div>

        <div class="center">
          <button
            v-show="type == 'university'"
            class="btn Obtn btn-large"
            style="width: 10rem; border: 2px solid rgb(108, 99, 255);"
            :disabled="!university || !faculty || !level"
          >
            Find
          </button>
          <button
            v-show="type == 'state'"
            class="btn Obtn btn-large"
            style="width: 10rem; border: 2px solid rgb(108, 99, 255);"
            :disabled="!state || !Class || !subject"
          >
            Find
          </button>
        </div>
      </section>

      <section>
        <transition name="slide" appear>
          <div class="modall" v-if="showModal">
            <h1 class="h1">Course Outline</h1>
            <div class="coursebox" v-if="course_Outline.length">
              <details v-for="courses in course_Outline" :key="courses.title">
                <summary
                  ><h5>{{ courses.code }}</h5>
                  <h5>{{ courses.semester }}</h5></summary
                >
                <p>
                  <span class="topic">
                    <span class="left">{{ courses.title }}</span>
                    <span class="right">{{ courses.Unit }}</span></span
                  >
                  {{ courses.outline }}
                </p>
              </details>
            </div>

            <div class="empty" v-else>
              <img src="@/assets/empty.svg" class="img" alt="" />
              <p>
                Oops, Not Found,
                <a href="http://">Click here </a> to make a request
              </p>
            </div>

            <div>
              <button
                class="btn Obtn btn-large"
                style="border:2px solid; margin-top:1rem;"
                @click="showModal = false"
              >
                Close
              </button>
            </div>
          </div>
        </transition>
      </section>
    </main>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Faculties from "@/helpers/faculties";
import Levels from "@/helpers/level";
import Universities from "@/helpers/universities";
import States from "@/helpers/states";
import Classes from "@/helpers/classes";
import Subjects from "@/helpers/subject";
// import firebase from "firebase/app";
// import "firebase/firestore";
import Loader from "@/components/Loader";
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
      empty: "",
      type: "",
      university: "",
      level: "",
      faculty: "",
      state: "",
      Class: "",
      subject: "",
      showModal: false,
      loader: false,
      course_Outline: [],
    };
  },
  methods: {},
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #6c63ff;
  font-weight: 550;
}
.empty {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.img {
  width: 55%;
  height: auto;
  margin: 10px;
}
.coursebox {
  height: 70vh;
}
.h1 {
  height: 3.2rem;
}
.input-field {
  margin: 2.5rem 1rem;
  margin-bottom: inherit;
}
.left {
  float: left;
  max-width: 77%;
}
.right {
  float: right;
}
.topic {
  display: block;
  font-size: 1em;
  font-weight: 550;
  margin-bottom: 10px;
  text-align: center;
}
h1 {
  color: #6c63ff;
  text-align: center;
}
.center {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
details {
  text-align: center;
  border-radius: 0.2rem;
  width: 85vw;
  max-width: 550px;
  background-color: white;
  border: none;
  height: fit-content;
  margin: 0.3rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  color: #6c63ff;
  transition: 0.5s;
}
details[open] summary {
  background-color: rgba(230, 230, 230, 0.802);
  transition: 0.5s;
}
h5 {
  margin: 0.5rem 0rem !important;
}
summary {
  border-radius: 0.2rem;
  cursor: pointer;
  outline: none;
  padding: 0.2rem;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  border: 1px solid;
}

p {
  padding: 1rem;
}

summary::-webkit-details-marker {
  display: none;
}
.modall {
  background-color: rgb(220, 220, 220);
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0rem;
}
select {
  width: 80vw !important;
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #6c63ff;
  outline: none;
  height: 3rem;
  margin: 0 0 8px 0;
  background-color: rgba(152, 145, 246, 0.2);
}

option {
  font-weight: 500;
  display: block;
  white-space: pre-line;
  min-height: 2em;
  height: 20rem;
  padding: 2em;
}
label {
  color: #6c63ff;
}

button:disabled {
  border-color: grey !important;
  color: grey !important;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100vw);
}
</style>
