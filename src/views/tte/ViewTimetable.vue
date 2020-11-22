<template>
  <h1>{{ $route.query.day }}</h1>
</template>

<script>
export default {
  name: "Timetable_view",

  created() {
    console.log(this.$route);
  },
};
</script>

<style></style>
