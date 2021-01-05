<template>
  <div class="top-menu">
    <router-link
      to="/vendorsupplier/addvendor"
      exact-active-class="active"
      class="menu-btn"
    >
      Add Vendor
    </router-link>

    <router-link
      to="/vendorsupplier/editvendor"
      exact-active-class="active"
      class="menu-btn"
    >
      Edit Vendor
    </router-link>
    <router-link
      to="/vendorsupplier/viewvendor"
      exact-active-class="active"
      class="menu-btn"
      >View Vendor
    </router-link>
    <router-link
      to="/vendorsupplier/deletevendor"
      exact-active-class="active"
      class="menu-btn"
      >Delete Vendor
    </router-link>
  </div>
  <!--<div class="box-content"><VendorAdd /></div>-->
  <div class="box-content"><router-view /></div>
</template>

<!--
<script>
import VendorAdd from "../views/VendorAdd.vue";
export default {
  components: { VendorAdd },
};
</script>-->

<style scoped>
.top-menu {
  position: relative;
  margin: 20px 150px 0px;
  border-radius: tomer 20px;
  padding: 20px 20px;
  background-color: none;
  display: flex;
  flex-direction: row;
}
.menu-btn.active {
  background: none;
  color: black;
  text-decoration: underline;

  animation: mymove 3s infinite;
  /*text-decoration: none;
  text-transform: uppercase;
  /*font-weight: bold;*/
  /*padding: 15px;
  margin: 0px auto 0px auto;
  background-color: none; /* rgb(0, 0, 0);*/
  /*border-radius: 10px;*/
}

@keyframes mymove {
  from {
    color: blue;
    text-decoration-color: white;
    background-color: skyblue;
  }
  to {
    color: skyblue;
    text-decoration-color: blue;
    background-color: blue;
  }
}

.top-menu > * {
  /*flex-basis: 10%;*/
}
.menu-btn {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  padding: 15px;
  margin: 0px auto 0px auto;
  background-color: rgb(0, 0, 0);
  color: white;
  border-radius: 10px;
}
.box-content {
  margin-top: 10px;
}
</style>