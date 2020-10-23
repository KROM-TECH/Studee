<template>
<div>
 <Menu></Menu>
  <main class="fade">
      <h1 >Find A Tutor</h1>
  <section>
    <div class="input-field" style="margin: 3rem;">
      <label>Enter Your University / Location</label>
     <input type="text">
    </div>

    <div class="input-field" style="margin: 3rem;">
      <label>Enter your Course / Subject</label>
 <input type="text">
      
    </div>


    <div class="center">
      <button class="btn Obtn btn-large" style="width: 10rem; border: 2px solid rgb(108, 99, 255);" @click="showModal = true">Search</button>
    </div>
  </section>

  <section>
       <transition name="slide" appear>
  <div class="modall" v-if="showModal">
    <h5>Course Outline</h5>
      <p>fill in required details</p>

           <details>
          <summary><h5>geg 113</h5> <h5>first</h5></summary>
         <p>representation of vectors:resultant of several vectors in Euclidean space:lines, planes and spheres , the dot and cross products, direction cosines, differentiation of vector functions, lami's theorem, polygon of forces, conditions of equilibrium of coplanar forces, newton's laws of motion, analytical treatment of static equilibrium of particles 
           and rigid bodies, distributed forces, centroids and centres of gravity, moments of inertia, analysis of structures and trusses, forces in beams and tables, friction.</p>
        </details>
           <details>
          <summary><h5>geg 115</h5> <h5>first</h5></summary>
         <p>Axiomatic set theory.Operations on set,Boolean Algebra , switching circuits,logic circuits,and propositional logic.Transfinite induction and recursion.
            Sequences.Monotonic sequences and Convergence.Cauchy criteria.series.power series.Tests for convergence.operations on power series.</p>
        </details>
           <details>
          <summary><h5>geg 117</h5> <h5>first</h5></summary>
         <p>Functions, limits, Continuity and Differentiability. Mean Value theorems. Techniques of differentiation for derivatives of algebraic, trigonometric, exponential and logarithmic functions; 
           Curve sketching. L'Hospital rule. McLaurin's and Taylor's series. Applications of differentiation to rates of changes, maximum and minimum problems, application to rectilinear motion.,</p>
        </details>
           <details>
          <summary><h5>meg 111</h5> <h5>first</h5></summary>
         <p>Introduction to basic equipment in wood, machine, fitting and welding workshop.Element of safety practice with the various tools used in the workshop.General safety precautions.Principle governing the various workshop machines.
           Selection and use of tools for specific operations in the various workshop.Practical demonstration of use of tools and machines in performing basic workshop processes.</p>
        </details>

      <div >
   <button class="btn pur white-text" style="border:2px solid; margin-top:1rem;" @click="showModal = false">
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
    methods: {

    }
  };
</script>

<style scoped>
h1{
   color: #6c63ff; 
}
.center{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
details{
   text-align: center;
      border-radius: 0.2rem;
  width: 90vw;
  background-color: white;
    border: none;
    height: auto;
    margin: 0.1rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    color: #6c63ff;
}
details[open] summary{
background-color: rgba(230, 230, 230, 0.802) ;
}
h5{
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

p{
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
 border:1px solid #6c63ff;
 padding: 25px;
 display: flex;
 flex-direction: column;
 align-items: center;
}
  input {
    width: 80vw !important;
    display: block;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #6c63ff;
    outline: none;
    height: 3rem;
    background-color: rgba(152, 145, 246, 0.2);
    margin: 0 0 8px 0;
    padding: 0px 15px;
  }

label{
  color: #6c63ff;
  display: block;
}
.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-100vw);
}
</style>