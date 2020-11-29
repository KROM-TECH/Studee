<template>
  <div>
    <Loader v-if="loader" />
    <div class="container">
      <div class="rowOne">
        <img src="@/assets/general/Logo.svg" class="res-img" alt="" />
        <h1 class="title">Login</h1>
        <p class="err">{{ Error }}</p>
        <form @submit.prevent="handleSubmit">
          <div class="form-input">
            <label> Username</label>
            <input type="text" v-model="email" required placeholder="Enter your Username" />
          </div>

          <div class="form-input">
            <label> password</label>
            <input type="password" v-model="password" required placeholder="Enter Your password" />
          </div>

          <div class="extra">
            <a href="/forgot">Forgot password</a>
            <a href="/signup">Create Account</a>
          </div>

          <button class="btn Obtn">Login</button>
          <p class="alt-text">Or</p>
          <p class="alt-text">Login With</p>

          <div class="social">
            <button
              type="button"
              class="btn-large"
              style="border: 2px solid #b23121; color:#b23121"
            >
              <img
                src="@/assets/auth/google-icon.svg"
                class="res-img book"
                style="width:20px; margin-right:8%"
                alt=""
              />
              Google
            </button>
            <button
              type="button"
              class="btn-large"
              style="border: 2px solid #00acee; color:#00acee"
            >
              <img
                src="@/assets/auth/twitter-icon.svg"
                class="res-img book"
                style="width:20px; margin-right:8%"
                alt=""
              />
              Twitter
            </button>
            <button
              type="button"
              class="btn-large"
              style="border: 1px solid #3b5998; color:#3b5998"
            >
              <img
                src="@/assets/auth/facebook-icon.svg"
                class="res-img book"
                style="width:20px; margin-right:8%"
                alt=""
              />
              Facebook
            </button>
          </div>
        </form>
      </div>
      <div class="rowTwo">
        <img src="@/assets/auth/book.svg" style="width:100%" class="res-img book" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      email: "",
      password: "",
      Error: "",
      loader: false,
    };
  },

  methods: {
    handleSubmit() {
      this.loader = true;
      console.log(this.email, this.password);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.go({ path: "/home" });
        })
        .catch((error) => {
          this.loader = false;
          console.log(error.message);
          this.Error = error.message;
        });
    },
  },
};
</script>

<style scoped>
.err {
  color: red;
  width: 80%;
  margin: 1rem;
}
a {
  text-decoration: none;
  color: inherit;
}
label {
  margin-bottom: -8px;
  color: #6c63ff;
}

.extra {
  display: flex;
  font-size: 12px;
  color: #6c63ff;
  justify-content: space-between;
  width: 100%;
}
.social {
  display: flex;
  flex-direction: column;
}
.alt-text {
  color: #6c63ff;
}
input:-internal-autofill-selected {
  appearance: menulist-button;
  background-color: rgba(151, 145, 246, 0.1) !important;
  background-image: none !important;
  color: -internal-light-dark(black, white) !important;
}
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 4%;
}
.form-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
input {
  border: none;
  border-bottom: 1.9px solid #6c63ff;
  margin: 10px 2px;
  background-color: rgba(151, 145, 246, 0.3);
  width: 300px;
  height: 2.4rem;
  max-width: 20rem;
  max-height: 2.4rem;
  outline: none;
  padding: 0px 5px;
}
input:focus {
  background-color: rgba(151, 145, 246, 0.5);
}
.title {
  font-weight: 100 !important;
  width: 45%;
  color: #6c63ff;
}
@media screen and (max-width: 865px) {
  input {
    max-width: 95vw;
  }
  .rowTwo {
    display: none;
  }
  .container {
    flex-direction: column;
  }
  .more {
    font-size: 35px !important;
    font-weight: 600 !important;
  }
}

.more-min {
  color: #6c63ff;
  font-style: italic;
  font-size: 20px;
}
.more {
  margin-top: 3rem;
  font-style: italic;
  font-weight: normal;
  font-size: 50px;
  text-align: center;

  color: #6c63ff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.case {
  max-width: 20rem;
}
.det {
  padding: 0.5rem 0.8rem;
}
.header {
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 4px;
  /* min-width: 280px; */
  color: #6c63ff;
  font-weight: normal;
  margin: 1rem;
  margin-bottom: 0;
}
.container {
  display: flex;
  padding: 5px;
}
.rowOne,
.rowTwo {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
