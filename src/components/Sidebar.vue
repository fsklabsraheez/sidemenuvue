<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
    integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
    crossorigin="anonymous"
  />
  <div>
    <!-- class="sidebar">-->
    <img src="@/assets/logo.png" alt="" />
    <div class="title">ERP</div>
    <div class="menu-items">
      <!-- Inside div is the menu items name-->
      <router-link to="/" exact-active-class="active" class="home-btn">
        <i class="fas fa-home"></i>
      </router-link>
      <router-link to="/vendorsupplier" active-class="active" class="side-btn">
        <div class="link-container">
          <i class="fas fa-building"></i>
          Vendor / Supplier
        </div>
      </router-link>

      <router-link to="/customer" active-class="active" class="side-btn">
        <div class="link-container">
          <i class="fas fa-user-friends"></i> Customer
        </div>
      </router-link>
      <!--
        Click for Purchase
      </button>-->
      <router-link to="/purchase" active-class="active" class="side-btn">
        <div class="link-container">
          <i class="fas fa-shopping-cart"></i> Purchase
        </div>
      </router-link>
      <router-link to="/inventory" active-class="active" class="side-btn">
        <div class="link-container">
          <i class="fas fa-prescription-bottle-alt"></i>
          Inventory
        </div>
      </router-link>

      <router-link to="/sales" active-class="active" class="side-btn">
        <div class="link-container">
          <i class="fas fa-clipboard-list"></i>
          Sales
        </div>
      </router-link>

      <router-link to="/accounts" active-class="active" class="side-btn">
        <div class="link-container">
          <i class="fas fa-hand-holding-usd"></i>
          Accounts
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  color: white;
  font-size: 30px;
  letter-spacing: 1rem;
  font-weight: bold;
  padding-bottom: 10px;
}
img {
  max-width: 100%;
  height: auto;
  padding: 10px;
}
.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 10px; /* Top margin of the menu items section below ERP */
  margin-left: 60px;
}
.menu-items > * {
  margin-top: 20px;
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
  position: relative;
  background-color: white; /* Noted for remove */
  color: blue; /* Noted for remove */
  font-weight: bold;
  border-bottom-left-radius: 50px;

  border-top-left-radius: 20px;
}
.side-btn.active::before {
  position: absolute;
}
.side-btn {
  border: none;
  padding: 16px 0px; /* Noted for remove */
  /*cursor: pointer;*/
  color: black; /* button back color */
  font-size: 16px; /* Noted for remove */
  background-color: white; /* Noted  */
  margin: 10px 0px;
  text-transform: uppercase;
  font-weight: bold;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  text-decoration: none;
  text-align: center;
}
.home-btn {
  border: none;
  color: white;
  margin: 10px 0px;
  font-size: 25px;
  text-align: right;

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
  }
  to {
    color: blue;
  }
}
.menu-items i {
  margin-right: 5px;
}
</style>