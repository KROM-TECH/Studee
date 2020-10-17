<template>
  <div>
    <div class="container">
      <div class="rowOne">
        <img src="../assets/Logo.svg" class="res-img" alt="" />
       <h1 class="title">Login</h1>

       <form>
         <div class="form-input">
           <div class="material-icons" style="color:#6c63ff">account_circle</div>
           <input type="text">
         </div>

         <div class="form-input">
           <div class="material-icons" style="color:#6c63ff">lock</div>
           <input type="password">
         </div>

         <button class="btn Obtn">Login</button>
       </form>

      </div>
      <div class="rowTwo">
        <img src="../assets/book.svg" class="res-img book" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
input:-internal-autofill-selected {
    appearance: menulist-button;
    background-color: rgba(151, 145, 246, 0.1) !important;
    background-image: none !important;
    color: -internal-light-dark(black, white) !important;
}
form{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 4%;
}
.form-input{
  display: flex;
  /* width:70%; */
  align-items: center;
}
input{
      border: none;
    border-bottom: 1.9px solid #6c63ff;
    margin: 10px 2px;
    background-color: rgba(151, 145, 246, 0.1);
    width: 14rem;
    height: 2rem;
    outline: none;
    padding: 0px 5px;
}
input:focus{
  background-color: rgba(151, 145, 246, 0.5);
}
.title{
      font-weight: 100 !important;
    text-align: start;
    width: 45%;
    color: #6c63ff;
}
@media screen and (max-width: 865px) {
  .book {
    display: none;
  }
  .container {
    flex-direction: column;
  }
  .more{
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
