<template>
  <div>
      <div class="right material-icons menu" @click="menu">{{ sideNav.sign }}</div>
       <transition name="slide" appear>
          <div class="row center-align sidebar fade" v-if="!sideNav.show">
      <div >
        <router-link class="btn Obtn but" to="/home" style="margin: 1rem;">Home</router-link>
        <router-link class="btn Obtn but" to="/home" style="margin: 1rem;">Find a Tutor</router-link>
        <router-link class="btn Obtn but" to="/questions" style="margin: 1rem;">Ask Questions</router-link>
        <router-link class="btn Obtn but" to="/pastquestions" style="margin: 1rem;">Past Questions</router-link>
        <router-link class="btn Obtn but" to="/courses" style="margin: 1rem;">Course Outline</router-link>
        <router-link class="btn Obtn but" to="/" style="margin: 1rem;">Chats</router-link>
        <router-link class="btn Obtn but" to="/" style="margin: 1rem;">Notes</router-link>
        <router-link class="btn Obtn but" to="/" style="margin: 1rem;">T/T/E</router-link>      
        <router-link class="btn Obtn but" to="/profile" style="margin: 1rem; ">Profile</router-link>
        <router-link class="btn Obtn but" to="/payment" style="margin: 1rem;">Payment</router-link>
        <router-link class="btn Obtn but sign" to="/login" style="margin: 1rem;">Sign In </router-link>
      </div>
    </div>
       </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: { show: 'false', sign: 'menu' }
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

<style scoped>
a{
  text-decoration: none;
  font-size:initial;
  color:inherit;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  font-feature-settings: 'liga';
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
  .menu {
    color: #6c63ff; 
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 1px 4px 2px 0 rgba(0, 0, 0, 0.14), -3px 4px 1px -2px rgba(0, 0, 0, 0.12), 1px 3px 5px 2px rgba(0, 0, 0, 0.2);
    border-radius: 20%;
    padding: 0.8rem;
    position: fixed;
    right: 1.5rem;
    top: 1rem;
    z-index: 5;
  }
  .menu:hover {
    background-color: #6c63ff;
    color: white;
    cursor: pointer;
    
  }
  @media screen and (max-width: 445px) {
    .menu{
      padding: 0.4rem;
    }
  }
  .sidebar{
    background-color: rgb(220, 220, 220);
    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: slideIn 0.5s    forwards ;
}



.slide-enter-active,
.slide-leave-active {
 transition: .8s;
}

.slide-enter,
.slide-leave-to {
 transform:  translateX(100vw);
}
</style>