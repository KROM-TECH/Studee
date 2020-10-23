<template>
  <div v-show="loader" class="body">
    <img src="@/assets/Logo.svg" class="res-img grow" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: true,
    };
  },
  methods: {
    check() {
      document.addEventListener("readystatechange", () => {
        console.log(document.readyState);
        if (document.readyState == "complete") {
          this.loader = false;
        } else {
          this.loader = true;
        }
      });
    },
  },
  created() {
    this.check();
  },
};
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  position: fixed;
  overflow-x: hidden;
  top: 0;
  left: 0;
  background-color: rgb(220, 220, 220);
}
.grow {
  animation: grow 3s forwards infinite;
}
@keyframes grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
