<template>
  <!-- <div id="app"> -->
  <div>
    <TabNav
      :tabs="[
        'New Stock',
        'View Stock',
        'Stock Transfer',
        'Stock Adjustment',
        'Stock Movements',
      ]"
      :selected="selected"
      @selected="setSelected"
    >
      <Tab :isSelected="selected === 'New Stock'">
        <StockNew />
      </Tab>
      <Tab :isSelected="selected === 'View Stock'">
        <!-- <POview /> -->
      </Tab>
      <Tab :isSelected="selected === 'Stock Transfer'"></Tab>
      <Tab :isSelected="selected === 'Stock Adjustment'"></Tab>
      <Tab :isSelected="selected === 'Stock Movements'"></Tab>
    </TabNav>
  </div>
</template>

<script>
import StockNew from "../components/StockNew.vue";
// import POview from "../components/POview.vue";
import TabNav from "../components/TabNav.vue";
import Tab from "../components/Tab.vue";
export default {
  components: { TabNav, Tab, StockNew },
  data() {
    return {
      selected: "New Stock",
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  },
};
</script>
