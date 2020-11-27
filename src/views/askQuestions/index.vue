<template>
  <div>
    <Menu></Menu>
    <main class="fade">
      <img src="@/assets/askQuestions/questions.svg" class="img" />

      <div class="contain">
        <div class="box" @click="ask">
          <img src="@/assets/askQuestions/ask.svg" class="box-img" />
          <p class="box-text">Ask</p>
          <div></div>
        </div>

        <div class="box" @click="answer">
          <img src="@/assets/askQuestions/answer.svg" class="box-img" />
          <p class="box-text">Answer</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    ask() {
      this.$router.push({ name: "Ask" });
    },
    answer() {
      this.$router.push({ name: "Answer" });
    }
  }
};
</script>

<style scoped>
.box-text {
  text-align: center;
  color: #372faf;
  font-size: 20px;
}
.box-img {
  max-width: 4.5rem;
  height: auto;
  margin: 1rem;
}
.box {
  background-color: #ffffff;
  border-radius: 10px;
  width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 2rem;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(104, 104, 104, 0.3);
}
.box:hover {
  background-color: #6c63ff34;
}
@media screen and (max-width: 580px) {
  .box {
    flex-direction: row;
    width: 200px;
    height: 15px;
    justify-content: flex-start;
  }
  .box-img {
    max-width: 2rem;
    height: auto;
    margin: 1rem;
  }
}
.contain {
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.head {
  line-height: 47px;
  text-align: center;
  color: #6c63ff;
  text-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  font-weight: 700;
}

.img {
  max-width: 12rem;
  height: auto;
  border-radius: 50%;
}

main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
}
</style>
