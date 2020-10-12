<template>
  <div>
    <router-view />
  </div>
</template>









<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
*{
  margin: 0;
  padding: 0;
  /* font-family: 'lobster Two', cursive; */
  font-family: 'Nunito Sans', cursive;
  transition: 0.3s
  
}
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}
body{
  background-color: rgb(220, 220, 220);
  overflow-x: hidden;
}

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
  }



.fade{
  animation: fade 0.5s    forwards ;
}
.but{
  display: block;
}
.but:hover{
  border: 1.5px solid #6c63ff;
}
.sign{
  border: 2px solid #795548;
  color: #795548 !important;
}
.input-field>label {
  position: static!important;
}
@keyframes slide {
  from{
    left:100vw;
  }
  to{
    left: 0;
  }
}
@keyframes fade {
  from{
    opacity:0;
  }
  to{
    opacity: 1;
  }
}

</style>
