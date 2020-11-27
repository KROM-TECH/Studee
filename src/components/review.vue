<template>
  <div class="ireview">
    <div class="rev_box">
      <img class="review_img" src="@/assets/general/profile.png" />
      <div class="content">
        <p class="name">Sakura Chan</p>
        <div class="rline">
          <Rating />
          <p class="date">7th jan 2020</p>
        </div>
      </div>
    </div>

    <p class="details">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe magnam
      dignissimos mollitia reprehenderit debitis optio adipisci ut corporis,
      sunt deleniti est tempora fugiat sapiente eaque voluptatum, culpa, cum
      tempore odio?
    </p>
  </div>
</template>

<script>
import Rating from "@/components/Rating";
export default {
  components: {
    Rating
  }
};
</script>

<style scoped>
.details {
  color: #1f1890;
  padding: 7px;
}
.review_img {
  width: 50px;
  height: auto;
  border-radius: 50%;
}
.date {
  font-size: 13px;
  color: #1f1890;
  font-style: italic;
  margin: 1px;
  font-weight: 550;
}
.rline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.rev_box {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  max-width: 500px;
}
.name {
  color: #6c63ff;
  font-weight: 550 !important;
}
.content {
  text-align: start;
  width: 100%;
}
.extra {
  font-size: 12px;
}
.ireview {
  padding: 0.8rem 0.4rem;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 3px #6c63ff;
}
</style>
