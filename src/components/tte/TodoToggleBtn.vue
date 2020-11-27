<template>
  <div
    class="togglebutton-wrapper"
    :class="isactive ? 'togglebutton-checked' : ''"
  >
    <label :for="name">
      <span class="togglebutton-label">{{ label }}</span>
      <span class="tooglebutton-box"></span>
    </label>
    <input
      :id="name"
      type="checkbox"
      :name="name"
      v-model="isactive"
      @change="onToogle"
    />
  </div>
</template>

<script>
export default {
  name: "TodoToggleBtn",
  props: ["label", "name"],

  data() {
    return {
      isactive: false
    };
  },

  methods: {
    onToogle() {
      this.$emit("clicked", this.isactive);
    }
  }
};
</script>

<style scoped>
.togglebutton-wrapper {
  margin-top: 1em;
}
.togglebutton-wrapper label {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.togglebutton-wrapper input {
  position: absolute;
  left: -9999px;
}
.togglebutton-wrapper .togglebutton-label {
  font-size: 0.8rem;
  letter-spacing: 0.1em;
}
.togglebutton-wrapper .tooglebutton-box {
  position: relative;
  display: block;
  margin-left: 0.6em;
  width: 38px;
  height: 22px;
  background: #6c63ff;
  /*border:1px solid black;*/
  border-radius: 999px;
  cursor: pointer;
}
.togglebutton-wrapper .tooglebutton-box:before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  display: block;
  width: 18px;
  height: 18px;
  /*border:1px solid #FF6666;*/
  border-radius: 50%;
  background: #372faf;
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
}
.togglebutton-wrapper.togglebutton-focus .tooglebutton-box {
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.8);
}
.togglebutton-wrapper.togglebutton-checked .tooglebutton-box:before {
  left: calc(100% - 4px - 16px);
  opacity: 1;
}
</style>
