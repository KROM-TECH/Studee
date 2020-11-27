<template>
  <div>
    <Menu />
    <main>
      <img src="@/assets/general/Female.png" style="width:15rem" alt="" />
      <div class="dotsContainer">
        <span id="dot1" :class="{ listening_style: listening }"></span>
        <span id="dot2" :class="{ listening_style: listening }"></span>
        <span id="dot3" :class="{ listening_style: listening }"></span>
      </div>
      <div class="talk-box">
        <h3>Hi, Anon</h3>
        <div class="chat_container">
          <span class="chat_block left">What can i do for you today ?</span>
        </div>
        <div class="chat_container">
          <span class="chat_block right">Set a reminder for 3pm</span>
        </div>
        <div class="chat_container">
          <span class="chat_block left">Setting Reminder</span>
        </div>
      </div>
      <div class="box" @click="listen">
        <div class="material-icons" style="font-size:35px">mic</div>
      </div>
    </main>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu
  },
  data() {
    return {
      listening: false
    };
  },
  methods: {
    listen() {
      this.listening = !this.listening;
    }
  }
};
</script>
<style scoped>
.chat_container {
  padding: 5px;
}
.chat_block {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  width: auto;
  padding: 5px;
  max-width: 280px;
  display: block;
  border: 1px solid #999;
}
.left {
  float: left;
  background: rgba(184, 180, 255);
}
.right {
  float: right;
  background: #ffffff;
}
.box {
  width: 50px;
  height: 50px;
  background-color: rgba(107, 99, 255, 0.646);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #6c63ff;
  cursor: pointer;
  color: #6c63ff;
}
main {
  width: 100%;
  height: 100%;
}
.talk-box {
  background-color: #ffffff;
  width: 585px;
  margin: 2rem 0rem;
  border-radius: 10px;
  padding: 12px;
  text-align: center;
  line-height: 20px;
  box-shadow: 1px 2px 3px #ded9d9, -1px -2px 3px #ded9d9;
}
@media screen and (max-width: 635px) {
  .talk-box {
    width: 500px;
  }
}
@media screen and (max-width: 535px) {
  .talk-box {
    width: 400px;
  }
}
@media screen and (max-width: 435px) {
  .talk-box {
    width: 300px;
  }
}
/*============ Listening animation================== */
.dotsContainer {
  width: 100px;
  height: 40px;
  background: #fff;
  border-radius: 15px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 3px #ded9d9, -1px -2px 3px #ded9d9;
}
.dotsContainer #dot1,
.dotsContainer #dot2,
.dotsContainer #dot3 {
  width: 10px;
  height: 10px;
  background: #6c63ff;
  border-radius: 100%;
  margin: 5px;
  transition: all 0.5s ease-in-out;
}
.listening_style {
  animation: typing 1s infinite;
}

.dotsContainer #dot1 {
  animation-delay: 1s;
}
.dotsContainer #dot2 {
  animation-delay: 0.5s;
}
.dotsContainer #dot3 {
  animation-delay: 0.8s;
}

@keyframes typing {
  0% {
    transform: translateY(0);
    transition: all 0.5s ease-in-out;
  }
  50% {
    transform: translateY(-5px);
    transition: all 0.5s ease-in-out;
  }
  100% {
    transform: translateY(0);
    transition: all 0.5s ease-in-out;
  }
}
</style>
