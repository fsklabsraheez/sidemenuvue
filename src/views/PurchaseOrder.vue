<template>
  <div class="container">
    <div class="list-view">
      <div class="input-layout">
        <label>PO Number </label>
        <input v-model="po.number" placeholder="" />
      </div>
      <div class="input-layout">
        <label>PO Date</label>
        <input type="date" v-model="po.date" />
      </div>

      <div class="input-layout">
        <label>Select Vendor Code</label>
        <select v-model="po.vendorcode">
          <option disabled value="">Select the Vendor Code</option>
          <option>VC-001</option>
          <option>VC-002</option>
        </select>
      </div>
      <div class="input-layout">
        <label>Select Vendor Name</label>
        <select v-model="po.vendorname">
          <option disabled value="">Select the Vendor Name</option>
          <option>ABC Pvt Ltd</option>
          <option>XYZ Pvt Ltd</option>
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

      <table>
        <thead>
          <tr>
            <th>
              <input v-model="poitem.itemcode" placeholder="Item Code" />
            </th>
            <th>
              <input
                v-model="poitem.itemdescription"
                placeholder="Item Description"
              />
            </th>
            <th>
              <input
                type="number"
                v-model="poitem.orderqty"
                placeholder="Order Qty"
              />
            </th>
            <th>
              <input type="number" v-model="poitem.price" placeholder="Price" />
            </th>
            <th>
              <input type="number" v-model="poitem.gst" placeholder="GST %" />
            </th>

            <th>
              <span @click="addItem()" class="iconbutton"
                ><i class="fas fa-cart-plus"></i>
              </span>
            </th>
          </tr>
          <tr>
            <th>Item Code</th>
            <th>Item Description</th>
            <th>Order Qty</th>
            <th>Price incl gst</th>
            <th>GST %</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(poitem, index) in poitems" :key="index">
            <td>{{ poitem.itemcode }}</td>
            <td>{{ poitem.itemdescription }}</td>
            <td>{{ poitem.orderqty }}</td>
            <td>{{ poitem.price }}</td>
            <td>{{ poitem.gst }}</td>
            <td>{{ poitem.price * poitem.orderqty }}</td>
          </tr>
        </tbody>
        <tr class="grandtotal">
          <td colspan="4"></td>
          <td style="font-size: 16px; color: white; background-color: black">
            Grand Total :
          </td>
          <td style="font-size: 16px; color: white; background-color: black">
            Rs {{ total }}
          </td>
        </tr>
      </table>
    </div>
    <!-- <div class="input-layout">
      <label>Select Item Code</label>
      <select v-model="po.itemcode">
        <option disabled value="">Select the Item Code</option>
        <option>P-001</option>
        <option>P-002</option>
      </select>
    </div>
    <div class="input-layout">
      <label>Item Description</label>
      <select v-model="po.itemdescription">
        <option disabled value="">Select the Item Description</option>
        <option>Crystal Salt premium</option>
        <option>Crystal Salt ordinary</option>
      </select>
    </div> -->

    <div>
      <button @click="addPO()" class="button btnadd">Save PO</button>
    </div>
    <!--<div class="searchsection">
      <input
        type="text"
        name="searchponum"
        id="searchponum"
        v-model="searchponum"
        @keyup="searchPonum()"
        placeholder="Search by PO Number"
      />
      <i class="fas fa-search"></i>
    </div>
     <div class="searchsection">
      <input
        type="text"
        name="searchvendorcode"
        id="searchvendorcode"
        v-model="searchvendorcode"
        @keyup="searchVendorcode()"
        placeholder="Search by Vendor Code"
      />
      <i class="fas fa-search"></i>
    </div>
    <div class="searchsection">
      <input
        type="text"
        name="searchvendorname"
        id="searchvendorname"
        v-model="searchvendorname"
        @keyup="searchVendorname()"
        placeholder="Search by Vendor Name"
      />
      <i class="fas fa-search"></i>
    </div> -->
    <!-- <div class="demodatasection">
      <table>
        <h2>Vendor and Product List</h2>
        <thead>
          <tr>
            <th>Vendor Code</th>
            <th>Vendor Name</th>
            <th>Item Code</th>
            <th>Item Description</th>
            <th>Price</th>
            <th>GST</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>demo.vc</td>
            <td>demo.vn</td>
            <td>demo.ic</td>
            <td>demo.id</td>
            <td>demo.ip</td>
            <td>demo.igst</td>
          </tr>
        </tbody>
      </table>
    </div> -->
    <div class="displaysection">
      <div class="table">
        <table>
          <thead class="headerposition">
            <tr>
              <th>PO Number</th>
              <th>Date</th>
              <th>Vendor Code</th>
              <th>Vendor Name</th>
              <th>
                <tr>
                  <th>Item Code</th>
                  <th>Item Description</th>
                  <th>Price</th>
                  <th>GST</th>
                  <th>Qty Ordered</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </th>
            </tr>
          </thead>
          <tbody class="viewlimit">
            <tr v-for="(po, index) in podetails" :key="index">
              <td>{{ po.number }}</td>
              <td>{{ po.date }}</td>
              <td>{{ po.vendorcode }}</td>
              <td>{{ po.vendorname }}</td>
              <td>
                <tr v-for="(poitem, index2) in po.poitems" :key="index2">
                  <td>{{ poitem.itemcode }}</td>
                  <td>{{ poitem.itemdescription }}</td>
                  <td>{{ poitem.itemprice }}</td>
                  <td>{{ poitem.itemgst }}</td>
                  <td>{{ poitem.qtyordered }}</td>
                  <td>{{ poitem.itemprice * poitem.qtyordered }}</td>
                  <td>
                    <span @click="editPO(index)" class="iconbutton"
                      ><i class="fas fa-pencil-alt"></i
                    ></span>

                    <span @click="deletePO(index)" class="iconbutton"
                      ><i class="fas fa-trash"></i
                    ></span>
                  </td>
                </tr>
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
      po: { poitems: [] },
      poitem: {},
      poitems: [],
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
      podetails: [
        {
          number: "PO-001",
          date: "03/02/2021",
          vendorcode: "VC-001",
          vendorname: "ABC Pvt Ltd",
          poitems: [
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
          number: "PO-002",
          date: "03/02/2021",
          vendorcode: "VC-002",
          vendorname: "XYZ Pvt Ltd",
          poitems: [
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
      return this.poitems.reduce(
        (acc, poitem) => acc + poitem.price * poitem.orderqty,
        0
      );
    },
  },
  methods: {
    addItem() {
      this.poitems.push(this.poitem);
      this.poitem = {};
    },
    addPO() {
      this.podetails.push(this.po);
      this.po = {};
    },
    editPO(index) {
      this.po = JSON.parse(JSON.stringify(this.podetails[index]));
      var editconfirmation = confirm("Are you sure to edit this PO ?");
      if (editconfirmation) {
        this.podetails.splice(index, 1);
      }
    },
    deletePO(index) {
      var delconfirmation = confirm("Are you sure to delete this PO ?");
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
.item-list table {
  margin-left: auto;
  margin-right: auto;
}
.item-list table th {
  min-width: 40px;
  max-width: 180px;
  background-color: black;
  color: white;
  padding: 5px;
  font-size: 13px;
}
.item-list table td {
  font-size: 12px;
}
.textfield {
  background-color: none;
  color: black;
}
.item-list table th i:hover {
  font-size: 15px;
  cursor: pointer;
  color: hotpink;
}
.btnadd {
  margin-top: 10px;
}
.grandtotal td {
  font-weight: bolder;
  height: 25px;
}
</style>
