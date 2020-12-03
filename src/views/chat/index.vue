<template>
  <div>
    <Menu />
    <transition name="slide" appear>
      <div class="body">
        <img src="@/assets/chat/comingChat.svg" class="res-img grow" alt="" />
        <div class="case">
          <span class="CS">Anonymous chat</span> <span class="CS">Geo-location chat</span>
          <span class="CS">Voice and Video chat</span>
          <span class="CS">And Much More</span>
        </div>

        <h1>Coming Soon</h1>
      </div>
    </transition>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  components: { Menu },
  name: "CSMarket",
};
</script>

<style scoped>
.case {
  margin-top: 2rem;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
h1 {
  margin-top: 2rem;
  color: #6c63ff;
  font-size: 7.5vh;
}
.CS {
  margin: 5px 9px;
  font-size: 1rem;
  font-style: italic;
  color: #6c63ff;
  font-weight: 600;
  background-color: #2f2e41;
  padding: 1.5vh;
  overflow: hidden;
  border-radius: 10px;
}

.body {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  position: fixed;
  overflow-x: hidden;
  top: 0;
  left: 0;
  background-color: rgb(220, 220, 220);
}
.grow {
  width: 35%;
  height: auto;
}

@media screen and (max-width: 640px) {
  .grow {
    width: 65%;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: 1s;
}

.slide-enter,
.slide-leave-to {
  transform: scale(1);
}
</style>
