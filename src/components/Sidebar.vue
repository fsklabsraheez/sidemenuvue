<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
    integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
    crossorigin="anonymous"
  />
  <div class="sidebarcontainer">
    <!-- class="sidebar">-->
    <img src="@/assets/logo.png" alt="" />
    <div class="title">ERP</div>
    <div class="menu-items">
      <!-- Inside div is the menu items name-->

      <router-link to="/" exact-active-class="active" class="home-btn">
        <i class="fas fa-home"></i>
      </router-link>

      <router-link to="/vendor" active-class="active" class="side-btn">
        <i class="fas fa-building"></i>
        Vendor
      </router-link>

      <router-link to="/customer" active-class="active" class="side-btn">
        <i class="fas fa-user-friends"></i> Customer
      </router-link>

      <router-link to="/purchase" active-class="active" class="side-btn">
        <i class="fas fa-shopping-cart"></i> Purchase
      </router-link>
      <router-link to="/inventory" active-class="active" class="side-btn">
        <i class="fas fa-prescription-bottle-alt"></i>
        Inventory
      </router-link>

      <router-link to="/sales" active-class="active" class="side-btn">
        <i class="fas fa-clipboard-list"></i>
        Sales
      </router-link>

      <router-link to="/accounts" active-class="active" class="side-btn">
        <i class="fas fa-hand-holding-usd"></i>
        Accounts
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebarcontainer {
  height: 70vh;
  width: 15vw;
}
.title {
  color: white;
  font-size: 25px;
  letter-spacing: 5px;
  font-weight: bold;
  padding-bottom: 5px;
  margin-left: 20%;
}
img {
  max-width: 75%;
  min-width: 75px;
  height: auto;
  padding: 5px;
  margin-left: 20%;
}
.menu-items {
  display: grid;

  margin-top: 5px; /* Top margin of the menu items section below ERP */
  margin-left: 30px;
}
.menu-items > * {
  margin-top: 8px;
}
/* This content is blocked to display
.link-container {
  color: indigo;
  background-color: lightblue;
  padding: 20px 0px 20px 0px;
  border-radius: 50px;
  margin: 0 5px 0;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}
*/
.side-btn:focus {
  outline: none;
}
.side-btn.active {
  color: blue;
  text-decoration: none;
  /*position: relative;
  background-color: white;*/ /* Noted for remove */

  /*font-weight: bold;
  border-bottom-left-radius: 50px;

  border-top-left-radius: 20px;*/
}
/*.side-btn.active::before {
  position: absolute;
}*/
.side-btn {
  border: none;
  padding: 10px 0px; /* Noted for remove */
  /*cursor: pointer;*/
  color: black; /* button back color */
  font-size: 16px; /* Noted for remove */
  background-color: white; /* Noted  */
  margin: 8px 0px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 20px 0 0 80px;

  text-decoration: none;
  text-align: center;
}
/*.homeicon {
  height: 40px;
  width: 40px;
  background-color: green;

  align-items: center;
  margin-left: 220px;
}*/
.home-btn {
  margin-bottom: 8px;
  height: 30px;
  width: 30px;
  border: none;
  color: black;
  background-color: white;
  border-radius: 50%;
  padding: 7px 7px;
  font-size: 25px;
  margin-left: 40%;
  /* align-content: center; */
  /* text-align: center; */

  /*border-radius: 50%;
  padding: 5px 5px;
    background-color: white;*/
}
.home-btn.active {
  animation: mymove 3s infinite;
}
@keyframes mymove {
  from {
    color: skyblue;
    background-color: blue;
  }
  to {
    color: blue;
    background-color: skyblue;
  }
}
.menu-items i {
  margin-right: 5px;
}
</style>