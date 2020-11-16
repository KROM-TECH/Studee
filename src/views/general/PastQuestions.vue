<template>
  <div>
    <Menu></Menu>
    <main class="fade">
      <h1>Find Your University Past Questions</h1>
      <section>
        <div class="input-field">
          <label>Select Your University</label>
          <select class="icons" id="university">
            <option value="" disabled selected>Choose your option</option>
            <option value="unilag" class="left">University of Lagos</option>
            <option value="ui" class="left">University of Ibadan</option>
            <option value="uniben" class="left">University of Benin</option>
          </select>
        </div>

        <div class="input-field">
          <label>Select Your Faculty</label>
          <select class="icons" id="faculty">
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

        <div class="input-field">
          <label>Select Your Level</label>
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
          <button
            class="btn Obtn btn-large"
            style="width: 10rem; border: 2px solid rgb(108, 99, 255);"
            @click="showModal = true"
          >
            View
          </button>
        </div>
      </section>

      <section>
        <transition name="slide" appear>
          <div class="modall" v-if="showModal">
            <h5>Course Outline</h5>
            <p>fill in required details</p>

            <details>
              <summary
                ><h5>geg 113</h5>
                <h5>first</h5></summary
              >
              <p>
                representation of vectors:resultant of several vectors in Euclidean space:lines,
                planes and spheres , the dot and cross products, direction cosines, differentiation
                of vector functions, lami's theorem, polygon of forces, conditions of equilibrium of
                coplanar forces, newton's laws of motion, analytical treatment of static equilibrium
                of particles and rigid bodies, distributed forces, centroids and centres of gravity,
                moments of inertia, analysis of structures and trusses, forces in beams and tables,
                friction.
              </p>
            </details>
            <details>
              <summary
                ><h5>geg 115</h5>
                <h5>first</h5></summary
              >
              <p>
                Axiomatic set theory.Operations on set,Boolean Algebra , switching circuits,logic
                circuits,and propositional logic.Transfinite induction and recursion.
                Sequences.Monotonic sequences and Convergence.Cauchy criteria.series.power
                series.Tests for convergence.operations on power series.
              </p>
            </details>
            <details>
              <summary
                ><h5>geg 117</h5>
                <h5>first</h5></summary
              >
              <p>
                Functions, limits, Continuity and Differentiability. Mean Value theorems. Techniques
                of differentiation for derivatives of algebraic, trigonometric, exponential and
                logarithmic functions; Curve sketching. L'Hospital rule. McLaurin's and Taylor's
                series. Applications of differentiation to rates of changes, maximum and minimum
                problems, application to rectilinear motion.,
              </p>
            </details>
            <details>
              <summary
                ><h5>meg 111</h5>
                <h5>first</h5></summary
              >
              <p>
                Introduction to basic equipment in wood, machine, fitting and welding
                workshop.Element of safety practice with the various tools used in the
                workshop.General safety precautions.Principle governing the various workshop
                machines. Selection and use of tools for specific operations in the various
                workshop.Practical demonstration of use of tools and machines in performing basic
                workshop processes.
              </p>
            </details>

            <div>
              <button
                class="btn pur white-text"
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
export default {
  components: {
    Menu,
  },
  data() {
    return {
      showModal: false,
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
