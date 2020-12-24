<template>
  <div class="dashboard">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template> 

<script>
import Sidebar from "../components/Sidebar";

export default {
  name: "Home",

  components: {
    Sidebar,
  },
};
</script>

<style>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: indigo;
  height: 100vh;
  width: 100vw;
}
.content {
  background-color: lightblue;
  border-radius: 20px;
  /*border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;*/
  margin: 10px 10px 10px 0;
}
</style>  