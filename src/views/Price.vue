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

  <main  v-if="sideNav.show">
       <details>
          <summary><h3>Free Sem Plan (0 naira per sem)</h3></summary>
          <div class="list">
            <ul>
              <li>Unlimited Access to the course outlines</li>
              <li>Access to all public discussion channel i.e whatsapp and telegram groups</li>
              <li>Unlimited Access to the ask-question platform</li>
            </ul>
          </div>
        </details>

       <details>
          <summary><h3>basic Sem Plan (1000 naira per sem)</h3></summary>
          <div class="list">
            <ul>
              <li>All the benefits of the free sem plan</li>
              <li>Access to all required past question with detailed solutions thoughout the semester</li>
              <li>500 naira discount on any hardcopy of Studee past Questions</li>
            </ul>
          </div>
        </details>

       <details>
          <summary><h3>Premium Sem Plan (2000 naira per month)</h3></summary>
          <div class="list">
            <ul>
              <li>All the benefits of the Basic sem plan</li>
              <li>get a APA ( <i>Academic personal Assistant</i> ) to answer all past questions related questions</li>
            </ul>
          </div>
        </details>

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
ul{
  padding: 1rem;
  font-size: 1.2rem;
}
li {
    border-bottom: 1px solid;
    padding: 0.2rem;
}
.list {
    display: flex;
    justify-content: center;
}
p{
  padding: 1rem;
}
h3{
  margin: 0;
}
details{
   text-align: center;
      border-radius: 2rem;
  width: 90vw;
  background-color: white;
    border: none;
    height: auto;
    margin: 2rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    color: #6c63ff;
}
details[open] summary{
background-color: rgba(230, 230, 230, 0.802) ;
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
summary {
  border-radius: 1rem;
  cursor: pointer;
  outline: none;
  padding: 0.5rem;
  background-color: white;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
}

summary::-webkit-details-marker {
  display: none;
}
</style>