<template>
  <div class="container">
    <div id="search" class="searchsection">
      <input
        type="text"
        name="searchPInum"
        id="searchPInum"
        v-model="searchpinum"
        @keyup="searchPInum()"
        placeholder="Search by PI Number"
      />
      <i class="fas fa-search"></i>

      <input
        type="text"
        name="searchPIdate"
        id="searchPIdate"
        v-model="searchpidate"
        @keyup="searchPIdate()"
        placeholder="Search by PI Date"
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
            <th>PI Number</th>
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
          <tr v-for="(PI, index) in PIdetails" :key="index">
            <td>{{ PI.number }}</td>
            <td>{{ PI.date }}</td>
            <td>{{ PI.vendorcode }}</td>
            <td>{{ PI.vendorname }}</td>
            <td>
              <tr v-for="(PIitem, index2) in PI.PIitems" :key="index2">
                <td>{{ PIitem.itemcode }}</td>
                <td>{{ PIitem.itemdescription }}</td>
                <td>{{ PIitem.itemprice }}</td>
                <td>{{ PIitem.itemgst }}</td>
                <td>{{ PIitem.qtyordered }}</td>
                <td>{{ PIitem.itemprice * PIitem.qtyordered }}</td>
                <td>
                  <span @click="editPI(index)" class="iconbutton"
                    ><i class="fas fa-pencil-alt"></i
                  ></span>

                  <span @click="deletePI(index)" class="iconbutton"
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
      PI: {},
      // PI: { PIitems: [] },
      PIitem: {},
      PIitems: [],
      searchpinum: "",
      searchpidate: "",
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
          number: "PI-001",
          date: "03/02/2021",
          vendorcode: "VC-001",
          vendorname: "ABC Pvt Ltd",
          PIitems: [
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
              itemdescription: "PIwder Salt Premium",
              itemprice: 30,
              itemgst: "8%",
              qtyordered: 100,
            },
            {
              itemcode: "P-004",
              itemdescription: "PIwder Salt Normal",
              itemprice: 25,
              itemgst: "8%",
              qtyordered: 150,
            },
          ],
        },
        {
          number: "PI-002",
          date: "03/02/2021",
          vendorcode: "VC-002",
          vendorname: "XYZ Pvt Ltd",
          PIitems: [
            {
              itemcode: "P-002",
              itemdescription: "Crystal Salt Normal",
              itemprice: 35,
              itemgst: "8%",
              qtyordered: 150,
            },
            {
              itemcode: "P-003",
              itemdescription: "PIwder Salt Premium",
              itemprice: 30,
              itemgst: "8%",
              qtyordered: 100,
            },
          ],
        },
        {
          number: "PI-003",
          date: "04/02/2021",
          vendorcode: "VC-001",
          vendorname: "ABC Pvt Ltd",
          PIitems: [
            {
              itemcode: "P-001",
              itemdescription: "Crystal Salt Premium",
              itemprice: 45,
              itemgst: "8%",
              qtyordered: 100,
            },
            {
              itemcode: "P-003",
              itemdescription: "PIwder Salt Premium",
              itemprice: 30,
              itemgst: "8%",
              qtyordered: 100,
            },
            {
              itemcode: "P-004",
              itemdescription: "PIwder Salt Normal",
              itemprice: 25,
              itemgst: "8%",
              qtyordered: 150,
            },
          ],
        },
        {
          number: "PI-002",
          date: "04/02/2021",
          vendorcode: "VC-002",
          vendorname: "XYZ Pvt Ltd",
          PIitems: [
            {
              itemcode: "P-002",
              itemdescription: "Crystal Salt Normal",
              itemprice: 35,
              itemgst: "8%",
              qtyordered: 150,
            },
            {
              itemcode: "P-003",
              itemdescription: "PIwder Salt Premium",
              itemprice: 30,
              itemgst: "8%",
              qtyordered: 100,
            },
          ],
        },
        {
          number: "PI-001",
          date: "05/02/2021",
          vendorcode: "VC-001",
          vendorname: "ABC Pvt Ltd",
          PIitems: [
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
              itemdescription: "PIwder Salt Premium",
              itemprice: 30,
              itemgst: "8%",
              qtyordered: 100,
            },
            {
              itemcode: "P-004",
              itemdescription: "PIwder Salt Normal",
              itemprice: 25,
              itemgst: "8%",
              qtyordered: 150,
            },
          ],
        },
      ],
      PIdetails: this.initialdata,
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
    searchPInum() {
      this.PIdetails = this.initialdata.filter((PI) =>
        PI.number.toLowerCase().includes(this.searchpinum.toLowerCase())
      );
    },
    searchPIdate() {
      this.PIdetails = this.initialdata.filter((PI) =>
        PI.date.toLowerCase().includes(this.searchpidate.toLowerCase())
      );
    },
    searchVC() {
      this.PIdetails = this.initialdata.filter((PI) =>
        PI.vendorcode.toLowerCase().includes(this.searchvc.toLowerCase())
      );
    },
    searchVN() {
      this.PIdetails = this.initialdata.filter((PI) =>
        PI.vendorname.toLowerCase().includes(this.searchvn.toLowerCase())
      );
    },
  },
  created() {
    this.searchPInum();
    this.searchPIdate();
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
  cursor: PIinter;
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
  cursor: PIinter;
}
.iconbutton i:hover {
  color: blue;
  font-size: 13px;
}
</style>

