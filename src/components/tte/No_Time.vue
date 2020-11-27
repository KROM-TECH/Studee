<template>
  <div>
    <add-timetable
      :show="TimetableModal"
      @close="TimetableModal = !TimetableModal"
    />
    <transition name="slide" appear>
      <div class="body">
        <img src="@/assets/tte/no_time.svg" class="res-img grow" alt="" />
        <p class="text">
          it seem's like there isn't any Subject set for {{ $route.query.day }}
        </p>
        <button
          class="btn Obtn btn-large"
          style="border:2px solid; margin-top:1rem;"
          @click="TimetableModal = !TimetableModal"
        >
          Create
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import AddTimetable from "./AddTimetable.vue";
export default {
  name: "no_timetable",
  components: { AddTimetable },
  data() {
    return {
      TimetableModal: false
    };
  }
};
</script>

<style scoped>
.text {
  font-size: 2.5vh;
  text-align: center;
  color: #6c63ff;
  font-weight: 550;
  margin: 15px 4px;
}
.body {
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
