<template>
  
  <div class="container white" style="margin-top: 3rem; margin-bottom: 3rem; border-radius: 3rem;">
    <div class="row">
      <div class="col l7 s12 ">
        <h3 class="pur-text">Forget Password</h3>
        <p class="red-text center" id="signinError"></p>
        <form style="margin-top: 3rem;">
          <div class="row">
            <div class="input-field ">
              <i class="material-icons prefix">account_circle</i>
              <input id="email" type="email" class="validate">
              <label for="email">Email</label>
              <p class="center pur-text" id="resetmsg"></p>
            </div>
          </div>



          <div class="row center">
            <a class="waves-effect waves-light btn btn-large pur" id="reset"
              style="border-radius: 5rem; width: 10rem;">Reset</a>
          </div>

        </form>





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

<style>

</style>