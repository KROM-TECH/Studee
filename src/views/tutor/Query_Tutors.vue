<template>
  <div>
    <Menu />
    <div class="container">
      <p class="title">Search Result</p>
      <div class="query">
        <div class="box" v-for="tutors in queriedtutors" :key="tutors.bio">
          <img src="@/assets/general/profile.png" />
          <!-- <img
            src="data:image/jpeg;base64,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"
          /> -->
          <div class="content">
            <p class="name">{{ tutors.display_name }}</p>
            <Rating />
            <p class="extra">
              {{ tutors.bio }}
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
      queriedtutors: [],
    };
  },
  created() {
    this.queriedtutors = JSON.parse(localStorage.getItem("querytutor"));
    console.log(this.queriedtutors);
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
  width: 110px;
  min-width: 24%;
  height: 110px;
  border-radius: 50%;
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
