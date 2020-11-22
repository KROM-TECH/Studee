<template>
  <div>
    <add-timetable :show="TimetableModal" @close="TimetableModal = !TimetableModal" />
    <transition name="slide" appear>
      <span v-show="fab" class="fab" @click="Show_Modal"><i class="material-icons">add</i></span>
    </transition>
  </div>
</template>

<script>
import AddTimetable from "./AddTimetable.vue";
export default {
  components: { AddTimetable },
  props: ["type"],
  name: "fab",
  data() {
    return {
      TimetableModal: false,
      fab: true,
      prevScrollpos: window.pageYOffset,
      currentScrollPos: window.pageYOffset,
    };
  },
  methods: {
    Show_Modal() {
      if (this.type == "timetable") {
        
        this.TimetableModal = true;
      }
    },
    scroll() {
      // var prevScrollpos = window.pageYOffset;
      window.addEventListener("scroll", () => {
        // var currentScrollPos = window.pageYOffset;
        this.currentScrollPos = window.pageYOffset;
        if (this.prevScrollpos > this.currentScrollPos) {
          this.fab = true;
        } else {
          this.fab = false;
        }
        this.prevScrollpos = this.currentScrollPos;
      });
    },
  },
  mounted() {
    (this.fab = true), this.scroll();
  },
};
</script>

<style>
.fab {
  width: 62px;
  height: 62px;
  padding: 0;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  z-index: 1;
  border-radius: 50%;
  text-align: center;
  letter-spacing: 0.5px;
  color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  background-color: #6c63ff;
  display: flex;
  justify-content: center;
  align-items: center;
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
