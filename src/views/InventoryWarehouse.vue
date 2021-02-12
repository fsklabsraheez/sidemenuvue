<template>
  <div class="container">
    <div class="list-view">
      <div class="input-layout">
        <label>Inventory Location Type</label>
        <select v-model="inventory.locationtype">
          <option disabled value="">Select the Vendor Code</option>
          <option>Shop</option>
          <option>Warehouse</option>
        </select>
      </div>

      <div class="input-layout">
        <label>Inventory Location Name </label>
        <input
          v-model="inventory.locationname"
          placeholder="Enter Name of Inventory Location"
        />
      </div>
      <div class="input-layout">
        <label>Address </label>
        <textarea v-model="inventory.address" placeholder=""></textarea>
      </div>
      <div class="input-layout">
        <label>Incharge Name</label>
        <input
          v-model="inventory.inchargename"
          placeholder="Enter Incharge Name"
        />
      </div>
      <div class="input-layout">
        <label>Warehouse Contact Number</label>
        <input v-model.number="inventory.contactnumber" type="number" />
      </div>
      <div class="input-layout">
        <label>Email Id</label>
        <input v-model="inventory.emailid" placeholder="Enter E-mail Id" />
      </div>
      <!-- <div class="input-layout">
        <label>Date</label>
        <input
          type="date"
          v-model="inventory.date"
          placeholder="Enter E-mail Id"
        />
      </div> -->
    </div>
    <div>
      <button @click="addInventorylocation()" class="button btnadd">
        Save Location
      </button>
    </div>
    <div class="searchsection">
      <input
        type="text"
        name="searchlocationname"
        id="searchlocationname"
        v-model="searchlocationname"
        @keyup="searchLocationname()"
        placeholder="Search by Location Name"
      />
      <i class="fas fa-search"></i>
    </div>
    <div class="displaysection">
      <div class="table">
        <table>
          <thead class="headerposition">
            <tr>
              <th>Location Type</th>
              <th>Location Name</th>
              <th>Address</th>
              <th>Incharge Name</th>
              <th>Contact Number</th>
              <th>Email ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="viewlimit">
            <tr v-for="(inventory, index) in rows" :key="index">
              <td>{{ inventory.locationtype }}</td>
              <td>{{ inventory.locationname }}</td>
              <td>{{ inventory.address }}</td>
              <td>{{ inventory.inchargename }}</td>
              <td>{{ inventory.contactnumber }}</td>
              <td>{{ inventory.emailid }}</td>
              <td>
                <span @click="editInventorylocation(index)" class="iconbutton"
                  ><i class="fas fa-pencil-alt"></i
                ></span>

                <span @click="deleteInventorylocation(index)" class="iconbutton"
                  ><i class="fas fa-trash"></i
                ></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      inventory: {},
      searchlocationname: "",
      initialdata: [
        {
          locationtype: "shop",
          locationname: "Retails Salt",
          address: "Neyyatinkara",
          inchargename: "Mr.FSSE",
          contactnumber: 9876554445,
          emailid: "shop@gmail.com",
        },
        {
          locationtype: "warehouse",
          locationname: "Warehouse-001",
          address: "Amaravila",
          inchargename: "Mr.GEST",
          contactnumber: 7839273648,
          emailid: "warehouse@gmail.com",
        },
      ],
      rows: this.initialdata,
    };
  },
  methods: {
    addInventorylocation() {
      this.rows.push(this.inventory);
      this.inventory = {};
    },
    editInventorylocation(index) {
      this.inventory = JSON.parse(JSON.stringify(this.rows[index]));
    },
    deleteInventorylocation(index) {
      var delconfirmation = confirm(
        "Are you sure to delete this Inventory location ?"
      );
      if (delconfirmation) {
        this.rows.splice(index, 1);
      }
    },
    searchLocationname() {
      this.rows = this.initialdata.filter((inventory) =>
        inventory.locationname
          .toLowerCase()
          .includes(this.searchlocationname.toLowerCase())
      );
    },
  },
  created() {
    this.searchLocationname();
  },
};
</script>

<style scoped>
.container {
  position: relative;

  width: 100%;
}
.list-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 30px 70px 20px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.input-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
}
.input-layout label {
  font-size: 15px;
}
.input-layout input,
.input-layout select,
.input-layout textarea {
  font-size: 13px;
  outline: none;
  width: 230px;
  height: 20px;
  outline: none;
  border-right-style: none;
  border-left-style: none;
  border-top-style: none;
}

.input-layout select {
  width: 235px;
  border-bottom-width: 2px;
}
.input-layout textarea {
  height: 50px;
  border-bottom-width: 2px;
}

.button {
  height: 25px;
  width: auto;
  border-radius: 30px;
  text-transform: uppercase;
  border: 1px solid black;
  box-shadow: 2px 2px 2px black;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  /* margin: 8px 0 0 30%; */
  /*margin-top: 25px;*/
}
.searchsection {
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr 0.1fr 5fr;
  margin: 20px 70px 0px;
}
.searchsection input,
.searchsection i {
  border-right-style: none;
  border-left-style: none;
  border-top-style: none;
  border-bottom-width: medium;
  border-bottom-color: black;
  outline: none;
}
.searchsection i {
  margin-right: 35px;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 50%;
  margin-left: -10px;
}
.displaysection {
  position: relative;
  width: 95%;
  margin: 20px;
  height: 150%;
  overflow-y: auto;
  overflow-x: auto;
}
.table {
  /* min-width: 50vw; */
  width: fit-content;
  border: 2px solid #44475c;
  margin: 5px 50px;
}
.table th {
  /* border: 2px solid #474a5c; */
  text-align: center;
  background: #44475c;
  color: #fff;
  padding: 1px;
  min-width: 125px;
  font-size: 12px;
  height: 23px;
}
.table td {
  font-size: 12px;
  padding: 2px 3px;
  height: 20px;
}
.table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}

.viewlimit span {
  padding: 0px 4px;
}
.viewlimit i {
  cursor: pointer;
}
.iconbutton i:hover {
  color: blue;
  font-size: 13px;
}
.input-layout input:focus,
.input-layout select:focus,
.input-layout textarea:focus,
.item-list input:focus {
  border-color: black;
}
.searchsection input:focus {
  background-color: whitesmoke;
}
.button:focus,
.button:hover {
  box-shadow: 5px 5px 10px green;
  color: brown;
}
</style>
