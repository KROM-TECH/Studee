<template>
  <div>
    <Menu></Menu>
    <main class="fade">
      <div class="input-field">
        <label>Select Your Sem Plan</label>
        <select>
          <option value="" disabled selected>free Sem plan</option>
          <option value="basic">Basic Sem Plan</option>
          <option value="premium">Premium Sem plan</option>
        </select>
      </div>

      <div class="input-field">
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Email" required />
      </div>

      <div class="input-field">
        <label for="fullName">Full Name</label>
        <input id="fullName" type="text" placeholder="full Name" required />
      </div>

      <div class="input-field">
        <label for="phoneNum">Phone Number</label>
        <input id="phoneNum" type="text" placeholder="phone Number" required />
      </div>

      <button
        class=" btn btn-large white pur-text"
        style=" width: 10rem; border: 2px solid #6C63FF;"
      >
        Pay
      </button>
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
select {
  width: 80vw !important;
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  outline: none;
  height: 3rem;
  margin: 0 0 8px 0;
}
select:focus {
  border-bottom: 1px solid #26a69a;
}
input {
  width: 80vw !important;
  display: block;
}
main {
  background-color: rgb(220, 220, 220);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
}
</style>
