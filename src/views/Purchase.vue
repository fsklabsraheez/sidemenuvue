<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="top-menu">
    <div class="sub-menu">
      <button class="menu-btn">
        Purchase Order <i class="fa fa-caret-down"></i>
      </button>
      <div class="submenu-group">
        <router-link
          to="/purchase/po/newpo"
          exact-active-class="active"
          class="submenu-btn"
        >
          New PO
        </router-link>

        <router-link
          to="/purchase/po/editpo"
          exact-active-class="active"
          class="submenu-btn"
        >
          Edit PO
        </router-link>

        <router-link
          to="/purchase/po/viewpo"
          exact-active-class="active"
          class="submenu-btn"
        >
          View PO
        </router-link>

        <router-link
          to="/purchase/po/deletepo"
          exact-active-class="active"
          class="submenu-btn"
        >
          Delete PO
        </router-link>
      </div>
    </div>
    <div class="sub-menu">
      <button class="menu-btn">
        Purchase Invoice <i class="fa fa-caret-down"></i>
      </button>
      <div class="submenu-group">
        <router-link
          to="/purchase/pi/newpi"
          exact-active-class="active"
          class="submenu-btn"
        >
          New PI
        </router-link>

        <router-link
          to="/purchase/pi/editpi"
          exact-active-class="active"
          class="submenu-btn"
        >
          Edit PI
        </router-link>

        <router-link
          to="/purchase/pi/viewpi"
          exact-active-class="active"
          class="submenu-btn"
        >
          View PI
        </router-link>

        <router-link
          to="/purchase/pi/deletepi"
          exact-active-class="active"
          class="submenu-btn"
        >
          Delete PI
        </router-link>
      </div>
    </div>
    <div class="sub-menu">
      <button class="menu-btn">
        Vendor Shipment <i class="fa fa-caret-down"></i>
      </button>
      <div class="submenu-group">
        <router-link
          to="/purchase/vs/newvs"
          exact-active-class="active"
          class="submenu-btn"
        >
          New VS
        </router-link>

        <router-link
          to="/purchase/vs/editvs"
          exact-active-class="active"
          class="submenu-btn"
        >
          Edit VS
        </router-link>

        <router-link
          to="/purchase/vs/viewvs"
          exact-active-class="active"
          class="submenu-btn"
        >
          View VS
        </router-link>

        <router-link
          to="/purchase/vs/deletevs"
          exact-active-class="active"
          class="submenu-btn"
        >
          Delete VS
        </router-link>
      </div>
    </div>

    <!--
    <router-link to="/" exact-active-class="active" class="menu-btn">
      Purchase Order
    </router-link>
    <router-link to="/" exact-active-class="active" class="menu-btn">
      Purchase Invoice
    </router-link>
    <router-link to="/" exact-active-class="active" class="menu-btn">
      Shipment
    </router-link>-->
  </div>
  <div class="box-content"><PurchaseDetails /></div>
</template>

<script>
import PurchaseDetails from "../views/PurchaseDetails.vue";
export default {
  components: { PurchaseDetails },
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
/*
.menu-btn.active {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  padding: 15px;
  margin: 0px 20px 0px 20px;
  background-color: rgb(0, 0, 0);
  color: blue;
  border-radius: 10px;
}*/
.top-menu > * {
  /*flex-basis: 10%;*/
}

.menu-btn,
.submenu-btn {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  margin: 0px auto 2px auto;
  background-color: rgb(0, 0, 0);
  color: white;
  border-radius: 10px;
}
.menu-btn {
  margin: 0px 50px 0 50px;
}
.sub-menu {
  display: block;
  /*overflow: hidden;*/
}
.submenu-group {
  display: none;
  position: absolute;
  /*background-color: none;
  border: white;*/
  /**/

  /*z-index: -10px;*/
}
.sub-menu:hover .submenu-group {
  /*display: block;*/
  display: flex;
  flex-direction: column;

  /*margin-left: 90px;*/

  /*overflow: hidden;*/
}
.submenu-btn {
  width: 120px;
  margin-left: 100px;
}
.submenu-btn:hover {
  background-color: blue;
}
</style>