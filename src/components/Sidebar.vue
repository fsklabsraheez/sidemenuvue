<template>
  <div class="sidebar">
    <img src="@/assets/logo.png" alt="" />
    <div class="title">ERP</div>
    <div class="menu-items">
      <!-- Inside above div is the menu items name-->

      <router-link to="/" exact-active-class="active" class="side-btn">
        <div class="link-container">Vendor / Supplier</div>
      </router-link>

      <router-link to="/customer" active-class="active" class="side-btn">
        <div class="link-container">Customer</div>
      </router-link>
      <button
        class="side-btn"
        active-class="active"
        @click="$router.push('purchase')"
      >
        Click for Purchase
      </button>
      <router-link
        to="/purchase"
        active-class="active"
        tag="button"
        class="side-btn"
      >
        <div class="link-container">Purchase</div>
      </router-link>

      <router-link
        to="/sales"
        active-class="active"
        tag="button"
        class="side-btn"
      >
        <div class="link-container">Sales</div>
      </router-link>

      <router-link
        to="/accounts"
        active-class="active"
        tag="button"
        class="side-btn"
      >
        <div class="link-container">Accounts</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title {
  color: white;
  font-size: 30px;
  letter-spacing: 1rem;
  font-weight: bold;
  padding-bottom: 20px;
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
  color: black; /* Noted for remove */
  font-weight: bold;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.side-btn.active::before {
  position: absolute;
}
.side-btn {
  border: none;
  padding: 16px 0px; /* Noted for remove */
  cursor: pointer;
  color: black; /* button back color */
  font-size: 16px; /* Noted for remove */
  background-color: white; /* Noted  */
  margin: 10px 10px;
  text-transform: uppercase;
  font-weight: bold;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 20px;
}
</style>