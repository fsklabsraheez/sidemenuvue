<template>
  <div class="container">
    <div class="list-view">
      <div class="input-layout">
        <label>SO Number </label>
        <input v-model="so.number" placeholder="" />
      </div>
      <div class="input-layout">
        <label>SO Date</label>
        <input type="date" v-model="so.date" />
      </div>

      <div class="input-layout">
        <label>Select Customer Code</label>
        <select v-model="so.customercode">
          <option disabled value="">Select the Customer Code</option>
          <option>CU-001</option>
          <option>CU-002</option>
        </select>
      </div>
      <div class="input-layout">
        <label>Select Customer Name</label>
        <select v-model="so.customername">
          <option disabled value="">Select the Customer Name</option>
          <option>Shop 1</option>
          <option>Shop 2</option>
        </select>
      </div>
    </div>
    <div class="item-list">
      <!-- <select v-model="po.itemcode">
        <option disabled value="">Select the Item code</option>
        <option>P-001</option>
        <option>P-002</option>
      </select>
      <select v-model="po.itemdescription">
        <option disabled value="">Select the Item Description</option>
        <option>Crystal Salt premium</option>
        <option>Crystal Salt ordinary</option>
      </select> -->
      <div>
        <input v-model="soitem.itemcode" placeholder="Item Code" />
        <input
          style="width: 200px"
          v-model="soitem.itemdescription"
          placeholder="Item Description"
        />
        <input
          type="number"
          v-model="soitem.qtyordered"
          placeholder="Order Qty"
        />

        <input type="number" v-model="soitem.itemprice" placeholder="Price" />

        <input type="number" v-model="soitem.itemgst" placeholder="GST %" />

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
            <tr v-for="(soitem, index) in soitems" :key="index">
              <td>{{ soitem.itemcode }}</td>
              <td>{{ soitem.itemdescription }}</td>
              <td>{{ soitem.qtyordered }}</td>
              <td>{{ soitem.itemprice }}</td>
              <td>{{ soitem.itemgst }}</td>
              <td>{{ soitem.itemprice * soitem.qtyordered }}</td>
              <td>
                <span @click="editSO(index)" class="tableiconbutton"
                  ><i class="fas fa-pencil-alt"></i
                ></span>

                <span @click="deleteSO(index)" class="tableiconbutton"
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
      <label> Grand Total : </label>
      <label>Rs {{ total }} </label>
      <button @click="addSO()" class="button">
        <i class="fas fa-save"></i> Save Sales Order
      </button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      so: {},
      // po: { poitems: [] },
      soitem: {},
      soitems: [],

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
      sodetails: [
        {
          number: "SO-001",
          date: "03/02/2021",
          customercode: "CU-001",
          customername: "Shop1",
          soitems: [
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
          number: "SO-002",
          date: "03/02/2021",
          customercode: "CU-002",
          customername: "Shop 2",
          soitems: [
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
      return this.soitems.reduce(
        (acc, soitem) => acc + soitem.itemprice * soitem.qtyordered,
        0
      );
    },
  },
  methods: {
    addItem() {
      this.soitems.push(this.soitem);
      this.soitem = {};
    },
    addSO() {
      this.sodetails.push(this.so);
      // this.po.poitems.push(this.poitems);
      this.so = {};
    },
    editSO(index) {
      this.so = JSON.parse(JSON.stringify(this.sodetails[index]));
      // var editconfirmation = confirm("Are you sure to edit this SO ?");
      // if (editconfirmation) {
      //   this.sodetails.splice(index, 1);
      // }
    },
    deleteSO(index) {
      var delconfirmation = confirm("Are you sure to delete this SO ?");
      if (delconfirmation) {
        this.podetails.splice(index, 1);
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
  border: none;
  border-radius: 30px;
  text-transform: uppercase;
  /* border: 1px solid black; */
  box-shadow: 2px 2px 2px 2px dimgray;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
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
  height: 150%;
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
  cursor: pointer;
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
  height: 55vh;

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
  cursor: pointer;
  color: white;
  background-color: black;
  border-radius: 50%;
  padding: 7px;
  font-size: 12px;
  margin: 0px 5px;
}

.item-list i:hover {
  color: green;
  background-color: pink;
  font-size: 12px;
}
.tableiconbutton i {
  font-size: 10px;
  padding: 5px;
}
.tableiconbutton i:hover {
  color: green;
  background-color: pink;
  font-size: 10px;
}
.textfield {
  background-color: none;
  color: black;
}

.footer-section {
  position: absolute;
  right: 80px;

  margin-top: 15px;
}
.footer-section label {
  font-size: 15px;
  font-weight: bold;
}
.footer-section button {
  /* position: relative; */
  /* margin-left: -120%; */
  margin-left: 20px;
}
.footer-section button:hover {
  color: green;
}
.input-layout input:focus,
.input-layout select:focus,
.input-layout textarea:focus,
.item-list input:focus {
  border-color: black;
}
.button:focus,
.button:hover {
  box-shadow: 5px 5px 10px green;
  color: brown;
}
</style>
