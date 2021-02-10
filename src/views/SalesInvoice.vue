<template>
  <!-- <div id="app"> -->
  <div>
    <TabNav
      :tabs="['New Sales Invoice', 'View Sales Invoice']"
      :selected="selected"
      @selected="setSelected"
    >
      <Tab :isSelected="selected === 'New Sales Invoice'">
        <SInew />
      </Tab>
      <Tab :isSelected="selected === 'View Sales Invoice'">
        <SIview />
      </Tab>
    </TabNav>
  </div>
</template>

<script>
import SInew from "../components/SInew.vue";
import SIview from "../components/SIview.vue";
import TabNav from "../components/TabNav.vue";
import Tab from "../components/Tab.vue";
export default {
  components: { TabNav, Tab, SInew, SIview },
  data() {
    return {
      selected: "New Sales Invoice",
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  },
};
</script>
