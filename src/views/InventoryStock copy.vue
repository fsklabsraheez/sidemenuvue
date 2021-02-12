<template>
  <div class="container">
    <div class="list-view">
      <div class="input-layout">
        <label>Purchase Invoice Number</label>
        <select v-model="pi.pinumber">
          <option disabled value="">Select the Purchase Invoice #</option>
          <option>PI-001</option>
          <option>PI-002</option>
        </select>
      </div>
      <div class="input-layout">
        <label>Item Code</label>
        <select v-model="pi.itemcode">
          <option disabled value="">Select Item Code</option>
          <option>P-001</option>
          <option>P-002</option>
        </select>
      </div>
      <div class="input-layout">
        <label>Item Description</label>
        <select v-model="pi.itemdescription">
          <option disabled value="">Select Item Description</option>
          <option>Crystal Salt premium</option>
          <option>Normal Salt</option>
        </select>
      </div>
      <div class="input-layout">
        <label>Received Quantity</label>
        <input v-model="pi.receivedquantity" placeholder="Received Qty" />
      </div>
    </div>
    <div class="item-list">
      <div class="stockadd-section">
        <label>Inventory Location Type</label>
        <select v-model="stockdetail.inventorytype">
          <option disabled value="">Select the Vendor Code</option>
          <option>Shop</option>
          <option>Warehouse</option>
        </select>

        <label>Inventory Location Name</label>
        <select v-model="stockdetail.inventoryname">
          <option disabled value="">Select the Location Name</option>
          <option>Retails Salt</option>
          <option>Warehouse-001</option>
        </select>

        <label>Stock available</label>
        <input
          style="width: 20px; margin-left: 0.5px"
          type="number"
          v-model="stockdetail.stockavailable"
        />

        <input
          type="number"
          v-model="stockdetail.stocktransfer"
          placeholder="Stock to transfer"
        />

        <span @click="addStock()" class="iconbutton"
          ><i class="fas fa-cart-plus"></i>
        </span>
      </div>
      <div class="table-view">
        <table>
          <thead>
            <tr>
              <th>Inventory Type</th>
              <th>Inventory Location Name</th>
              <th>Stock Transfered</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(stockdetail, index) in stockdetails" :key="index">
              <td>{{ stockdetail.inventorytype }}</td>
              <td>{{ stockdetail.inventoryname }}</td>
              <td>{{ stockdetail.stocktransfer }}</td>
              <td>
                <span @click="editStock(index)" class="tableiconbutton"
                  ><i class="fas fa-pencil-alt"></i
                ></span>

                <span @click="deleteStock(index)" class="tableiconbutton"
                  ><i class="fas fa-trash"></i
                ></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- <div class="searchsection">
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
      </div>-->
  </div>
</template>


<script>
export default {
  data() {
    return {
      pi: {},
      stockdetail: {},
      // searchlocationname: "",
      stockdetails: [
        {
          inventorytype: "Shop",
          inventoryname: "Retails Salt",
          stocktransfer: 30,
        },
        {
          inventorytype: "Warehouse",
          inventoryname: "Warehouse-001",
          stocktransfer: 70,
        },
      ],
      // stockdetails: this.initialdata,
    };
  },
  methods: {
    addStock() {
      this.stockdetails.push(this.stockdetail);
      this.stockdetail = {};
    },
    editStock(index) {
      this.stockdetail = JSON.parse(JSON.stringify(this.stockdetails[index]));
    },
    deleteStock(index) {
      var delconfirmation = confirm("Are you sure to delete this Stock?");
      if (delconfirmation) {
        this.stockdetails.splice(index, 1);
      }
    },
    // searchLocationname() {
    //   this.rows = this.initialdata.filter((inventory) =>
    //     inventory.locationname
    //       .toLowerCase()
    //       .includes(this.searchlocationname.toLowerCase())
    //   );
    // },
  },
  // created() {
  //   this.searchLocationname();
  // },
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
.item-list select:focus,
.item-list input:focus {
  border-color: black;
}
.searchsection input:focus {
  background-color: whitesmoke;
}
.item-list {
  /* height: 75vh; */
  /* overflow-y: auto; */
  /* display: flex; */
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

.item-list table {
  margin-left: auto;
  margin-right: auto;
}
.item-list table th {
  background-color: #44475c;
  color: white;
}
.item-list table th,
.item-list table td {
  min-width: 120px;
  max-width: 120px;

  padding: 5px;
  font-size: 13px;
}
.item-list table td {
  font-size: 12px;
}

.item-list label {
  font-size: 15px;
}
.item-list input,
.item-list select {
  border-right-style: none;
  border-left-style: none;
  border-top-style: none;
  border-bottom-width: medium;
  /* border-bottom-color: black; */
  outline: none;
  margin: 5px 10px 15px;
  width: 150px;
  text-align: center;
  background-color: #d4d8f9;
}
.item-list input {
  width: 100px;
  word-wrap: normal;
}
.item-list i {
  cursor: pointer;
  color: palegreen;
  background-color: #44475c;
  border-radius: 50%;
  padding: 7px;
  font-size: 12px;
  margin: 0px 5px;
}

.item-list i:hover {
  color: white;
  /* background-color: pink; */
  font-size: 12px;
}
.table-view td i {
  font-size: 10px;
  padding: 5px;
}
.table-view td i:hover {
  color: green;
  background-color: pink;
  font-size: 10px;
  padding: 5px;
}
.stockadd-section {
  background-color: #d4d8f9;

  padding: 15px 0px 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-left: 5%;
  margin-right: 5%;
}
.button:focus,
.button:hover {
  box-shadow: 5px 5px 10px green;
  color: brown;
}
</style>
