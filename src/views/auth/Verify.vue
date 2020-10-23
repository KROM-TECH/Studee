<template>
<div class="content">
        <h4 class="center-align">
          verify your Email to Proceed
        </h4>
          <button class="btn pur hoverable but" id="verify">Verify</button>
        <p class="center pur-text" id="verifymsg"></p>

        <img class="responsive-img" src="@/assets/verify.svg" alt="">
</div>



</template>

<script>
export default {

}
</script>

<style scoped>
.but{
  width: 70%;
}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
}
img{
max-width: 60% !important;
margin-top: 4rem;
}

</style>