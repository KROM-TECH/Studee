<template>
  <div>
    <Menu />
    <Loader v-show="loader" />
    <div class="content">
      <img class="responsive-img" src="@/assets/auth/verify.svg" alt="" />
      <h2 style="margin:0" class="center">
        verify your Email to Proceed
      </h2>
      <button v-if="btn" class="btn Obtn " @click="verify">Verify</button>
      <p v-else class="center pur-text">{{ msg }}</p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Loader from "@/components/Loader";
import Menu from "@/components/Menu";
export default {
  components: {
    Loader,
    Menu,
  },
  data() {
    return {
      msg: "",
      btn: true,
      loader: false,
    };
  },
  methods: {
    verify() {
      this.loader = true;
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          this.loader = false;
          this.btn = false;
          this.msg = `A Verification Link has been sent to Your Email @${
            firebase.auth().currentUser.Email
          }`;
        })
        .catch(() => {
          this.loader = false;
          this.btn = false;
          this.msg = `Something went wrong, check your network and then reload the page`;
        });
    },
  },
};
</script>

<style scoped>
.but {
  width: 70%;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
}
.center {
  margin: 2rem;
  font-size: 22px;
  text-align: center;
}
img {
  max-width: 50% !important;
  margin-top: 4rem;
}
</style>
