<template>
<div>
   <Menu></Menu>    
  <main>
     <div class="white-text">
      <div class="row white hoverable card" style="background-color: #0088cc !important;">
        <div class="col l3 s3 m3">
          <br>
          <img src="@/assets/telegram.png" alt="Telegram group" class='responsive-img'>
        </div>
        <div class="col l9 s9 m9">
         <h4>Telegram Group</h4>
          <p>blah blah blah blah blah blah blah</p>
        </div>
      </div>
    </div>

     <div class="white-text">
      <div class="row white hoverable card" style="background-color: #25d366 !important;">
        <div class="col l3 s3 m3">
          <br>
          <img src="@/assets/whatsapp.png" alt="Whatsapp Group" class='responsive-img'>
        </div>
        <div class="col l9 s9 m9">
        <h4>Whatsapp Group</h4>
          <p>Ask questions, Socialize and learn</p>
        </div>
      </div>
    </div>

     <div class="pur-text">
      <div class="row white hoverable card">
        <div class="col l3 s3 m3">
          <br>
          <img src="@/assets/teacher.svg" alt="Online Group" class='responsive-img'>
        </div>
        <div class="col l9 s9 m9">
       <h4>Personal tutors</h4>
          <p>one 0n one personal tutors</p>
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
    Menu,
  },
    data() {
      return {
        sideNav: { show: 'true', sign: 'menu' }
      };
    },
    methods: {

    }
  };
</script>

<style scoped>
.card{
border-radius: 1rem;
 margin: 1rem;
}
</style>