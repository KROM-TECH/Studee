<template>
    <div class="container white" style="margin-top: 3rem; margin-bottom: 3rem; border-radius: 3rem;">
    <div class="row">
      <div class="col l7 s12 ">
        <h3 class="pur-text">Login</h3>
        <p class="red-text center" id="signinError"></p>
        <form style="margin-top: 3rem;">
          <div class="row">
            <div class="input-field ">
              <i class="material-icons prefix">account_circle</i>
                            <label for="email">Email</label>
              <input id="email" type="email">
            </div>
          </div>

          <div class="row">
            <div class="input-field ">
              <i class="material-icons prefix">lock</i>
              <label for="password">Password</label>
              <input id="password" type="password">
              
            </div>
          </div>

          <div class="row ">
           <router-link to="/forget" class="left" >Forget password</router-link>
           <router-link to="/signup" class="right">Create an Accoout</router-link>
          </div>

          <div class="row center">
           <button class=" btn btn-large white" style=" width: 10rem; border: 2px solid #6C63FF; color:#6C63FF ">Login</button>
          </div>

        </form>
        <div class="row center">
          <p>OR</p>
        </div>

 <div class="row center">
          <button id="googlein" style="border: 2px solid #b23121; color:#b23121"
            class=" btn btn-large button">Sign Up with Google</button> 

          <button id="twitterin" style="border: 2px solid #00acee; color:#00acee"
            class=" btn btn-large button">Sign Up with Twitter</button>
        

          <button id="facebookin" style="border: 2px solid #3b5998; color:#3b5998"
            class=" btn btn-large button">Sign Up with Facebook</button>
        </div>

      </div>
      <div class="col l5 s12">
        <img class="responsive-img hide-on-med-and-down" src="@/assets/book.svg" alt="">
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.button{
  width: 22rem;
  margin-bottom: 1rem;
  display: block;
  background-color: white;
  font-weight: 500;
}
.center{
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
</style>