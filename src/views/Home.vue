<template>
  <div>
    <Menu></Menu>
    <main>
      <img src="../assets/Female.png" style="width:15rem" alt="" />
      <div class="talk-box">
        <p>
          Hi, Anon <br>
          I am <span style="color:#f388a8">PEA</span>, your <span style="color:#f388a8">P</span>ersonal <span style="color:#f388a8">E</span>ducative <span style="color:#f388a8">A</span>ssistant and I am here to help you achieve academic
          excellence. I can also make casual conversation, recommendations among other things, I am
          constantly being worked on to serve you better
        </p>
      </div>
      <div class="box"><div class="material-icons" style="font-size:35px" >mic</div></div>
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
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.box{
  width: 50px;
  height: 50px;
  background-color: rgba(107, 99, 255, 0.646);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ;
  cursor: pointer;

}
main {
  width: 100%;
  height: 100%;
}
.talk-box{
  background-color: #ffffff7d;
  width: 585px;
  margin: 2rem 0rem;
  border-radius: 10px;
  padding: 12px;
  text-align: center;
  line-height: 20px
}
@media screen and (max-width:635px) {
  .talk-box{
    width: 500px;
  }
}
@media screen and (max-width:535px) {
  .talk-box{
    width: 400px;
  }
}
@media screen and (max-width:435px) {
  .talk-box{
    width: 300px;
  }
}
</style>
