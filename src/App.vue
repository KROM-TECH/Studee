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
  font-family: 'lobster Two', cursive;
}
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
  .menu {
    color: #6c63ff; 
    background-color: white;
    box-shadow: 1px 4px 2px 0 rgba(0, 0, 0, 0.14), -3px 4px 1px -2px rgba(0, 0, 0, 0.12), 1px 3px 5px 2px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    padding: 0.5rem;
    margin-right: 1.5rem;
    margin-top: 0.8rem;
    position: fixed;
    right: 0;
    z-index: 10;
  }
  .menu:hover {
    background-color: #6c63ff;
    color: white;
    cursor: pointer;
    
  }
  .sidebar{
    background-color: rgb(220, 220, 220);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: slide 0.5s    forwards ;
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
