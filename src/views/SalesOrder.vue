<template>
  <!-- <div id="app"> -->
  <div>
    <TabNav
      :tabs="['New Sales Order', 'View Sales Order']"
      :selected="selected"
      @selected="setSelected"
    >
      <Tab :isSelected="selected === 'New Sales Order'">
        <SOnew />
      </Tab>
      <Tab :isSelected="selected === 'View Sales Order'">
        <SOview />
      </Tab>
    </TabNav>
  </div>
</template>

<script>
import SOnew from "../components/SOnew.vue";
import SOview from "../components/SOview.vue";
import TabNav from "../components/TabNav.vue";
import Tab from "../components/Tab.vue";
export default {
  components: { TabNav, Tab, SOnew, SOview },
  data() {
    return {
      selected: "New Sales Order",
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  },
};
</script>
