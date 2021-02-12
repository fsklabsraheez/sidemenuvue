<template>
  <div class="container">
    <div class="list-view">
      <div class="input-layout">
        <label>Select Purchase Order</label>
        <select v-model="PI.po">
          <option disabled value="">Select the Purchase Order</option>
          <option>PI-001</option>
          <option>PI-002</option>
          <option>PI-003</option>
          <option>PI-004</option>
        </select>
      </div>
      <div class="input-layout">
        <label>PI Number </label>
        <input v-model="PI.number" placeholder="" />
      </div>
      <div class="input-layout">
        <label>PI Date</label>
        <input type="date" v-model="PI.date" />
      </div>

      <div class="input-layout">
        <label>Vendor Code</label>

        <input type="text" v-model="PI.vendorcode" />
      </div>
      <div class="input-layout">
        <label>Vendor Name</label>

        <input type="text" v-model="PI.vendorname" />
      </div>
      <div class="input-layout">
        <label>Credit Terms</label>
        <input type="" placeholder="Approved credit period" />
      </div>
    </div>
    <div class="item-list">
      <!-- <select v-model="PI.itemcode">
        <option disabled value="">Select the Item code</option>
        <option>P-001</option>
        <option>P-002</option>
      </select>
      <select v-model="PI.itemdescription">
        <option disabled value="">Select the Item Description</option>
        <option>Crystal Salt premium</option>
        <option>Crystal Salt ordinary</option>
      </select> -->
      <div>
        <input v-model="PIitem.itemcode" placeholder="Item Code" />
        <input
          style="width: 200px"
          v-model="PIitem.itemdescription"
          placeholder="Item Description"
        />
        <input
          type="number"
          v-model="PIitem.qtyordered"
          placeholder="Order Qty"
        />

        <input type="number" v-model="PIitem.itemprice" placeholder="Price" />

        <input type="number" v-model="PIitem.itemgst" placeholder="GST %" />

        <span @click="addItem()" class="iconbutton"
          ><i class="fas fa-cart-plus"></i>
        </span>
      </div>
      <div class="table-view">
        <table>
          <thead>
            <tr>
              <th>Item Code</th>
              <th>Item Description</th>
              <th>Order Qty</th>
              <th>Price incl gst</th>
              <th>GST %</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(PIitem, index) in PIitems" :key="index">
              <td>{{ PIitem.itemcode }}</td>
              <td>{{ PIitem.itemdescription }}</td>
              <td>{{ PIitem.qtyordered }}</td>
              <td>{{ PIitem.itemprice }}</td>
              <td>{{ PIitem.itemgst }}</td>
              <td>{{ PIitem.itemprice * PIitem.qtyordered }}</td>
              <td>
                <span @click="editPI(index)" class="tableiconbutton"
                  ><i class="fas fa-pencil-alt"></i
                ></span>

                <span @click="deletePI(index)" class="tableiconbutton"
                  ><i class="fas fa-trash"></i
                ></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- <table style="float: right; margin-right: 30px">
          <tr>
             <td colspan="6"></td>

        <td style="font-size: 15px; color: white; background-color: black">
              Grand Total :
            </td>
            <td style="font-size: 15px; color: white; background-color: black">
              Rs {{ total }}
            </td>
            <td>
              
            </td>
          </tr>
        </table> -->
    </div>
    <div class="footer-section">
      <label>Select Payment Status</label>
      <select v-model="PI.paymentstatus">
        <option disabled value="">Select the Payment Status</option>
        <option>Partially paid</option>
        <option>Fully Paid</option>
        <option>On Credit</option>
      </select>

      <label>Payment Type</label>
      <select v-model="PI.paymenttype">
        <option disabled value="">Select the Payment Type</option>
        <option>Cash Payment</option>
        <option>Cheque Payment</option>
        <option>UPI Payment</option>
        <option>Bank Transfer</option>
      </select>

      <label> Grand Total : </label>
      <label>Rs {{ total }} </label>
      <button @click="addPI()" class="button">
        <i class="fas fa-save"></i> Save PI
      </button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      PI: {},
      // PI: { PIitems: [] },
      PIitem: {},
      PIitems: [],

      // searchlocationname: "",
      // dummydata: [
      //   {
      //     locationtype: "shop",
      //     locationname: "Retails Salt",
      //     address: "Neyyatinkara",
      //     inchargename: "Mr.FSSE",
      //     contactnumber: 9876554445,
      //     emailid: "shop@gmail.com",
      //   },
      //   {
      //     locationtype: "warehouse",
      //     locationname: "Warehouse-001",
      //     address: "Amaravila",
      //     inchargename: "Mr.GEST",
      //     contactnumber: 7839273648,
      //     emailid: "warehouse@gmail.com",
      //   },
      // ],
      // rows: this.initialdata,
      PIdetails: [
        {
          number: "PI-001",
          date: "03/02/2021",
          vendorcode: "VC-001",
          vendorname: "ABC Pvt Ltd",
          PIitems: [
            {
              itemcode: "P-002",
              itemdescription: "Crystal Salt Premium",
              itemprice: 45,
              itemgst: "8%",
              qtyordered: 100,
            },
            {
              itemcode: "P-003",
              itemdescription: "Crystal Salt Normal",
              itemprice: 35,
              itemgst: "8%",
              qtyordered: 150,
            },
          ],
          // total: this.itemprice * this.qtyordered,
        },
        {
          number: "PI-002",
          date: "03/02/2021",
          vendorcode: "VC-002",
          vendorname: "XYZ Pvt Ltd",
          PIitems: [
            {
              itemcode: "P-003",
              itemdescription: "Crystal Salt Normal",
              itemprice: 35,
              itemgst: "8%",
              qtyordered: 150,
            },
            {
              itemcode: "P-004",
              itemdescription: "Half Crystal Salt Normal",
              itemprice: 39,
              itemgst: "8%",
              qtyordered: 120,
            },
          ],
          // total: this.itemprice * this.qtyordered,
        },
      ],
    };
  },
  computed: {
    total() {
      return this.PIitems.reduce(
        (acc, PIitem) => acc + PIitem.itemprice * PIitem.qtyordered,
        0
      );
    },
  },
  methods: {
    addItem() {
      this.PIitems.push(this.PIitem);
      this.PIitem = {};
    },
    addPI() {
      this.PIdetails.push(this.PI);
      // this.PI.PIitems.push(this.PIitems);
      this.PI = {};
    },
    editPI(index) {
      this.PI = JSON.parse(JSON.stringify(this.PIdetails[index]));
      var editconfirmation = confirm("Are you sure to edit this PI ?");
      if (editconfirmation) {
        this.PIdetails.splice(index, 1);
      }
    },
    deletePI(index) {
      var delconfirmation = confirm("Are you sure to delete this PI ?");
      if (delconfirmation) {
        this.PIdetails.splice(index, 1);
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
  border: black 4px solid;
  /* background-color: black; */
  width: 100%;

  padding: 5px;
  border-radius: 5px;
  margin-top: -2px;
}
.list-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 10px 80px 20px;
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
  border: none;
  border-radius: 30px;
  text-transform: uppercase;
  /* border: 1px solid black; */
  box-shadow: 2px 2px 2px 2px dimgray;
  font-size: 15px;
  font-weight: bold;
  cursor: Pointer;
  outline: none;

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
  padding: 3px;
}
.displaysection {
  position: relative;
  width: 95%;
  margin: 20px;
  /* height: 100px; */
  overflow-y: auto;
  overflow-x: auto;
}

.table {
  /* min-width: 50vw; */
  width: fit-content;
  border: 2px solid #44475c;
  margin-left: auto;
  margin-right: auto;
}
.table th,
.table td {
  /* border: 2px solid #474a5c; */
  text-align: center;

  color: #fff;
  padding: 1px;
  min-width: 80px;
  max-width: 600px;
  font-size: 12px;
  height: 23px;
  word-wrap: break-word;
}
.table th {
  background: #44475c;
}
.table td {
  color: black;
}
/* .table td {
  font-size: 12px;
  padding: 1px;
  height: 20px;
  min-width: 60px;
} */
.table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}

