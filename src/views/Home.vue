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

<body class="grey lighten-2 fade" style="padding-top: 3rem;" v-if="sideNav.show">

  <section class="flex">
    <a href="./courses.html" class="pur-text">
      <div class="row white hoverable card" style="  border-radius: 1rem; margin: 1rem;">
        <div class="col l3 s3 m3">
          <br>
          <img src="@/assets/CO.png" alt="course outline" class='responsive-img'>
        </div>

        <div class="col l9 s9 m9">
          <h3>Course Outline</h3>
          <p>get course outline for different university courses</p>
        </div>
      </div>
    </a>

    <a id="pq" href="./pq.html" class="pur-text">
      <div class="row white hoverable card" href="#" style=" border-radius: 1rem; margin: 1rem; ">
        <div class="col l3 s3 m3">
          <br>
          <img src="@/assets/problem.svg" alt="past questions" class="responsive-img">
        </div>

        <div class="col l9 s9 m9">
          <h3>Past Questions</h3>
          <p>for a minimal fee get up to date past questions with solutions</p>
        </div>
      </div>
    </a>

    <a href="./support.html" class="pur-text">
      <div class="row white hoverable card" style=" border-radius: 1rem; margin: 1rem;">
        <div class="col l3 s3 m3">
          <br>
          <img src="@/assets/teacher.svg" alt="online support" class="responsive-img ">
        </div>

        <div class="col l9 s9 m9">
          <h3>Online Support</h3>
          <p>24/7 online support for any equation that might tricker than expected</p>
        </div>
      </div>
    </a>

    <a href="./questions.html" class="pur-text">
      <div class="row white hoverable card" style=" border-radius: 1rem; margin: 1rem;">
        <div class="col l3 s3 m3">
          <br>
          <img src="@/assets/ask-question.png" alt="questions" class="responsive-img ">
        </div>

        <div class="col l9 s9 m9">
          <h3>Questions</h3>
          <p>For unsubscribed customers, we provide a platform for you to get answers to tricky questions too by asking your mates</p>
        </div>
      </div>
    </a>


  </section>

 
</body>
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
<style>

</style>