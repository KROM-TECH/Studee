<template>
  <div>
    <main>
      <div class="input_field">
        <select class="icons" id="level">
          <option value="" disabled selected>Filter by</option>
          <option value="University">University</option>
          <option value="State">State</option>
        </select>
      </div>

      <div class="box">
        <div class="content">
          <p class="title">
            How to solve the quadratic equations that involves only the other fraction blah blah
            blah
          </p>
          <div class="badges">
            <p class="badge">Math</p>
            <p class="badge">Unilag</p>
            <p class="badge">Engineering</p>
          </div>
          <p class="date">Posted: 20th November 2016</p>
        </div>
        <div class="opt">
          <div class="fav">
            <div class="material-icons ">thumb_up</div>
          </div>
          <div class="fav">
            <div class="material-icons ">speaker_notes</div>
          </div>
          <div class="fav">
            <div class="material-icons ">visibility</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.material-icons {
  color: #372faf;
}
.opt {
  display: flex;
  flex: 0.2;
}
.date {
  font-style: italic;
  color: #372faf;
  font-weight: 550;
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
.badge {
  border-radius: 0.2rem;
  font-size: 12px;
  line-height: 1;
  padding: 0.375rem 0.5625rem;
  font-weight: normal;
  color: #fff;
  background: #6c63ff;
  margin-right: 12px;
}
.badges {
  display: flex;
  margin: 7px 0px;
}
.content {
  display: flex;
  flex-direction: column;
  flex: 0.8;
}
.box {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  max-width: 90vw;
  border: 1px solid #6c63ff;
  border-radius: 0.4rem;
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
