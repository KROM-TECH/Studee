<template>
  <div>
    <Menu></Menu>
    <main class="fade">
      <img class="profile_img" src="@/assets/general/profile.png" />
      <p class="p1">Hatake Sakura</p>
      <p class="p2">20th November 2016</p>
      <p class="p3">Quadratic equations involving Fractions</p>
      <p class="bio">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quae ab nam ipsa fugiat
        molestiae dolor quisquam dolore dignissimos illum, autem cum eum inventore accusantium esse
        quas atque corrupti. Ipsam!
      </p>
      <!-- <img src="https://miro.medium.com/max/587/1*JeI9eP6upNk-1uQ3Z62Tvw.png" /> -->

      <div class="contain">
        <div class="box">
          <p class="head">Review</p>
          <div class="review_box">
            <Review v-for="n in 2" :key="n" />
          </div>
        </div>
      </div>

      <div>
        <button v-if="!active" class="btn Obtn" @click="active = !active">
          Update
        </button>
        <button v-if="active" class="btn Obtn" @click="active = !active">
          Save
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Review from "@/components/review";
export default {
  components: {
    Menu,
    Review,
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
.review_box {
  background-color: white;
  max-width: 500px;
  border: 1px solid #6c63ff;
  width: 80vw;
}
.p1 {
  font-weight: 550;
  color: #6c63ff;
  font-size: 18px;
  margin-top: 10px;
}
.p2 {
  font-weight: 500;
  color: #6c63ff;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.p3 {
  font-weight: 600;
  color: #6c63ff;
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.bio {
  color: #6c63ff;
  font-size: 18px;
  width: 90vw;
  max-width: 450px;
  text-align: center;
}
.box {
  margin: 5px 30px;
}
.contain {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.det {
  width: 180px !important;
  border: 1px solid #6c63ff;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0.4rem 1rem;
  text-align: center;
  color: #1f1890;
  font-weight: 600;
}

.head {
  line-height: 47px;
  text-align: center;
  color: #6c63ff;
  text-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  font-weight: 700;
}
button {
  overflow: hidden;
}

.profile_img {
  width: 200px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 0.5pc black;
}

main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
}
.active {
  border: none;
  border-bottom: 1.9px solid #6c63ff;
  background-color: rgba(151, 145, 246, 0.3);
  max-width: 20rem;
  max-height: 2.4rem;
  outline: none;
  border-radius: 0px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
