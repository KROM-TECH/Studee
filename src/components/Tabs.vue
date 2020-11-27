<template>
  <div class="tw-flex" :class="[horizontal ? 'tw-flex-row' : 'tw-flex-col']">
    <div
      class="tw-font-bold tw-cursor-pointer"
      :class="css__tab(tabs[i], i)"
      :style="spacing ? 'margin: 0 120px' : ''"
      v-for="(tab, i) in tabs"
      :key="i"
      @click="$emit('current-tab', tab)"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    currentTab: String,
    tabs: Array,
    vertical: Boolean,
    tabStyle: String,
    spacing: Boolean,
    activeStyle: String,
    inactiveStyle: String,
    horizontal: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    css__tab(selectedTab, tabIndex) {
      let tab;
      if (this.horizontal) {
        this.tabs.length - 1 == tabIndex ? (tab = "") : (tab = "tw-mr-10");
        // console.log("****", selectedTab, this.tabs.length);

        if (this.currentTab === selectedTab) {
          tab += " tw-text-primary active--horizontal";
        } else {
          tab += " inactive";
        }
      } else {
        tab = "";

        this.tabs.length - 1 == tabIndex
          ? (tab = "tw-pl-3")
          : (tab = "tw-pl-3 tw-mb-2");

        if (this.currentTab === selectedTab) {
          tab += " tw-text-primary active";
        } else {
          tab += " inactive";
        }
      }
      return tab;
    }
  }
};
</script>

<style scoped>
.tw-flex {
  display: flex;
}
.tw-flex-row {
  flex-direction: row;
}
.tw-flex-col {
  flex-direction: column;
}
.tw-font-bold {
  font-weight: 600;
}
.tw-cursor-pointer {
  cursor: pointer;
}
.active {
  border-left: 3px solid #372faf;
}
.tw-mr-10 {
  margin-right: 10px;
}
.tw-pl-3 {
  padding-left: 3px;
}
.tw-mb-2 {
  margin-bottom: 2px;
}
.active--horizontal {
  border-bottom: 3px solid #372faf;
}

.inactive {
  color: #5f5b91;
}
</style>
