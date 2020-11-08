<template>
  <div>
    <!-- <Loader /> -->
    <Menu />
    <div class="container">
      <div class="rowOne">
        <img src="@/assets/general/Logo.svg" class="res-img" alt="logo" />
        <div style="max-width:100rem">
          <p style="padding:1rem; max-width:30rem">
            Studee is a platform created by Kromtech to help out students in their academic
            endeavours. <br />
            It has various features like
          </p>
        </div>

        <div class="case">
          <h4 class="header">Course Outline and Past Question</h4>
          <p class="det">get your various course outlines and past Questions all in one spot.</p>
        </div>

        <div class="case">
          <h4 class="header">Find Local Tutors</h4>
          <p class="det">
            hire local tutors to help you out in that subjuct that has been proving difficult
          </p>
        </div>

        <div class="case">
          <h4 class="header">Create Timetables and Reminder</h4>
          <p class="det">Create timetables and reminders to plan your day/week/month</p>
        </div>

        <div class="case">
          <h4 class="header">Share Notes & Resources</h4>
          <p class="det">
            Instead of carrying large books or snapping your notes to send to your friends, use our
            Share notes feature to keep your books up to date and share among friends
          </p>
        </div>
      </div>
      <div class="rowTwo">
        <img src="@/assets/auth/book.svg" class="res-img book" alt="image" />

        <h1 class="more">And So Much More</h1>
        <p class="more-min">So what are you waiting for</p>

        <div>
          <a href="/signup"> <button class="btn Bbtn">Create an Account</button></a>
          <button class="btn Wbtn">Tell a Friend</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
// import Loader from "@/components/Loader";
export default {
  components: {
    Menu,
    // Loader,
  },
};
</script>

<style scoped>
@media screen and (max-width: 865px) {
  .book {
    display: none;
  }
  .container {
    flex-direction: column;
  }
  .more {
    font-size: 35px !important;
    font-weight: 600 !important;
  }
}

.more-min {
  color: #6c63ff;
  font-style: italic;
  font-size: 20px;
}
.more {
  margin-top: 3rem;
  font-style: italic;
  font-weight: normal;
  font-size: 50px;
  text-align: center;

  color: #6c63ff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.case {
  max-width: 20rem;
}
.det {
  padding: 0.5rem 0.8rem;
}
.header {
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 4px;
  /* min-width: 280px; */
  color: #6c63ff;
  font-weight: normal;
  margin: 1rem;
  margin-bottom: 0;
}
.container {
  display: flex;
  padding: 5px;
}
.rowOne,
.rowTwo {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
