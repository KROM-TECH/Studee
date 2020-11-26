<template>
  <div class="modal">
    <transition name="slide" appear>
      <div class="modall" v-if="show" @click="close($event)">
        <div class="modal_box">
          <form @submit.prevent="save">
            <div class="input_elem">
              <label for="day">Day</label>
              <select v-model="day" id="day" required>
                <option value="" disabled selected>What day of the week ?</option>
                <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
              </select>
            </div>
            <div class="input_elem">
              <label for="day">Subject</label>
              <input
                type="text"
                v-model="subject"
                required
                placeholder="What subject do you have ?"
              />
            </div>
            <div class="input_elem">
              <label for="day">Start Time</label>
              <input
                type="time"
                v-model="Start_Time"
                required
                placeholder="What time does this start ?"
              />
            </div>
            <div class="input_elem">
              <label for="day">End Time</label>
              <input
                type="time"
                v-model="End_Time"
                required
                placeholder="What time does this end ?"
              />
            </div>

            <div class="input_elem">
              <label for="day">Importance</label>
              <select v-model="Importance" id="" required>
                <option value="" disabled selected>how important is this subject</option>
                <option v-for="item in important" :key="item" :value="item">{{ item }}</option>
              </select>
            </div>

            <button type="submit" class="Obtn btn">Save</button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "AddTimetable",
  props: ["show"],
  data() {
    return {
      day: "",
      subject: "",
      Start_Time: "",
      End_Time: "",
      Importance: "",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      important: ["Extremely", "Normal", "Not"],
    };
  },
  computed: {
    timetable() {
      return {
        id: uuidv4(),
        day: this.day,
        subject: this.subject,
        start: this.Start_Time,
        end: this.End_Time,
        importance: this.Importance,
      };
    },
  },
  methods: {
    close(e) {
      if (e.target.className == "modall") {
        this.$emit("close");
      }
    },
    reset() {
      this.day = "";
      this.subject = "";
      this.Start_Time = "";
      this.End_Time = "";
      this.Importance = "";
    },
    addToLocalStorageArray(value) {
      var existing_timetable = localStorage.getItem("timeTable");

      if (existing_timetable == null) {
        existing_timetable = [];
        // Add new data to localStorage Array
        existing_timetable.push(value);
        // Save back to localStorage
        localStorage.setItem("timeTable", JSON.stringify(existing_timetable));
      } else {
        existing_timetable = JSON.parse(existing_timetable);
        // Add new data to localStorage Array
        existing_timetable.push(value);
        // Save back to localStorage
        localStorage.setItem("timeTable", JSON.stringify(existing_timetable));
      }
    },
    save() {
      this.addToLocalStorageArray(this.timetable);
      this.$emit("close");
      this.$store.commit("updateTimetable");
      this.reset();
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  font-size: 19px;
  font-weight: 600;
  color: #6c63ff;
  letter-spacing: 0px;
  margin-bottom: 5px;
}
.input_elem {
  margin-top: 10px;
  overflow: hidden;
}
::-webkit-input-placeholder {
  font-size: 16px;
  text-align: start;
  color: #6c63ff;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
input {
  width: 212px !important;
  height: 34px;
  border: 1px solid #6c63ff;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px; 
  padding: 0px 1rem;
  font-size: 16px;
  text-align: start;
  color: #6c63ff;
}
select {
  width: 246px !important;
  height: 34px;
  border: 1px solid #6c63ff;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0px 1rem;
  font-size: 16px;
  text-align: center;
  color: #6c63ff;
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
