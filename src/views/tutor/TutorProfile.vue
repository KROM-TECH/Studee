<template>
  <div>
    <Menu></Menu>
    <main class="fade">
      <img src="@/assets/profile.png" />
      <!-- <img src="https://miro.medium.com/max/587/1*JeI9eP6upNk-1uQ3Z62Tvw.png" /> -->
      <div class="contain">
        <div class="box">
          <p class="head">Display Name</p>
          <input
            type="text"
            placeholder="Enter your Display Name"
            :disabled="!active"
            :class="active ? 'active' : ''"
          />
        </div>
        <div class="box">
          <p class="head">Email</p>
          <input
            type="email"
            placeholder="Enter your Mail"
            :disabled="!active"
            :class="active ? 'active' : ''"
          />
        </div>
      </div>
      <div class="contain">
        <div class="box">
          <p class="head">Phone Number</p>
          <input
            type="number"
            placeholder="Enter your number"
            :disabled="!active"
            :class="active ? 'active' : ''"
          />
        </div>
        <div class="box">
          <p class="head">Availability</p>
          <select name="" id="" :disabled="!active" :class="active ? 'active' : ''">
            <option value="" disabled selected>Choose your option</option>
            <option value="yes" class="left">Yes</option>
            <option value="no" class="left">No</option>
          </select>
        </div>
      </div>
      <div class="contain">
        <div class="box">
          <p class="head">University / Location</p>
          <input
            type="text"
            placeholder="Enter your Location"
            :disabled="!active"
            :class="active ? 'active' : ''"
          />
        </div>
        <div class="box">
          <p class="head">Courses / Subjects</p>
          <input
            type="email"
            placeholder="Enter the Subjects you teach"
            :disabled="!active"
            :class="active ? 'active' : ''"
          />
        </div>
      </div>
      <div class="contain">
        <div class="box">
          <p class="head">Bio</p>
          <textarea
            type="text"
            placeholder="A little bit about you"
            :disabled="!active"
            :class="active ? 'active' : ''"
          ></textarea>
        </div>
      </div>

      <button v-if="!active" class="btn Obtn" @click="active = !active">
        Update
      </button>
      <button v-if="active" class="btn Obtn" @click="active = !active">
        Save
      </button>
    </main>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu,
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
.box {
  margin: 5px 30px;
}
.contain {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
input {
  width: 180px !important;
  height: 34px;
  border: 1px solid #6c63ff;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0px 1rem;
  text-align: center;
}
select {
  width: 212px !important;
  height: 34px;
  border: 1px solid #6c63ff;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0px 1rem;
  text-align: center;
}
textarea {
  width: 300px;
  max-width: 512px !important;
  height: 34px;
  border: 1px solid #6c63ff;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 5px 1rem;
  text-align: center;
}
input:disabled {
  background-color: #fff;
  border: none;
}
select:disabled {
  background-color: #fff;
  border: none;
}
textarea:disabled {
  background-color: #fff;
  border: none;
}
.head {
  line-height: 47px;
  text-align: center;
  color: #6c63ff;
  text-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  font-weight: 700;
}
button {
  overflow: hidden;
}
img {
  max-width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 0 1pc black;
}

main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
}
.active {
  border: none;
  border-bottom: 1.9px solid #6c63ff;
  background-color: rgba(151, 145, 246, 0.3);
  max-width: 20rem;
  max-height: 2.4rem;
  outline: none;
  border-radius: 0px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
