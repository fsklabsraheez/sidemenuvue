<template>
  <div class="container">
    <!--NewShipment section-->
    <div class="list-view">
      <div class="input-layout">
        <label>Shipment Number </label>
        <input
          v-model="pishipment.shipmentnumber"
          placeholder="Auto generated shipment number"
        />
      </div>
      <div class="input-layout">
        <label>Shipment Date</label>
        <input type="date" v-model="pishipment.shipmentdate" />
      </div>
      <div class="input-layout">
        <label>Select PI Number</label>
        <select v-model="pishipment.number">
          <option disabled value="">Select the Purchase Invoice</option>
          <option>PI-001</option>
          <option>PI-002</option>
        </select>
      </div>
      <div class="input-layout">
        <label>Vendor Code </label>
        <input
          v-model="pishipment.vendorcode"
          placeholder="Vendor Code based on PI number"
        />
      </div>
      <div class="input-layout">
        <label>Vendor Name </label>
        <input
          v-model="pishipment.vendorname"
          placeholder="Vendor Name based on PI number"
        />
      </div>
      <div class="input-layout">
        <label>Payment Status </label>
        <input
          v-model="pishipment.paymentstatus"
          placeholder="Payment status based on PI number"
        />
      </div>
      <div class="input-layout">
        <label>Shipment Status </label>

        <select v-model="pishipment.shipmentstatus">
          <option disabled value="">Select the Shipment Status</option>
          <option>Dispatched</option>
          <option>Fully Delivered</option>
          <option>Partially Delivered</option>
          <option>Not Delivered</option>
        </select>
      </div>

      <div class="input-layout">
        <label>Shipment Note : </label>
        <textarea v-model="pishipment.shipmentnote" placeholder=""></textarea>
      </div>
    </div>
    <div>
      <button @click="addShipment()" class="button btnadd">
        Save Shipment
      </button>
    </div>

    <div class="searchsection">
      <input
        type="text"
        name="searchshipmentnumber"
        id="searchshipmentnumber"
        v-model="searchshipmentnumber"
        @keyup="searchShipmentnumber()"
        placeholder="Search by Shipment Number"
      />
      <i class="fas fa-search"></i>

      <input
        type="text"
        name="searchpinumber"
        id="searchpinumber"
        v-model="searchpinumber"
        @keyup="searchPInumber()"
        placeholder="Search by PI Number"
      />
      <i class="fas fa-search"></i>
    </div>
    <div class="displaysection">
      <div class="table">
        <table>
          <thead>
            <tr>
              <th>Shipment Number</th>
              <th>Shipment Date</th>
              <th>PI Number</th>
              <th>Vendor Code</th>
              <th>Vendor Name</th>
              <th>Payment Status</th>
              <th>Shipment Status</th>
              <th>Shipment Note</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="viewlimit">
            <tr v-for="(pishipment, index) in pishipments" :key="index">
              <td>{{ pishipment.shipmentnumber }}</td>
              <td>{{ pishipment.shipmentdate }}</td>
              <td>{{ pishipment.number }}</td>
              <td>{{ pishipment.vendorcode }}</td>
              <td>{{ pishipment.vendorname }}</td>
              <td>{{ pishipment.paymentstatus }}</td>
              <td>{{ pishipment.shipmentstatus }}</td>
              <td>{{ pishipment.shipmentnote }}</td>

              <td>
                <span @click="editShipment(index)" class="iconbutton"
                  ><i class="fas fa-pencil-alt"></i
                ></span>

                <span @click="deleteShipment(index)" class="iconbutton"
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
      pishipment: {},
      searchshipmentnumber: "",
      searchpinumber: "",
      initialdata: [
        {
          shipmentnumber: "Shipment-001",
          shipmentdate: "04 / 02 / 2021",
          number: "PI-001",
          vendorcode: "V-001",
          vendorname: "ABC Pvt Ltd",
          paymentstatus: "Paid",
          shipmentstatus: "Fully Delivered",
          shipmentnote: "Products all delivered safe",
        },
        {
          shipmentnumber: "Shipment-002",
          shipmentdate: "07 / 02 / 2021",
          number: "PI-002",
          vendorcode: "V-003",
          vendorname: "VBC Pvt Ltd",
          paymentstatus: "Partially Paid",
          shipmentstatus: "Not Delivered",
          shipmentnote: "On hold for full payment",
        },
      ],
      pishipments: this.initialdata,
    };
  },
  methods: {
    addShipment() {
      this.pishipments.push(this.pishipment);
      this.pishipment = {};
    },
    editShipment(index) {
      this.pishipment = JSON.parse(JSON.stringify(this.pishipments[index]));
    },
    deleteShipment(index) {
      var delconfirmation = confirm("Are you sure to delete this Shipment ?");
      if (delconfirmation) {
        this.pishipments.splice(index, 1);
      }
    },
    searchShipmentnumber() {
      this.pishipments = this.initialdata.filter((pishipment) =>
        pishipment.shipmentnumber
          .toLowerCase()
          .includes(this.searchshipmentnumber.toLowerCase())
      );
    },
    searchPInumber() {
      this.pishipments = this.initialdata.filter((pishipment) =>
        pishipment.number
          .toLowerCase()
          .includes(this.searchpinumber.toLowerCase())
      );
    },
  },
  created() {
    this.searchShipmentnumber();
    this.searchPInumber();
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
  /* height: 50px; */
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
.button:hover {
  color: green;
}
.searchsection {
  display: flex;

  margin: 20px 25% 5px;
}
.searchsection input {
  width: 200px;
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
  margin-left: -15px;
}
.displaysection {
  position: relative;
  width: 95%;
  margin: 10px 20px 20px;
  /* height: 150%; */
  overflow-y: auto;
  overflow-x: auto;
}
.table {
  /* min-width: 50vw; */
  width: fit-content;
  border: 2px solid #44475c;
  margin: 5px auto;
}
.table th {
  /* border: 2px solid #474a5c; */
  text-align: center;
  background: #44475c;
  color: #fff;
  padding: 1px;
  min-width: 105px;
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
