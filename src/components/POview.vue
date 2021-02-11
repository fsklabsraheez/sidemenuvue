<template>
  <div class="container">
    <div id="search" class="searchsection">
      <input
        type="text"
        name="searchponum"
        id="searchponum"
        v-model="searchponum"
        @keyup="searchPOnum()"
        placeholder="Search by PO Number"
      />
      <i class="fas fa-search"></i>

      <input
        type="text"
        name="searchpodate"
        id="searchpodate"
        v-model="searchpodate"
        @keyup="searchPOdate()"
        placeholder="Search by PO Date"
      />
      <i class="fas fa-search"></i>

      <input
        type="text"
        name="searchvc"
        id="searchvc"
        v-model="searchvc"
        @keyup="searchVC()"
        placeholder="Search by Vendor Code"
      />
      <i class="fas fa-search"></i>

      <input
        type="text"
        name="searchvn"
        id="searchvn"
        v-model="searchvn"
        @keyup="searchVN()"
        placeholder="Search by Vendor Name"
      />
      <i class="fas fa-search"></i>
    </div>
    <div class="displaysection table">
      <table>
        <thead>
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
</template>


<script>
export default {
  data() {
    return {
      po: {},
      // po: { poitems: [] },
      poitem: {},
      poitems: [],
      searchponum: "",
      searchpodate: "",
      searchvc: "",
      searchvn: "",
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
      initialdata: [
        {
          number: "PO-001",
          date: "03/02/2021",
          vendorcode: "VC-001",
          vendorname: "ABC Pvt Ltd",
          poitems: [
            {
              itemcode: "P-001",
              itemdescription: "Crystal Salt Premium",
              itemprice: 45,
              itemgst: "8%",
              qtyordered: 100,
            },
            {
              itemcode: "P-002",
              itemdescription: "Crystal Salt Normal",
              itemprice: 35,
              itemgst: "8%",
              qtyordered: 150,
            },
            {
              itemcode: "P-003",
              itemdescription: "Powder Salt Premium",
              itemprice: 30,
              itemgst: "8%",
              qtyordered: 100,
            },
            {
              itemcode: "P-004",
              itemdescription: "Powder Salt Normal",
              itemprice: 25,
              itemgst: "8%",
              qtyordered: 150,
            },
          ],
        },
        {
          number: "PO-002",
          date: "03/02/2021",
          vendorcode: "VC-002",
          vendorname: "XYZ Pvt Ltd",
          poitems: [
            {
              itemcode: "P-002",
              itemdescription: "Crystal Salt Normal",
              itemprice: 35,
              itemgst: "8%",
              qtyordered: 150,
            },
            {
              itemcode: "P-003",
              itemdescription: "Powder Salt Premium",
              itemprice: 30,
              itemgst: "8%",
              qtyordered: 100,
            },
          ],
        },
        {
          number: "PO-003",
          date: "04/02/2021",
          vendorcode: "VC-001",
          vendorname: "ABC Pvt Ltd",
          poitems: [
            {
              itemcode: "P-001",
              itemdescription: "Crystal Salt Premium",
              itemprice: 45,
              itemgst: "8%",
              qtyordered: 100,
            },
            {
              itemcode: "P-003",
              itemdescription: "Powder Salt Premium",
              itemprice: 30,
              itemgst: "8%",
              qtyordered: 100,
            },
            {
              itemcode: "P-004",
              itemdescription: "Powder Salt Normal",
              itemprice: 25,
              itemgst: "8%",
              qtyordered: 150,
            },
          ],
        },
        {
          number: "PO-002",
          date: "04/02/2021",
          vendorcode: "VC-002",
          vendorname: "XYZ Pvt Ltd",
          poitems: [
            {
              itemcode: "P-002",
              itemdescription: "Crystal Salt Normal",
              itemprice: 35,
              itemgst: "8%",
              qtyordered: 150,
            },
            {
              itemcode: "P-003",
              itemdescription: "Powder Salt Premium",
              itemprice: 30,
              itemgst: "8%",
              qtyordered: 100,
            },
          ],
        },
        {
          number: "PO-001",
          date: "05/02/2021",
          vendorcode: "VC-001",
          vendorname: "ABC Pvt Ltd",
          poitems: [
            {
              itemcode: "P-001",
              itemdescription: "Crystal Salt Premium",
              itemprice: 45,
              itemgst: "8%",
              qtyordered: 100,
            },
            {
              itemcode: "P-002",
              itemdescription: "Crystal Salt Normal",
              itemprice: 35,
              itemgst: "8%",
              qtyordered: 150,
            },
            {
              itemcode: "P-003",
              itemdescription: "Powder Salt Premium",
              itemprice: 30,
              itemgst: "8%",
              qtyordered: 100,
            },
            {
              itemcode: "P-004",
              itemdescription: "Powder Salt Normal",
              itemprice: 25,
              itemgst: "8%",
              qtyordered: 150,
            },
          ],
        },
      ],
      podetails: this.initialdata,
    };
  },
  computed: {
    total() {
      return this.poitems.reduce(
        (acc, poitem) => acc + poitem.itemprice * poitem.qtyordered,
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
      // this.po.poitems.push(this.poitems);
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
    searchPOnum() {
      this.podetails = this.initialdata.filter((po) =>
        po.number.toLowerCase().includes(this.searchponum.toLowerCase())
      );
    },
    searchPOdate() {
      this.podetails = this.initialdata.filter((po) =>
        po.date.toLowerCase().includes(this.searchpodate.toLowerCase())
      );
    },
    searchVC() {
      this.podetails = this.initialdata.filter((po) =>
        po.vendorcode.toLowerCase().includes(this.searchvc.toLowerCase())
      );
    },
    searchVN() {
      this.podetails = this.initialdata.filter((po) =>
        po.vendorname.toLowerCase().includes(this.searchvn.toLowerCase())
      );
    },
  },
  created() {
    this.searchPOnum();
    this.searchPOdate();
    this.searchVC();
    this.searchVN();
  },
};
</script>

<style scoped>
.container {
  position: relative;
  border: brown 4px solid;
  /* background-color: brown; */
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 5px;
  margin-top: -2px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
/* .input-layout {
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

  margin-top: 25px;
} */
.searchsection {
  display: flex;
  margin: 20px 70px 0px;
}
.searchsection input {
  margin-left: 6px;
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
  /* margin-right: 35px; */
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 50%;
  margin-left: -10px;
}
.displaysection {
  position: relative;
  width: 95%;
  height: 70vh;
  margin: 20px;

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
.table tbody tr:nth-child(2n) tr {
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

.searchsection input:focus {
  background-color: whitesmoke;
}
</style>

