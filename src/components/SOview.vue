<template>
  <div class="container">
    <div id="search" class="searchsection">
      <input
        type="text"
        name="searchsonum"
        id="searchsonum"
        v-model="searchsonum"
        @keyup="searchSOnum()"
        placeholder="Search by SO Number"
      />
      <i class="fas fa-search"></i>

      <input
        type="text"
        name="searchsodate"
        id="searchsodate"
        v-model="searchsodate"
        @keyup="searchSOdate()"
        placeholder="Search by SO Date"
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
            <th>SO Number</th>
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
          <tr v-for="(so, index) in sodetails" :key="index">
            <td>{{ so.number }}</td>
            <td>{{ so.date }}</td>
            <td>{{ so.customercode }}</td>
            <td>{{ so.customername }}</td>
            <td>
              <tr v-for="(soitem, index2) in so.soitems" :key="index2">
                <td>{{ soitem.itemcode }}</td>
                <td>{{ soitem.itemdescription }}</td>
                <td>{{ soitem.itemprice }}</td>
                <td>{{ soitem.itemgst }}</td>
                <td>{{ soitem.qtyordered }}</td>
                <td>{{ soitem.itemprice * soitem.qtyordered }}</td>
                <td>
                  <span @click="editSO(index)" class="iconbutton"
                    ><i class="fas fa-pencil-alt"></i
                  ></span>

                  <span @click="deleteSO(index)" class="iconbutton"
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
      so: {},
      soitem: {},
      soitems: [],
      searchsonum: "",
      searchsodate: "",
      searchcc: "",
      searchcn: "",

      initialdata: [
        {
          number: "SO-001",
          date: "03/02/2021",
          customercode: "CC-001",
          customername: "Shop 1",
          soitems: [
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
          number: "SO-002",
          date: "03/02/2021",
          customercode: "CC-002",
          customername: "Shop 2",
          soitems: [
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
          number: "SO-003",
          date: "04/02/2021",
          customercode: "CC-001",
          customername: "Shop 1",
          soitems: [
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
          number: "SO-002",
          date: "04/02/2021",
          customercode: "CC-002",
          customername: "Shop 2",
          soitems: [
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
          number: "SO-001",
          date: "05/02/2021",
          customercode: "CU-001",
          customername: "Shop 1",
          soitems: [
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
      sodetails: this.initialdata,
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

      this.so = {};
    },
    editSO(index) {
      this.so = JSON.parse(JSON.stringify(this.sodetails[index]));
      var editconfirmation = confirm("Are you sure to edit this SO ?");
      if (editconfirmation) {
        this.sodetails.splice(index, 1);
      }
    },
    deleteSO(index) {
      var delconfirmation = confirm("Are you sure to delete this SO ?");
      if (delconfirmation) {
        this.sodetails.splice(index, 1);
      }
    },
    searchSOnum() {
      this.sodetails = this.initialdata.filter((so) =>
        so.number.toLowerCase().includes(this.searchsonum.toLowerCase())
      );
    },
    searchSOdate() {
      this.sodetails = this.initialdata.filter((so) =>
        so.date.toLowerCase().includes(this.searchsodate.toLowerCase())
      );
    },
    searchCC() {
      this.sodetails = this.initialdata.filter((so) =>
        so.customercode.toLowerCase().includes(this.searchcc.toLowerCase())
      );
    },
    searchCN() {
      this.sodetails = this.initialdata.filter((so) =>
        so.customername.toLowerCase().includes(this.searchcn.toLowerCase())
      );
    },
  },
  created() {
    this.searchSOnum();
    this.searchSOdate();
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
.searchsection input:focus {
  background-color: whitesmoke;
}
</style>

