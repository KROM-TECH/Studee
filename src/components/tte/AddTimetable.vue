<template>
  <div class="modal">
    <transition name="slide" appear>
      <div class="modall" v-if="show">
        <div class="modal_box">
          <h3 class="modal_text">Are you sure you want to edit your profile ?</h3>
          <div class="modal_button">
            <button class="btn bb Obtn" style="border:2px solid; margin-top:1rem;">
              Yes
            </button>
            <button
              class="btn bb Obtn"
              style="border:2px solid; margin-top:1rem;"
              @click="$emit('close')"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AddTimetable",
  props: ["show"],
};
</script>

<style scoped>
.modal_box {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 84vw;
  max-width: 480px;
  height: 185px;
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
