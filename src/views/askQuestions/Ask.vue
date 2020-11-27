<template>
  <div>
    <Menu></Menu>
    <main class="fade">
      <h1>Ask Your Questions</h1>
      <section>
        <div class="input-field">
          <label>Title of your question</label>
          <input type="text" />
        </div>
        <div class="input-field">
          <label>Detailed Explanation</label>
          <textarea type="text" rows="5" />
        </div>

        <div class="input-field">
          <label>Question Tags</label>
          <select class="icons" id="level">
            <option value="" disabled selected>Choose your option</option>
            <option value="Year1" class="left">Year 1</option>
            <option value="Year2" class="left">Year 2</option>
            <option value="Year3" class="left">Year 3</option>
            <option value="Year4" class="left">Year 4</option>
            <option value="Year5" class="left">Year 5</option>
          </select>
        </div>

        <div class="center">
          <button class="btn Obtn btn-large img_btn">
            Add an Image
          </button>
          <button
            class="btn Obtn btn-large"
            style="width: 10rem; border: 2px solid rgb(108, 99, 255);"
            @click="showModal = true"
          >
            Ask
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {}
};
</script>

<style scoped>
.img_btn {
  width: 15rem;
  background-color: rgb(108, 99, 255);
  color: white !important;
  border: 2px solid rgb(108, 99, 255);
}
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h5 {
  margin: 0.5rem 0rem !important;
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
textarea {
  width: 80vw !important;
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #6c63ff;
  outline: none;
  height: 4rem;
  padding-left: 1rem;
  padding-top: 0.7rem;
  margin: 0 0 8px 0;
  background-color: rgba(152, 145, 246, 0.2);
}
input {
  padding-left: 1rem;
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
