<template>
  <!-- <div id="app"> -->
  <div>
    <TabNav
      :tabs="['New PO', 'View PO', 'Dummy']"
      :selected="selected"
      @selected="setSelected"
    >
      <Tab :isSelected="selected === 'New PO'">
        <POnew />
      </Tab>
      <Tab :isSelected="selected === 'View PO'">
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
      selected: "New PO",
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  },
};
</script>
