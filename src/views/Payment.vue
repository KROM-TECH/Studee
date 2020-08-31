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
     </div>
    </div>
    <main  v-if="sideNav.show" class="fade">
      <div class="input-field">
        <label>Select Your Sem Plan</label>
        <select>
          <option value="" disabled selected>free Sem plan</option>
          <option value="basic">Basic Sem Plan</option>
          <option value="premium">Premium Sem plan</option>
        </select>
      </div>

      <div class="input-field">
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Email" required/>
      </div>

      <div class="input-field">
        <label for="fullName">Full Name</label>
        <input id="fullName" type="text" placeholder="full Name" required/>
      </div>

      <div class="input-field">
        <label for="phoneNum">Phone Number</label>
        <input id="phoneNum" type="text" placeholder="phone Number" required />
      </div>

      <button class=" btn btn-large white pur-text" style=" width: 10rem; border: 2px solid #6C63FF;">Pay</button>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showModal: false,
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
  select {
    width: 80vw !important;
    display: block;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    outline: none;
    height: 3rem;
    margin: 0 0 8px 0;
  }
  select:focus{
    border-bottom: 1px solid #26a69a;
  }
  input {
    width: 80vw !important;
    display: block;
  }
  main {
    background-color: rgb(220, 220, 220);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
  }
</style>
