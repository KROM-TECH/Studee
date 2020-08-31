<template>
<div>
       <div class="right material-icons menu" @click="menu">{{ sideNav.sign }}</div>
        <div class="row center-align sidebar"  v-if="!sideNav.show">
     <div>
        <router-link class="but btn white pur-text hoverable" to="/home" style="margin: 1rem;">Home</router-link>
        <router-link class="but btn white pur-text hoverable" to="/questions" style="margin: 1rem;">Ask Questions</router-link>
        <router-link class="but btn white pur-text hoverable" to="/courses" style="margin: 1rem;">Course Outline</router-link>
        <router-link class="but btn white pur-text hoverable" to="/pastquestions" style="margin: 1rem;">Past Questions</router-link>
        <router-link class="but btn white pur-text hoverable" to="/profile" style="margin: 1rem; ">Profile</router-link>
        <router-link class="but btn white pur-text hoverable" to="/price" style="margin: 1rem;">Price</router-link>
        <router-link class="but btn white pur-text hoverable" to="/payment" style="margin: 1rem;">Payment</router-link>
        <router-link class="but btn white pur-text hoverable" to="/contact" style="margin: 1rem;">Contact</router-link>
        <a class="but btn white pur-text hoverable sign" style="margin: 1rem;">Sign Out </a>
     </div>
    </div>
    
  <main v-if="sideNav.show">
     <div class="white-text">
      <div class="row white hoverable card" style="background-color: #0088cc !important;">
        <div class="col l3 s3 m3">
          <br>
          <img src="@/assets/telegram.png" alt="Telegram group" class='responsive-img'>
        </div>
        <div class="col l9 s9 m9">
         <h4>Telegram Group</h4>
          <p>blah blah blah blah blah blah blah</p>
        </div>
      </div>
    </div>

     <div class="white-text">
      <div class="row white hoverable card" style="background-color: #25d366 !important;">
        <div class="col l3 s3 m3">
          <br>
          <img src="@/assets/whatsapp.png" alt="Whatsapp Group" class='responsive-img'>
        </div>
        <div class="col l9 s9 m9">
        <h4>Whatsapp Group</h4>
          <p>Ask questions, Socialize and learn</p>
        </div>
      </div>
    </div>

     <div class="pur-text">
      <div class="row white hoverable card">
        <div class="col l3 s3 m3">
          <br>
          <img src="@/assets/teacher.svg" alt="Online Group" class='responsive-img'>
        </div>
        <div class="col l9 s9 m9">
       <h4>Personal tutors</h4>
          <p>one 0n one personal tutors</p>
        </div>
      </div>
    </div>




  </main>

</div>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: { show: 'true', sign: 'menu' }
      };
    },
    methods: {
      menu() {
        this.sideNav.show = !this.sideNav.show;
        if(this.sideNav.sign == 'close'){
          this.sideNav.sign = 'menu'
        }else{
          this.sideNav.sign = 'close'
        }
      }
    }
  };
</script>

<style scoped>
.card{
border-radius: 1rem;
 margin: 1rem;
}
</style>