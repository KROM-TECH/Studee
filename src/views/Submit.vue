<template>
  <div>
    <Menu></Menu>
    <main class="fade">
      <h1>Upload Course Outlines</h1>
      <section>
        <div class="input-field" style="margin: 3rem;">
          <label>Select Your University</label>
          <select v-model="university" id="university">
            <option value="" disabled selected>Choose your option</option>
            <option value="unilag" class="left">University of Lagos</option>
            <option value="ui" class="left">University of Ibadan</option>
            <option value="uniben" class="left">University of Benin</option>
          </select>
        </div>

        <div class="input-field" style="margin: 3rem;">
          <label>Select Your Faculty</label>
          <select v-model="faculty" id="faculty">
            <option value="" disabled selected>Choose your option</option>
            <option value="art" class="left">Arts</option>
            <option value="bms" class="left">Basic Medical Sciences</option>
            <option value="business" class="left">Business Administration</option>
            <option value="clinical" class="left">Clinical Sciences</option>
            <option value="dental" class="left">Dental Sciences</option>
            <option value="education" class="left">Education</option>
            <option value="engineering" class="left">Engineering</option>
            <option value="environmental" class="left">Environmental Science</option>
            <option value="law" class="left">Law</option>
            <option value="pharmacy" class="left">Pharmacy</option>
            <option value="science" class="left">Science</option>
            <option value="social" class="left">Social Sciences</option>
          </select>
        </div>

        <div class="input-field" style="margin: 3rem;">
          <label>Select Your Level</label>
          <select v-model="level" id="level">
            <option value="" disabled selected>Choose your option</option>
            <option value="Year1" class="left">Year 1</option>
            <option value="Year2" class="left">Year 2</option>
            <option value="Year3" class="left">Year 3</option>
            <option value="Year4" class="left">Year 4</option>
            <option value="Year5" class="left">Year 5</option>
          </select>
        </div>

        <div class="input-field" style="margin: 3rem;">
          <label>Select Your Semester</label>
          <select v-model="semester" id="level">
            <option value="" disabled selected>Choose your option</option>
            <option value="First" class="left">First</option>
            <option value="Second" class="left">Second</option>
          </select>
        </div>

        <div class="input-field" style="margin: 3rem;">
          <label>Course Code</label>
          <input type="text" v-model="course_code" />
        </div>

        <div class="input-field" style="margin: 3rem;">
          <label>Course Title</label>
          <input type="text" v-model="course_title" />
        </div>

        <div class="input-field" style="margin: 3rem;">
          <label>Course Title</label>
          <input type="text" v-model="course_outline" />
        </div>

        <div class="center">
          <button
            class="btn Obtn btn-large"
            style="width: 10rem; border: 2px solid rgb(108, 99, 255);"
            @click="upload_course_outline"
            :disabled="
              !university ||
                !faculty ||
                !level ||
                !semester ||
                !course_code ||
                !course_title ||
                !course_outline
            "
          >
            Upload
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import firebase from "firebase/app";
import "firebase/firestore";
export default {
  components: {
    Menu,
  },
  data() {
    return {
      university: "",
      faculty: "",
      level: "",
      semester: "",
      course_code: "",
      course_title: "",
      course_outline: "",
    };
  },
  methods: {
    upload_course_outline() {
      console.log(
        this.university,
        this.faculty,
        this.level,
        this.semester,
        this.course_code,
        this.course_title,
        this.course_outline,
      );
      firebase
        .firestore()
        .collection(`course_outline`)
        .doc(this.university)
        .collection(this.faculty)
        .doc(this.level)
        .set({
          code: this.course_code,
          title: this.course_title,
          outline: this.course_outline,
          semester: this.semester,
        })
        .then(() => {
          location.reload();
        });
    },
  },
};
</script>

<style scoped>
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
  height: auto;
  margin: 0.1rem;
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
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  z-index: 99;
  width: 100%;
  height: 100%;
  max-width: 100%;
  background-color: rgb(220, 220, 220);
  border: 1px solid #6c63ff;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
input {
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
