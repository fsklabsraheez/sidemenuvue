<template>
  <div class="top-menu">
    <router-link
      to="/customer/addcustomer"
      exact-active-class="active"
      class="menu-btn"
    >
      Add Customer
    </router-link>
    <router-link
      to="/customer/editcustomer"
      exact-active-class="active"
      class="menu-btn"
    >
      Edit Customer
    </router-link>

    <router-link
      to="/customer/viewcustomer"
      exact-active-class="active"
      class="menu-btn"
    >
      View Customer
    </router-link>
    <router-link
      to="/customer/deletecustomer"
      exact-active-class="active"
      class="menu-btn"
    >
      Delete Customer
    </router-link>
  </div>
  <div class="box-content"><router-view /></div>
</template>
<!--
<script>
import CustomerAdd from "../views/CustomerAdd.vue";
export default {
  components: { CustomerAdd },
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

  animation: mymove 5s infinite;
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