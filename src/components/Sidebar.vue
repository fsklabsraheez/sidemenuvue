<template>
  <div class="sidebarcontainer">
    <!-- class="sidebar">-->
    <img src="@/assets/logo.png" alt="" />
    <div class="title">ERP</div>

    <!-- Inside div is the menu items name-->
    <div class="home">
      <router-link to="/" exact-active-class="active" class="home-btn">
        <i class="fas fa-home"></i>
      </router-link>
    </div>
    <div class="menu-items">
      <div class="singlemenu">
        <router-link to="/vendor" active-class="active" class="single-side-btn">
          <span><i class="fas fa-building"></i></span>
          Vendor
        </router-link>
      </div>
      <div class="singlemenu">
        <router-link
          to="/customer"
          active-class="active"
          class="single-side-btn"
        >
          <span><i class="fas fa-user-friends"></i></span> Customer
        </router-link>
      </div>
      <div class="purchasemenu">
        <li active-class="active" class="side-btn">
          <span><i class="fas fa-shopping-cart"></i></span>
          Purchase
          <span class="arrow"><i class="fas fa-chevron-circle-down"></i></span>
        </li>

        <div class="submenu1">
          <router-link
            to="/purchaseorder"
            active-class="active"
            class="side-subbtn"
          >
            Purchase Order
          </router-link>
          <router-link
            to="/purchaseinvoice"
            active-class="active"
            class="side-subbtn"
          >
            Purchase Invoice
          </router-link>

          <router-link
            to="/purchaseshipment"
            active-class="active"
            class="side-subbtn"
          >
            Purchase Shipment
          </router-link>
        </div>
      </div>

      <div class="inventorymenu">
        <li active-class="active" class="side-btn">
          <span><i class="fas fa-prescription-bottle-alt"></i></span>
          Inventory
          <span class="arrow"><i class="fas fa-chevron-circle-down"></i></span>
        </li>

        <div class="submenu2">
          <router-link to="product" active-class="active" class="side-subbtn">
            Product
          </router-link>
          <router-link
            to="inventory/stock"
            active-class="active"
            class="side-subbtn"
          >
            Stock
          </router-link>

          <router-link to="warehouse" active-class="active" class="side-subbtn">
            Warehouse
          </router-link>
        </div>
      </div>
      <div class="salesmenu">
        <li active-class="active" class="side-btn">
          <span><i class="fas fa-clipboard-list"></i></span>
          Sales
          <span class="arrow"><i class="fas fa-chevron-circle-down"></i></span>
        </li>

        <div class="submenu3">
          <router-link
            to="/salesorder"
            active-class="active"
            class="side-subbtn"
          >
            Sales Order
          </router-link>
          <router-link
            to="/salesinvoice"
            active-class="active"
            class="side-subbtn"
          >
            Sales Invoice
          </router-link>

          <router-link to="/delivery" active-class="active" class="side-subbtn">
            Delivery
          </router-link>
        </div>
      </div>
      <div class="accountsmenu">
        <li active-class="active" class="side-btn">
          <span><i class="fas fa-hand-holding-usd"></i></span>
          Accounts
          <span class="arrow"><i class="fas fa-chevron-circle-down"></i></span>
        </li>

        <div class="submenu4">
          <router-link
            to="/bankaccount"
            active-class="active"
            class="side-subbtn"
          >
            Bank Account
          </router-link>
          <router-link
            to="/cashaccount"
            active-class="active"
            class="side-subbtn"
          >
            Cash Account
          </router-link>

          <router-link to="/payable" active-class="active" class="side-subbtn">
            Payable
          </router-link>
          <router-link
            to="/receivable"
            active-class="active"
            class="side-subbtn"
          >
            Receivable
          </router-link>
          <router-link to="/income" active-class="active" class="side-subbtn">
            Income
          </router-link>
          <router-link to="/expense" active-class="active" class="side-subbtn">
            Expense
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebarcontainer {
  height: 70vh;
  width: 16vw;
}
.title {
  color: white;
  font-size: 25px;
  letter-spacing: 10px;
  font-weight: bold;
  /* padding-bottom: 5px; */
  margin-bottom: 5px;
  margin-left: 20%;
}
img {
  max-width: 50%;
  min-width: 75px;
  height: auto;
  padding: 3px;
  margin-top: 3px;
  margin-left: 20%;
  cursor: pointer;
}
img:hover {
  background-color: darkslategrey;
  border-radius: 50%;
}
.home {
  display: grid;
  /* position: relative; */
  /* right: 0; */
  margin: 10px 0px;

  /* float: right; */
}
.home-btn {
  /* margin-bottom: 2px; */
  height: 19px;
  width: 19px;
  border: none;
  color: black;
  background-color: white;
  border-radius: 50%;
  padding: 5px 5px;
  font-size: 18px;
  margin-left: 90%;
  /* float: right; */
  /* margin-left: 40%; */
  /* align-content: center; */
  /* text-align: center; */

  /*border-radius: 50%;
  padding: 5px 5px;
    background-color: white;*/
}
.home-btn:hover {
  border: 2px solid blue;
  padding: 3px;
  color: blue;
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

.menu-items {
  display: grid;
  margin-top: 10px;
  /* margin-top: 5px; Top margin of the menu items section below ERP */
  margin-left: 20px;
  height: 95%;
  overflow: hidden;
  overflow-y: auto;
}
/* .menu-items > * {
  margin: 3px 0px;
} */
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
.single-side-btn,
.side-btn {
  border: none;
  padding: 10px 10px; /* Noted for remove */
  /*cursor: pointer;*/
  color: white; /* button back color */
  font-size: 16px; /* Noted for remove */
  /* background-color: white; Noted  */

  text-transform: uppercase;
  font-weight: bold;
  /* border-radius: 20px 0 0 80px; */

  text-decoration: none;
  text-align: left;
}

.single-side-btn:hover {
  background-color: #1e1d1d;
  border-right: 5px solid blue;
}
.single-side-btn.active {
  color: blue;
}
.side-btn:hover {
  /* border-right: 5px solid blue; */
  background-color: #1e1d1d;
  /* margin-left: 3px; */
}
.arrow {
  float: right;
}

.side-btn:hover .arrow {
  color: blue;
  transform: rotate(90deg);
}
.side-btn.active {
  color: blue;
  text-decoration: none;
  border-right: 5px solid blue;
  /*position: relative;
  background-color: white;*/ /* Noted for remove */

  /*font-weight: bold;
  border-bottom-left-radius: 50px;

  border-top-left-radius: 20px;*/
}
.submenu1 {
  display: none;
}
.submenu2 {
  display: none;
}
.submenu3 {
  display: none;
}
.submenu4 {
  display: none;
}

.purchasemenu .side-subbtn,
.inventorymenu .side-subbtn,
.salesmenu .side-subbtn,
.accountsmenu .side-subbtn {
  text-decoration: none;
  display: grid;
  justify-items: end;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 13px;
  padding: 5px 2px;
  /* background-color: khaki; */
  color: white;
  font-weight: bold;
}
.side-subbtn:hover {
  /* border-right: 5px solid lightgreen; */
  border-left: 5px solid lightgreen;
  color: lightblue;
  background-color: #1e1d1d;
  /* margin-left: 3px; */
}

.side-subbtn.active {
  color: blue;
  border-right: 5px solid blue;
  /*position: relative;
  background-color: white;*/ /* Noted for remove */

  /*font-weight: bold;
  border-bottom-left-radius: 50px;

  border-top-left-radius: 20px;*/
}
/*.side-btn.active::before {
  position: absolute;
}*/

/*.homeicon {
  height: 40px;
  width: 40px;
  background-color: green;

  align-items: center;
  margin-left: 220px;
}*/

/* .menu-items i {
  margin: 0px 5px; 
} */
.menu-items span {
  color: white;
}
.singlemenu {
  display: grid;
  padding: 0;
}
.purchasemenu,
.inventorymenu,
.salesmenu,
.accountsmenu {
  /* margin: 0;
  padding: 0;
  width: 100%; */
  list-style: none;
}
.purchasemenu:hover .submenu1 {
  display: grid;
}
.inventorymenu:hover .submenu2 {
  display: grid;
}
.salesmenu:hover .submenu3 {
  display: grid;
}
.accountsmenu:hover .submenu4 {
  display: grid;
}
</style>