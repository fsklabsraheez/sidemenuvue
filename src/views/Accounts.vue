<template>
  <div>
    <h2>Language Search</h2>

    <div>
      <input
        type="text"
        v-model="searchname"
        @keyup="handleSearch"
        placeholder="Enter language"
      />
      <p>{{ searchname }}</p>
    </div>
    <table>
      <thead>
        <th>Language ID</th>
        <th>Language Name</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in languages" :key="index">
          <!--<td>{{ item.id }}</td>
          <td>{{ item.name }}</td-->
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchname: "",
      initialdata: [
        { id: 1, name: "JS" },
        { id: 2, name: "JQ" },
        { id: 3, name: "C++" },
      ],
      languages: this.initialdata,
    };
  },
  methods: {
    handleSearch() {
      this.languages = this.initialdata.filter((item) =>
        item.name.toLowerCase().includes(this.searchname.toLowerCase())
      );
    },
  },
  created() {
    this.handleSearch();
  },
};
</script>

<style  scoped>
#app {
  width: 300px;
  margin: 0 auto;
}

#app h2 {
  margin: 20px;
  text-align: center;
}
</style>