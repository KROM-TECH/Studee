<template>
  <div>
    <Menu></Menu>
  <main>
    <div class="pur-text">
      <div class="row white hoverable card" style="  border-radius: 1rem; margin: 1rem;">
        <div class="col l3 s3 m3">
          <br>
          <img src="@/assets/CO.png" alt="course outline" class='responsive-img'>
        </div>
        <div class="col l9 s9 m9">
          <h3>Course Outline</h3>
          <p>get course outline for different university courses</p>
        </div>
      </div>
    </div>

    <div class="pur-text">
      <div class="row white hoverable card" href="#" style=" border-radius: 1rem; margin: 1rem; ">
        <div class="col l3 s3 m3">
          <br>
          <img src="@/assets/problem.svg" alt="past questions" class="responsive-img">
        </div>
        <div class="col l9 s9 m9">
          <h3>Past Questions</h3>
          <p>for a minimal fee get up to date past questions with solutions</p>
        </div>
      </div>
    </div>

    <div class="pur-text">
      <div class="row white hoverable card" style=" border-radius: 1rem; margin: 1rem;">
        <div class="col l3 s3 m3">
          <br>
          <img src="@/assets/teacher.svg" alt="online support" class="responsive-img ">
        </div>
        <div class="col l9 s9 m9">
          <h3>Online Group</h3>
          <p>Social Group chats on different platforms to chat and brainstorm together</p>
        </div>
      </div>
    </div>

    <div class="pur-text">
      <div class="row white hoverable card" style=" border-radius: 1rem; margin: 1rem;">
        <div class="col l3 s3 m3">
          <br>
          <img src="@/assets/ask-question.png" alt="questions" class="responsive-img ">
        </div>
        <div class="col l9 s9 m9">
          <h3>Questions</h3>
          <p>For unsubscribed customers, we provide a platform for you to get answers to tricky questions too by asking your mates</p>
        </div>
      </div>
    </div>


  </main>

 
  </div>
</template>

<script>
import Menu from '@/components/Menu'
  export default {
    components:{
      Menu
    },
    data() {
      return {
      };
    },
    methods: {
  
    }
  };
</script>
<style>

</style>