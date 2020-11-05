<template>
  <div>
    <Menu />
    <div class="container">
      <p class="title">Showing result for year 1, Engineering of Unilag</p>
      <div class="query">
        <div class="box" v-for="n in 10" :key="n">
          <img src="@/assets/profile.png" />
          <div class="content">
            <p class="name">Sakura Chan</p>
            <Rating />
            <p class="extra">
              I love to do a lot of things but low-key, I'm just tired and all we move sha, the rest
              is just testing.....
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Rating from "@/components/Rating";
export default {
  components: {
    Menu,
    Rating,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
.query {
  display: flex;
  max-width: 900px;
  flex-wrap: wrap;
  justify-content: center;
}

.name {
  color: #6c63ff;
  font-weight: 550 !important;
}
.content {
  text-align: start;
}
.extra {
  font-size: 12px;
}
img {
  width: auto;
  min-width: 24%;
  height: 100%;
}
.box {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  width: 88rem;
  height: 110px;
  border: 1px solid #6c63ff;
  max-width: 435px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 7px 3px;
  padding: 3px;
}

.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 21px;
  padding: 1rem;
  letter-spacing: 2.3px;
  font-weight: 550;
  color: #6c63ff;
}
@media screen and (max-width: 400px) {
  .box {
    max-width: 300px;
  }
  img {
    min-width: 37%;
  }
}
</style>
