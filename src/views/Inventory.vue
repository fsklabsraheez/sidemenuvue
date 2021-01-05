<template>
  <div class="top-menu">
    <button class="menu-btn">Product</button>
    <button class="menu-btn">Stock</button>
    <button class="menu-btn">Warehouse</button>
    <!--<router-link to="/" exact-active-class="active" class="menu-btn">
    </router-link>
    <router-link to="/" exact-active-class="active" class="menu-btn">
    </router-link>
    <router-link to="/" exact-active-class="active" class="menu-btn">
    </router-link>-->
  </div>
  <div class="box-content"><InventoryAdd /></div>
</template>

<script>
import InventoryAdd from "../views/InventoryAdd.vue";
export default {
  components: { InventoryAdd },
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