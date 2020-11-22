<template>
  <div>
    <Menu />
    <Fab type="timetable" />
    <main>
      <div class="card" v-for="n in content" :key="n.text" @click="changePage(n.text)">
        <img :src="n.image" class="img" />
        <span class="text">{{ n.text }}</span>
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
      content: [
        { image: require("@/assets/tte/mon.svg"), text: "Monday" },
        { image: require("@/assets/tte/tue.svg"), text: "Tuesday" },
        { image: require("@/assets/tte/wed.svg"), text: "Wesnesday" },
        { image: require("@/assets/tte/thur.svg"), text: "Thursday" },
        { image: require("@/assets/tte/fri.svg"), text: "Friday" },
        { image: require("@/assets/tte/sat.svg"), text: "Saturday" },
        { image: require("@/assets/tte/sun.svg"), text: "Sunday" },
      ],
    };
  },
  methods: {
    changePage(day) {
      this.$router.push({
        name: "ViewTimetable",
        query: { day: day },
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 25%;
  height: auto;
}
.text {
  font-size: 40px;
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
  border-radius: 1rem;
  border: 2px solid #382faf93;
  width: 290px;
  max-width: 95vw;
}
.card:hover {
  background-color: #6b63ff23;
  cursor: pointer;
}
</style>
