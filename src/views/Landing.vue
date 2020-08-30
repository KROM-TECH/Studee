<template>
  <div class="container white" style="margin-top: 3rem; margin-bottom: 3rem; border-radius: 3rem;">
    <div class="right material-icons menu" @click="menu">{{ sideNav.sign }}</div>
    <div class="row center-align" v-if="sideNav.show">
      <div class="col l7 s12" style="padding: 5%;">
        <h4 class="center-align">
          get all your required university past question in one place
          <br />
          <br />
          <span class="green-text">Reliable</span>
          <br />
          <span class="brown-text darken-4">online/offline support</span>
          <br />
          <span class="orange-text darken-3">Detailed Solutions</span>
        </h4>
        <h5 class="center"><i>Academic Excellence is just a click away</i></h5>
        <br />
        <br />
        <div class="center">
          <router-link to="signup" class="waves-effect waves-light btn pur hoverable" style="margin: 1rem;">create Account</router-link>
          <div class="waves-effect waves-pur btn white pur-text hoverable" to="./signup.html" style="margin: 1rem;">Tell a Friend</div>
        </div>
      </div>
      <div class="col l5 s12">
        <img class="responsive-img" src="@/assets/book.svg" alt="" />
      </div>
    </div>

    <div class="row center-align sidebar" v-if="!sideNav.show">
      <div>
        <router-link class="but btn white pur-text hoverable" to="/home" style="margin: 1rem;">Home</router-link>
        <router-link class="but btn white pur-text hoverable" to="/questions" style="margin: 1rem;">Ask Questions</router-link>
        <router-link class="but btn white pur-text hoverable" to="/courses" style="margin: 1rem;">Course Outline</router-link>
        <router-link class="but btn white pur-text hoverable" to="/pastquestions" style="margin: 1rem;">Past Questions</router-link>
        <router-link class="but btn white pur-text hoverable" to="/profile" style="margin: 1rem; ">Profile</router-link>
        <router-link class="but btn white pur-text hoverable" to="/price" style="margin: 1rem;">Price</router-link>
        <router-link class="but btn white pur-text hoverable" to="/payment" style="margin: 1rem;">Payment</router-link>
        <router-link class="but btn white pur-text hoverable" to="/contact" style="margin: 1rem;">Contact</router-link>
        <router-link class="but btn white pur-text hoverable sign" to="/login" style="margin: 1rem;">Sign In </router-link>
      </div>
    </div>
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
        if (this.sideNav.sign == 'close') {
          this.sideNav.sign = 'menu';
        } else {
          this.sideNav.sign = 'close';
        }
      }
    }
  };
</script>

<style scoped></style>
