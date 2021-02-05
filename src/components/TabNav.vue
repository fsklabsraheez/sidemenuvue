<template>
  <!-- <div style="width: 90%; height: 50%"> -->
  <div class="tabs-view">
    <ul class="tabs-section">
      <li v-for="tab in tabs" :key="tab" class="tab-section">
        <a :class="{ active: tab === selected }" @click="setTab(tab)">{{
          tab
        }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /* Holds all of the tabs data */
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  methods: {
    setTab(tab) {
      this.$emit("selected", tab);
    },
  },
};
</script>

<style>
.tabs-view {
  position: relative;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}
.tabs-section {
  list-style: none;
  display: flex;
  flex-direction: row;
}
.tab-section {
  /* margin: 5px; */
  cursor: pointer;
  background-color: black;
  padding: 10px;
  color: wheat;
  border-radius: 10px 10px 0 0;
}
.tab-section:nth-child(even) {
  /* margin: 5px; */
  cursor: pointer;
  background-color: brown;
  padding: 10px;
  color: white;
  /* color: wheat; */
  /* border-radius: 10px 10px 0 0; */
}
.tab-section:hover {
  color: green;
}
.tab-section:active {
  color: green;
  background-color: hotpink;
}
.tab-content {
  margin-top: -20px;
  /* background-color: black; */
  border-radius: 5px;
  padding: 5px;
}
</style>

