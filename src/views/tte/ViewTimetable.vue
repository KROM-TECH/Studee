<template>
  <div>
    <add-timetable :show="false" />
    <Menu />
    <NoTimetable v-if="!schedule.length" />
    <Timetable v-else :data="schedule" />
  </div>
</template>

<script>
import AddTimetable from "@/components/tte//AddTimetable.vue";
import NoTimetable from "@/components/tte/No_Time.vue";
import Timetable from "@/components/tte/TimetableContent.vue";
import Menu from "@/components/Menu";
export default {
  components: { AddTimetable, Menu, NoTimetable, Timetable },
  name: "Timetable_view",
  data() {
    return {
      schedule: []
    };
  },

  computed: {
    timetable() {
      return this.$store.state.timetable;
    }
  },

  watch: {
    timetable() {
      this.getSchedules();
    }
  },

  methods: {
    getSchedules() {
      console.log(this.timetable);
      this.schedule = this.timetable.filter(
        item => item.day == this.$route.query.day
      );
      console.log(this.schedule);
    }
  },

  created() {
    this.$store.commit("updateTimetable");

    this.getSchedules();
  }
};
</script>
