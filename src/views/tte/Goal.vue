<template>
  <div>
    <Menu />
    <Fab type="Event" />
    <main>
      <div class="card" v-for="n in 5" :key="n">
        <span class="text">Become the best in the world in whatever you do</span>
        <img src="@/assets/tte/mon.svg" class="img" />
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
    return {};
  },
  methods: {},
};
</script>

<style scoped>
img {
  width: 25%;
  height: auto;
}
.text {
  font-size: 16px;
  font-weight: 550;
  color: #1e1688;
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

</style>
