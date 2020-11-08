<template>
  <div>
    <Loader v-show="loader" />
    <div class="container">
      <div class="rowOne">
        <img src="@/assets/general/Logo.svg" class="res-img" alt="" />
        <h2 style="margin:1rem" class="title">Forgot Password</h2>
        <p class="err">{{ Error }}</p>
        <form @submit.prevent="handleSubmit">
          <div class="form-input">
            <label> Username</label>
            <input type="text" v-model="Email" placeholder="Enter your Username" />
          </div>

          <div class="extra">
            <a href="/signup">Create Account</a>
          </div>
          <div class="extra2">
            <p class="pur-text">{{ Msg }}</p>
          </div>

          <button class="btn Obtn">Reset</button>
        </form>
      </div>
      <div class="rowTwo">
        <img src="@/assets/auth/book.svg" style="width:100%" class="res-img book" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Loader from "@/components/Loader";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      Email: "",
      Msg: "",
      Error: "",
      loader: false,
    };
  },
  methods: {
    handleSubmit() {
      this.loader = true;
      console.log(this.Email, this.Password);
      firebase
        .auth()
        .sendPasswordResetEmail(this.Email)
        .then(() => {
          this.Msg = `A Reset Password Link has been sent to your mail`;
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
.extra2 {
  display: flex;
  color: #6c63ff;
  justify-content: center;
  width: 20rem;
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
  width: 20rem;
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
