<template>
<div>
  <Menu></Menu>

  <div class="container " style="margin-top: 3rem; margin-bottom: 3rem; border-radius: 3rem;">    
    <div class="row center-align">
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
  </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
  export default {
    components:{
      Menu
    }
  };
</script>

<style scoped></style>
