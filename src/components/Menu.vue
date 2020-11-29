<template>
  <div>
    <div class="right material-icons menu" @click="menu">
      {{ sideNav.sign }}
    </div>
    <transition name="slide" appear>
      <div class="sidebar fade" v-show="!sideNav.show">
        <div class="row">
          <div v-if="auth">
            <router-link class="box" to="/home" style="margin: 1rem;">
              <img src="@/assets/menu/home.svg" class="res-img" alt="" />
            </router-link>
            <h3 class="box-text">Home</h3>
          </div>
          <div v-else>
            <router-link class="box" to="/" style="margin: 1rem;">
              <img src="@/assets/menu/home.svg" class="res-img" alt="" />
            </router-link>
            <h3 class="box-text">Home</h3>
          </div>

          <div>
            <router-link class="box" to="/pastquestions" style="margin: 1rem;">
              <img src="@/assets/menu/pq.svg" class="res-img" alt="" />
            </router-link>
            <h3 class="box-text">Past Questions</h3>
          </div>

          <div>
            <router-link class="box" to="/courses" style="margin: 1rem;">
              <img src="@/assets/menu/outline.svg" class="res-img" alt="" />
            </router-link>
            <h3 class="box-text">Course Outline</h3>
          </div>
        </div>

        <div class="row">
          <div>
            <router-link class="box" to="/tutor" style="margin: 1rem;">
              <img src="../assets/menu/tutor.svg" class="res-img" alt="" />
            </router-link>
            <h3 class="box-text">Find a Tutor</h3>
          </div>

          <div>
            <router-link class="box" to="/profile" style="margin: 1rem;">
              <img src="../assets/menu/account.svg" class="res-img" alt="" />
            </router-link>
            <h3 class="box-text">Profile</h3>
          </div>

          <div>
            <router-link class="box" to="/questions" style="margin: 1rem;">
              <img src="../assets/menu/ask.svg" class="res-img" alt="" />
            </router-link>
            <h3 class="box-text">Ask Questions</h3>
          </div>
        </div>

        <div class="row">
          <div>
            <router-link class="box" to="/chat" style="margin: 1rem;">
              <img src="@/assets/menu/chat.svg" class="res-img" alt="" />
            </router-link>
            <h3 class="box-text">Chat</h3>
          </div>

          <div>
            <router-link class="box" to="/note" style="margin: 1rem;">
              <img src="@/assets/menu/notes.svg" class="res-img" alt="" />
            </router-link>
            <h3 class="box-text">Notes</h3>
          </div>

          <div>
            <router-link class="box" to="/tte" style="margin: 1rem;">
              <img src="@/assets/menu/Tte.svg" class="res-img" alt="" />
            </router-link>
            <h3 class="box-text">T/T/E</h3>
          </div>
        </div>

        <div class="row">
          <button v-if="auth" @click="signOut" class="btn Obtn but sign" style="margin: 1rem;">
            Sign Out
          </button>
          <router-link v-else class="btn Obtn but sign" to="/login" style="margin: 1rem;"
            >Sign In
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Menu",
  data() {
    return {
      sideNav: { show: "false", sign: "menu" },
      auth: "",
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit("clearUserData");
          this.$router.go({ path: "login" });
        });
      // .catch((error) {
      //   // An error happened.
      // });
    },
    menu() {
      this.sideNav.show = !this.sideNav.show;
      if (this.sideNav.sign == "close") {
        this.sideNav.sign = "menu";
      } else {
        this.sideNav.sign = "close";
      }
    },
    checkauth() {
      if (firebase.auth().currentUser) {
        this.auth = true;
      } else {
        this.auth = false;
      }
    },
  },
  created() {
    this.checkauth();
  },
};
</script>

<style scoped>
.box-text {
  text-align: center;
  color: #6c63ff !important;
}
.row {
  display: flex;
}
.box {
  width: 120px;
  height: 120px;
  max-width: 120px;
  max-height: 120px;
  background-color: #fff;
  border-radius: 10px;
  margin: 15px 25px !important;
  border: 1px solid #6c63ff;
}
@media screen and (max-width: 1300px) {
  .box {
    width: 100px;
    height: 100px;
  }
  .box-text {
    font-size: 15px;
  }
}

@media screen and (max-width: 480px) {
  .box {
    width: 70px;
    height: 70px;
  }
  .box-text {
    font-size: 13px;
  }
}
@media screen and (max-width: 400px) {
  .box {
    width: 50px;
    height: 50px;
  }
  .box-text {
    font-size: 12px;
  }
}
.box:hover {
  background: linear-gradient(180deg, #5a578a 0%, #150e89 100%);
}
a.box.router-link-exact-active.router-link-active {
  background: linear-gradient(180deg, #5a578a 0%, #150e89 100%);
}
a {
  text-decoration: none;
  font-size: initial;
  color: inherit;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu {
  color: #6c63ff;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 4px 2px 0 rgba(0, 0, 0, 0.14), -3px 4px 1px -2px rgba(0, 0, 0, 0.12),
    1px 3px 5px 2px rgba(0, 0, 0, 0.2);
  border-radius: 20%;
  padding: 0.8rem; 
  position: fixed;
  left: 1rem;
  top: 0.7rem;
  z-index: 500000;
}
.menu:hover {
  background-color: #6c63ff;
  color: white;
  cursor: pointer;
}
@media screen and (max-width: 445px) {
  .menu {
    padding: 0.4rem;
  }
}
.sidebar {
  background-color: rgb(220, 220, 220);
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-x: hidden;
  top: 0;
  left: 0;
  z-index: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: slideIn 0.5s forwards;
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100vw);
}
</style>
