<template>
  <div class="container">
    <div id="search" class="searchsection">
      <input
        type="text"
        name="searchsinum"
        id="searchsinum"
        v-model="searchsinum"
        @keyup="searchSInum()"
        placeholder="Search by SI Number"
      />
      <i class="fas fa-search"></i>

      <input
        type="text"
        name="searchsidate"
        id="searchsidate"
        v-model="searchsidate"
        @keyup="searchSIdate()"
        placeholder="Search by SI Date"
      />
      <i class="fas fa-search"></i>

      <input
        type="text"
        name="searchcc"
        id="searchcc"
        v-model="searchcc"
        @keyup="searchCC()"
        placeholder="Search by Customer Code"
      />
      <i class="fas fa-search"></i>

      <input
        type="text"
        name="searchcn"
        id="searchcn"
        v-model="searchcn"
        @keyup="searchCN()"
        placeholder="Search by Customer Name"
      />
      <i class="fas fa-search"></i>
    </div>
    <div class="displaysection table">
      <table>
        <thead>
          <tr>
            <th>SI Number</th>
            <th>Date</th>
            <th>Customer Code</th>
            <th>Customer Name</th>
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
          <tr v-for="(si, index) in sidetails" :key="index">
            <td>{{ si.number }}</td>
            <td>{{ si.date }}</td>
            <td>{{ si.customercode }}</td>
            <td>{{ si.customername }}</td>
            <td>
              <tr v-for="(siitem, index2) in si.siitems" :key="index2">
                <td>{{ siitem.itemcode }}</td>
                <td>{{ siitem.itemdescription }}</td>
                <td>{{ siitem.itemprice }}</td>
                <td>{{ siitem.itemgst }}</td>
                <td>{{ siitem.qtyordered }}</td>
                <td>{{ siitem.itemprice * siitem.qtyordered }}</td>
                <td>
                  <span @click="editSI(index)" class="iconbutton"
                    ><i class="fas fa-pencil-alt"></i
                  ></span>

                  <span @click="deleteSI(index)" class="iconbutton"
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
      si: {},
      siitem: {},
      siitems: [],
      searchsinum: "",
      searchsidate: "",
      searchcc: "",
      searchcn: "",

      initialdata: [
        {
          number: "SI-001",
          date: "03/02/2021",
          customercode: "CC-001",
          customername: "Shop 1",
          siitems: [
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
          number: "SI-002",
          date: "03/02/2021",
          customercode: "CC-002",
          customername: "Shop 2",
          siitems: [
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
          number: "SI-003",
          date: "04/02/2021",
          customercode: "CC-001",
          customername: "Shop 1",
          siitems: [
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
          number: "SI-002",
          date: "04/02/2021",
          customercode: "CC-002",
          customername: "Shop 2",
          siitems: [
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
          number: "SI-001",
          date: "05/02/2021",
          customercode: "CU-001",
          customername: "Shop 1",
          siitems: [
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
      sidetails: this.initialdata,
    };
  },
  computed: {
    total() {
      return this.siitems.reduce(
        (acc, siitem) => acc + siitem.itemprice * siitem.qtyordered,
        0
      );
    },
  },
  methods: {
    addItem() {
      this.siitems.push(this.siitem);
      this.siitem = {};
    },
    addSI() {
      this.sidetails.push(this.si);

      this.si = {};
    },
    editSI(index) {
      this.si = JSON.parse(JSON.stringify(this.sidetails[index]));
      var editconfirmation = confirm("Are you sure to edit this SI ?");
      if (editconfirmation) {
        this.sidetails.splice(index, 1);
      }
    },
    deleteSI(index) {
      var delconfirmation = confirm("Are you sure to delete this SI ?");
      if (delconfirmation) {
        this.sidetails.splice(index, 1);
      }
    },
    searchSInum() {
      this.sidetails = this.initialdata.filter((si) =>
        si.number.toLowerCase().includes(this.searchsinum.toLowerCase())
      );
    },
    searchSIdate() {
      this.sidetails = this.initialdata.filter((si) =>
        si.date.toLowerCase().includes(this.searchsidate.toLowerCase())
      );
    },
    searchCC() {
      this.sidetails = this.initialdata.filter((si) =>
        si.customercode.toLowerCase().includes(this.searchcc.toLowerCase())
      );
    },
    searchCN() {
      this.sidetails = this.initialdata.filter((si) =>
        si.customername.toLowerCase().includes(this.searchcn.toLowerCase())
      );
    },
  },
  created() {
    this.searchSInum();
    this.searchSIdate();
    this.searchCC();
    this.searchCN();
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
</style>

