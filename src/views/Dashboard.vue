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

<style scoped>
.dashboard {
  display: grid;
  position: relative;
  grid-template-columns: 1fr 5fr; /* Note : Leftside sidebar 1fr and rest areas has 5fr */
  background-color: black;
  height: 100vh;
  width: 100vw;
}
.content {
  position: relative;
  width: 80vw;
  height: 100% - 10px;
  background-color: white;
  border-radius: 20px;
  /*border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;*/
  margin: 10px 10px 10px 10px;
}
</style>  