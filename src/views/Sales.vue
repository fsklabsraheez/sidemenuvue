<template>
  <div class="top-menu">
    <router-link to="/" exact-active-class="active" class="menu-btn">
      Sales Order
    </router-link>
    <router-link to="/" exact-active-class="active" class="menu-btn">
      Sales Invoice
    </router-link>
    <router-link to="/" exact-active-class="active" class="menu-btn">
      Delivery Status
    </router-link>
  </div>
  <div class="box-content"><SalesDetails /></div>
</template>

<script>
import SalesDetails from "../views/SalesDetails.vue";
export default {
  components: { SalesDetails },
};
</script>

<style scoped>
.top-menu {
  margin: 20px 150px 0px;
  border-radius: tomer 20px;
  padding: 20px 20px;
  background-color: none;
  display: flex;
  flex-direction: row;
}
.menu-btn.active {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  padding: 15px;
  margin: 0px 20px 0px 20px;
  background-color: rgb(0, 0, 0);
  color: blue;
  border-radius: 10px;
}

.top-menu > * {
  /*flex-basis: 10%;*/
}
.menu-btn {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  /*font-weight: bold;*/
  padding: 15px;
  margin: 0px auto 0px auto;
  background-color: rgb(0, 0, 0);
  color: white;
  border-radius: 10px;
}
</style>