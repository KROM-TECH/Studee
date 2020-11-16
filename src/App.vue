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
  overflow-x: hidden;
}
.box {
  overflow: hidden;
}
.btn {
  width: 155px;
  height: 37px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  font-size: 16px;
  outline: none;
  margin: 1rem;
  cursor: pointer;
}
.btn:hover {
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.65);
}
.btn-large {
  width: 220px;
  height: 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  font-size: 16px;
  margin: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-large:hover {
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
  background: url(assets/general/bg.svg);
  position: absolute;
  background-size: cover;
  min-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
}
.material-icons {
  font-family: "Material Icons";
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
  font-feature-settings: "liga";
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
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
  border: 1.7px solid #6c63ff;
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
.pur-text {
  color: #6c63ff !important;
}

::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px #7570e2;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px #100c64;
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
