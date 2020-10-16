<template>
  <div class="bg">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  transition: 0.3s;
}
.btn {
  width: 155px;
  height: 37px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  font-size: 16px;
  margin: 1rem;
  cursor: pointer;

}
.btn:hover{
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.65);
}
.res-img {
  width: 100%;
  height: auto;
}
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)
    format("woff2");
}
body {
  background-color: rgb(220, 220, 220);
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}

.bg {
  background: url(assets/bg.svg);
  position: absolute;
  background-size: cover;
  min-width: 100vw;
  min-height: 100vh;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
}

.fade {
  animation: fade 0.5s forwards;
}
.but {
  display: block;
}
.Bbtn {
  background-color: #6c63ff;
  color: #ffffff;
}
.Wbtn {
  background-color: #ffffff;
  color: #6c63ff !important;
}
.Obtn {
  background-color: #ffffff;
  color: #6c63ff !important;
  border: 1px solid #6c63ff;
}
.but:hover {
  border: 1.5px solid #6c63ff;
}
.sign {
  border: 2px solid #795548;
  color: #795548 !important;
}
.input-field > label {
  position: static !important;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
