<template>
  <div>
    <Menu />
    <Fab type="Event" />

    <transition name="slide" appear>
      <div class="modall" v-if="showTime">
        <div class="modal_box">
          <div class="event_box">
            <span class="num">4 </span> <span class="word"> Months </span>
          </div>

          <div class="event_box">
            <span class="num">12 </span> <span class="word"> Weeks </span>
          </div>

          <div class="event_box">
            <span class="num">1982 </span> <span class="word"> days </span>
          </div>
        </div>
      </div>
    </transition>

    <main>
      <div class="card" v-for="n in 5" :key="n" @click="showTime = !showTime">
        <span class="text">Chinazor's Birthday</span>
      </div>
    </main>
  </div>
</template>

<script>
import Fab from "@/components/tte/Fab.vue";
import Menu from "@/components/Menu.vue";

export default {
  components: { Fab, Menu },
  data() {
    return {
      showTime: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.num {
  font-size: 2 rem;
  font-weight: 600;
}
.word {
  font-size: 1rem;
  font-weight: 550;
}
.num,
.word {
  color: #372faf;
}
.event_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #372faf; */
  padding: 6px;
  margin: 1rem;
}
img {
  width: 25%;
  height: auto;
}
.text {
  font-size: 30px;
  font-weight: 600;
  color: #372faf;
}
main {
  margin: 0px auto;
}
.card {
  margin: 7px 0px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 1px 2px 3px grey;
  padding: 1px 12px;
  border-radius: 0.3rem;
  border: 2px solid #382faf;
  width: 87vw;
  height: 100px;
  max-width: 380px;
}
.card:hover {
  background-color: #6b63ff23;
  cursor: pointer;
}

.Extremely {
  background-color: #bf787830;
}
.Normal {
  background-color: #78bf7a30;
}
.Not {
  background-color: #787abf30;
}
.modal_box {
  background-color: #fff;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 84vw;
  padding: 2.2rem 0rem;
  max-width: 480px;
}
.modal_text {
  color: #6c63ff;
  text-align: center;
  padding: 0rem 2rem;
}
.modal_button {
  display: flex;
  flex-wrap: wrap;
}
.modall {
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  z-index: 99;
  width: 100%;
  height: 100%;
  max-width: 100%;
  background-color: rgb(0, 0, 0, 0.25);
  border: 1px solid #6c63ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: scale(0);
}
</style>
