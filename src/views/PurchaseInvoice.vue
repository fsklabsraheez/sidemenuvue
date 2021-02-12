<template>
  <!-- <div id="app"> -->
  <div>
    <TabNav
      :tabs="['New Purchase Invoice', 'View Purchase Invoice']"
      :selected="selected"
      @selected="setSelected"
    >
      <Tab :isSelected="selected === 'New Purchase Invoice'">
        <PInew />
      </Tab>
      <Tab :isSelected="selected === 'View Purchase Invoice'">
        <PIview />
      </Tab>
    </TabNav>
  </div>
</template>

<script>
import PInew from "../components/PInew.vue";
import PIview from "../components/PIview.vue";
import TabNav from "../components/TabNav.vue";
import Tab from "../components/Tab.vue";
export default {
  components: { TabNav, Tab, PInew, PIview },
  data() {
    return {
      selected: "New Purchase Invoice",
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  },
};
</script>
