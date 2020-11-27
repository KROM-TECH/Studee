<template>
  <div>
    <Menu></Menu>
    <main>
      <div class="input_field">
        <select class="icons" id="level">
          <option value="" disabled selected>Filter by</option>
          <option value="University">University</option>
          <option value="State">State</option>
        </select>
      </div>

      <div class="box" v-for="n in 10" :key="n">
        <div class="content">
          <p class="title">
            How to solve the quadratic equations that involves only the other
          </p>
          <div class="badges">
            <p class="badge">Math</p>
            <p class="badge">Unilag</p>
            <p class="badge">Engineering</p>
            <p class="badge">Engineering</p>
            <p class="badge">Engineering</p>
          </div>

          <p class="date">Posted: 20th November 2016</p>
        </div>
        <div class="opt">
          <div class="OC">
            <p>10</p>
            <!-- <p>Votes</p> -->
            <div class="material-icons ">thumb_up</div>
          </div>
          <div class="OC">
            <p>3</p>
            <!-- <p>Answer</p> -->
            <div class="material-icons ">speaker_notes</div>
          </div>
          <div class="OC">
            <p>10</p>
            <!-- <p>Views</p> -->
            <div class="material-icons ">visibility</div>
          </div>
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
  }
};
</script>

<style scoped>
.OC {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0.4rem;
  background: #6b63ff7b;
  border-radius: 10%;
  justify-content: center;
}
.OC > p {
  color: #372faf;
}
.material-icons {
  color: #372faf;
}
.opt {
  display: flex;
  flex: 0.3;
  justify-content: center;
}
@media screen and (max-width: 640px) {
  .opt {
    flex: 0.2;
  }
  .content {
    flex: 0.8 !important;
  }
}
@media screen and (max-width: 869px) {
  .opt {
    /* flex-direction: column; */
    flex-wrap: wrap;
  }
}
.date {
  font-style: italic;
  color: #372faf;
  font-weight: 500;
}
.title {
  /* font-size: 13px; */
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #372faf;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 0.7;
}
.box {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  max-width: 90vw;
  border: 1px solid #6c63ff;
  border-radius: 0.4rem;
  margin: 10px 0px;
  padding-right: 1px;
  cursor: pointer;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
select {
  width: 80vw !important;
  text-align: center;
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #6c63ff;
  outline: none;
  height: 3rem;
  margin: 0 0 8px 0;
  background-color: rgba(152, 145, 246, 0.2);
}
.input_field {
  margin-bottom: 3rem;
}
</style>
