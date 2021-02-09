<template>
  <!-- <div id="app"> -->
  <div>
    <TabNav
      :tabs="[
        'Bank Account',
        'Cash Account',
        'Payable',
        'Receivable',
        'Income',
        'Expense',
      ]"
      :selected="selected"
      @selected="setSelected"
    >
      <Tab :isSelected="selected === 'Bank Account'">
        <BankAccount />
      </Tab>
      <Tab :isSelected="selected === 'Cash Account'">
        <CashAccount />
      </Tab>
      <Tab :isSelected="selected === 'Payable'">
        <Payable />
      </Tab>
      <Tab :isSelected="selected === 'Receivable'">
        <Receivable />
      </Tab>
      <Tab :isSelected="selected === 'Income'">
        <Income />
      </Tab>
      <Tab :isSelected="selected === 'Expense'">
        <Expense />
      </Tab>
    </TabNav>
  </div>
</template>

<script>
import BankAccount from "../components/BankAccount.vue";
import CashAccount from "../components/CashAccount.vue";
import Payable from "../components/Payable.vue";
import Receivable from "../components/Receivable.vue";
import Income from "../components/Income.vue";
import Expense from "../components/Expense.vue";
import TabNav from "../components/TabNav.vue";
import Tab from "../components/Tab.vue";
export default {
  components: {
    TabNav,
    Tab,
    BankAccount,
    CashAccount,
    Payable,
    Receivable,
    Income,
    Expense,
  },
  data() {
    return {
      selected: "Payable",
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  },
};
</script>
