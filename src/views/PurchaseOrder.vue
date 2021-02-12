<template>
  <!-- <div id="app"> -->
  <div>
    <TabNav
      :tabs="['New Purchase Order', 'View Purchase Order']"
      :selected="selected"
      @selected="setSelected"
    >
      <Tab :isSelected="selected === 'New Purchase Order'">
        <POnew />
      </Tab>
      <Tab :isSelected="selected === 'View Purchase Order'">
        <POview />
      </Tab>
    </TabNav>
  </div>
</template>

<script>
import POnew from "../components/POnew.vue";
import POview from "../components/POview.vue";
import TabNav from "../components/TabNav.vue";
import Tab from "../components/Tab.vue";
export default {
  components: { TabNav, Tab, POnew, POview },
  data() {
    return {
      selected: "New Purchase Order",
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  },
};
</script>
