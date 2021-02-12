<template>
  <div>
    <TabNav
      :tabs="['New Product', 'View Product']"
      :selected="selected"
      @selected="setSelected"
    >
      <Tab :isSelected="selected === 'New Product'">
        <ProductNew />
      </Tab>
      <Tab :isSelected="selected === 'View Product'">
        <ProductView />
      </Tab>
    </TabNav>
  </div>
</template>

<script>
import ProductNew from "../components/ProductNew.vue";
import ProductView from "../components/ProductView.vue";
import TabNav from "../components/TabNav.vue";
import Tab from "../components/Tab.vue";
export default {
  components: { TabNav, Tab, ProductNew, ProductView },
  data() {
    return {
      selected: "New Product",
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  },
};
</script>
