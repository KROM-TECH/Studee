<template>
<div>
  <Menu></Menu>
    <main  class="fade"> 
    <img src="@/assets/profile.png">
    <h5>Subscription:- <span class="pur-text">free sem</span></h5>

  <div class="card">
    <h5>Display Name: <span class="right pur-text" id="userdis">Nill</span></h5>
  </div>
  <div class="card">
    <h5>Email: <span class="right pur-text" id="usermail2">Nill</span></h5>
  </div>
  <div class="card">
    <h5>Phone Number: <span class="right pur-text" id="usernum">Nill</span></h5>
  </div>

   <button 
   class=" btn btn-large white pur-text" 
   style=" width: 10rem; border: 2px solid #6C63FF;" 
   @click="showModal = true">Update</button>

       <transition name="slide" appear>
  <div class="modall" v-if="showModal">
    <h5>Profile Update</h5>
      <p>fill in required details</p>

      <div class="input-field ">
        <label>Display Name</label>
        <input id="disName" type="text" placeholder="display Name"  required>
        
      </div>

      <div class="input-field ">
        <label>Email</label>
        <input type="text" placeholder="Email"  required>
        
      </div>

      <div class="input-field ">
        <label >Phone Number</label>
        <input  type="text" placeholder="phone Number" required>
        
      </div>
      <div >
   <button class="btn pur white-text" style="border:2px solid" @click="showModal = false">
    Close
   </button>
   <button class="btn pur white-text" style="border:2px solid" >
    Update
   </button>
      </div>

  </div>
 </transition>
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
.btn{
  margin: 0px 1rem;
}
input{
  width: 60vw !important;
  display: block;
}
.modall {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 99; 
 width: 85%;
 max-width: 100%;
 background-color: #FFF;
 border:1px solid #6c63ff;
 border-radius: 16px; 
 padding: 25px;
 display: flex;
 flex-direction: column;
 align-items: center;
}
@media screen and (max-width:480px){
  .modall{
    width: 100%;
  }
}
img{
  max-width: 200px;
      height: auto;
      border-radius: 50%;
}
.card{
  width: 90%;
  padding: 0rem 1rem;
  overflow: hidden;
}
main{
   background-color: rgb(220, 220, 220);
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 3rem;
}
.button{
  width: 22rem;
  margin-bottom: 1rem;
  display: block;
  background-color: white;
  font-weight: 500;
}
.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}


</style>