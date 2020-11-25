<template>
  <main>
    <transition name="slide" appear>
      <div class="modall" v-if="delModal">
        <div class="modal_box">
          <h3 class="modal_text">Are you sure you want to Delete?</h3>
          <div class="modal_button">
            <button
              class="btn bb Obtn"
              style="border:2px solid; margin-top:1rem;"
              @click="remove()"
            >
              Yes
            </button>
            <button
              class="btn bb Obtn"
              style="border:2px solid; margin-top:1rem;"
              @click="delModal = !delModal"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </transition>

    <fab type="timetable" />
    <div
      v-for="time in data"
      :key="time.subject"
      :class="['card', style(time.importance)]"
      @click="confirm(time)"
    >
      <span class="text">{{ time.subject }}</span>
      <div class="square">
        <p>{{ time.start }}</p>
        <p>to</p>
        <p>{{ time.end }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import Fab from "./Fab.vue";
export default {
  components: { Fab },
  name: "TimetableContent",
  props: ["data"],
  data() {
    return {
      delModal: false,
      delete_item: "",
    };
  },

  methods: {
    confirm(data) {
      this.delModal = true;
      this.delete_item = data;
    },
    remove() {
      let whole = JSON.parse(localStorage.getItem("timeTable"));

      const index = whole.findIndex((x) => x.id === this.delete_item.id);
      if (index > -1) {
        whole.splice(index, 1);
      }
      localStorage.setItem("timeTable", JSON.stringify(whole));
      this.$store.commit("updateTimetable");
      console.log(JSON.parse(localStorage.getItem("timeTable")));
      this.delModal = false;
    },
    style(data) {
      if (data == "Extremely") {
        return "Extremely";
      } else if (data == "Normal") {
        return "Normal";
      } else {
        return "Not";
      }
    },
  },
  created() {
    console.log(this.data);
  },
};
</script>

<style scoped>
.square {
  width: 55px;
  height: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #372faf;
  padding: 6px;
  color: #6c63ff;
  font-weight: 550;
}
.text {
  font-size: 5vh;
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
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 1px 2px 3px grey;
  padding: 1px 10px;
  border-radius: 0.2rem;
  border: 2px solid #382faf93;
  width: 340px;
  height: 100px;
  max-width: 95vw;
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
  flex-direction: column;
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