.viewlimit span {
  padding: 0px 4px;
}
.viewlimit i {
  cursor: PIinter;
}
.iconbutton i:hover {
  color: blue;
  font-size: 13px;
}

.item-list {
  /* height: 75vh; */
  /* overflow-y: auto; */
  margin-right: auto;
  margin-left: auto;
}

.table-view {
  height: 50vh;

  overflow-y: auto;
}

.item-list table {
  margin-left: auto;
  margin-right: auto;
}
.item-list table th {
  background-color: black;
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
.item-list input {
  border-right-style: none;
  border-left-style: none;
  border-top-style: none;
  border-bottom-width: medium;
  /* border-bottom-color: black; */
  outline: none;
  margin: 5px 10px 15px;
  width: 75px;
  text-align: center;
}

.item-list i {
  cursor: Pointer;
  color: white;
  background-color: black;
  border-radius: 50%;
  padding: 7px;
  font-size: 12px;
  margin: 0px 5px;
}

.item-list i:hover {
  color: green;
  background-color: PInk;
  font-size: 12px;
}
.tableiconbutton i {
  font-size: 10px;
  padding: 5px;
}
.tableiconbutton i:hover {
  color: green;
  background-color: PInk;
  font-size: 10px;
}
.textfield {
  background-color: none;
  color: black;
}

.footer-section {
  position: absolute;
  display: flex;

  /* right: 80px; */

  margin-top: 25px;
}
.footer-section label,
.footer-section select {
  font-size: 15px;
  font-weight: bold;
  height: 20px;
  outline: none;
  border-right-style: none;
  border-left-style: none;
  border-top-style: none;
  margin-right: 10px;
  border-bottom-width: 2px;
}
.footer-section select {
  width: 150px;
  margin-right: 40px;
}

.footer-section button {
  /* Position: relative; */
  /* margin-left: -120%; */
  margin-left: 20px;
  margin-top: -5px;
}
.footer-section button:hover {
  color: green;
}
.input-layout input:focus,
.input-layout select:focus,
.input-layout textarea:focus,
.item-list input:focus,
.footer-section select:focus {
  border-color: black;
}
.button:focus,
.button:hover {
  box-shadow: 5px 5px 10px green;
  color: brown;
}
</style>
