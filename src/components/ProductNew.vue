<template>
  <div class="container">
    <div class="list-view">
      <div class="input-layout">
        <label>Item Code </label>
        <input v-model="product.itemcode" placeholder="Enter Item Code" />
      </div>
      <div class="input-layout">
        <label>Item Description</label>
        <input
          v-model="product.itemdescription"
          placeholder="Enter Item Description"
        />
      </div>
      <!-- <div class="input-layout">
        <label>Item Short Name</label>
        <input v-model="productshortname" placeholder="Enter Item Short Name" />
      </div>
      <div class="input-layout">
        <label>Vendor Item Code</label>
        <input
          v-model="productvendoritemcode"
          placeholder="Enter Vendor Code"
        />
      </div> -->

      <!-- <div class="input-layout">
        <label>Buying Price</label>
        <input v-model.number="productbuyingprice" type="number" />
      </div> -->
      <div class="input-layout">
        <label>Buying Price Incl Tax</label>
        <input v-model.number="product.buyingpriceincltax" type="number" />
      </div>
      <div class="input-layout">
        <label>CGST %</label>
        <input v-model.number="product.cgst" type="number" />
      </div>
      <div class="input-layout">
        <label>SGST %</label>
        <input v-model.number="product.sgst" type="number" />
      </div>
      <div class="input-layout">
        <label>IGST % </label>
        <input v-model.number="product.igst" type="number" />
      </div>

      <div class="input-layout">
        <label>Selling Price</label>
        <input v-model.number="product.sellingprice" type="number" />
      </div>
      <div class="input-layout">
        <label>Minimum Selling Price</label>
        <input v-model.number="product.minsellingprice" type="number" />
      </div>
      <!-- <div class="input-layout">
        <label>Maximum Selling Price</label>
        <input v-model.number="productmaxsellingprice" type="number" />
      </div> -->
      <div class="input-layout">
        <label>HSN Code</label>
        <input v-model="product.hsncode" placeholder="Enter HSN code" />
      </div>
      <!-- <div class="input-layout">
        <label>Vendor Barcode</label>
        <input
          v-model="productvendorbarcode"
          placeholder="Enter Vendor Barcode"
        /> 
      </div>-->
      <div class="input-layout">
        <label>Reorder Limit</label>
        <input v-model.number="product.reorderlimit" type="number" />
      </div>
      <div class="input-layout">
        <label>Vendor Code</label>
        <select v-model="product.vendorcode">
          <option disabled value="">Select the Vendor Code</option>
          <option>VC-001</option>
          <option>VC-002</option>
        </select>
      </div>
      <div class="input-layout">
        <label>Vendor Name</label>
        <select v-model="product.vendorname">
          <option disabled value="">Select the Vendor</option>
          <option>ABC Pvt Ltd</option>
          <option>XYZ Pvt Ltd</option>
        </select>
      </div>
    </div>
    <div>
      <button @click="addProduct()" class="button btnadd">Save Product</button>
    </div>

    <div class="displaysection">
      <div class="table">
        <table>
          <thead class="headerposition">
            <tr>
              <th>Item Code</th>
              <th>Item Description</th>
              <th>Buying Price Incl Tax</th>
              <th>CGST %</th>
              <th>SGST %</th>
              <th>IGST %</th>
              <th>Selling Price</th>
              <th>Minimum Selling Price</th>
              <th>HSN Code</th>
              <th>Reorder Limit</th>
              <th>Vendor Code</th>
              <th>Vendor Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="viewlimit">
            <tr v-for="(product, index) in rows" :key="index">
              <td>{{ product.itemcode }}</td>
              <td>{{ product.itemdescription }}</td>
              <td>{{ product.buyingpriceincltax }}</td>
              <td>{{ product.cgst }}</td>
              <td>{{ product.sgst }}</td>
              <td>{{ product.igst }}</td>
              <td>{{ product.sellingprice }}</td>
              <td>{{ product.minsellingprice }}</td>
              <td>{{ product.hsncode }}</td>
              <td>{{ product.reorderlimit }}</td>
              <td>{{ product.vendorcode }}</td>
              <td>{{ product.vendorname }}</td>
              <td>
                <span @click="editProduct(index)" class="iconbutton"
                  ><i class="fas fa-pencil-alt"></i
                ></span>

                <span @click="deleteProduct(index)" class="iconbutton"
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
      product: {},
      searchitemcode: "",
      searchitemdescription: "",
      // initialdata: [{}, {}],
      // rows: this.initialdata,
      initialdata: [
        {
          itemcode: "P-001",
          itemdescription: "Crystal Salt premium",
          buyingpriceincltax: 50,
          cgst: 6,
          sgst: 6,
          igst: 0,
          sellingprice: 65,
          minsellingprice: 60,
          hsncode: "SC102938646738",
          reorderlimit: 50,
          vendorcode: "VC004",
          vendorname: "JPL Pvt Ltd",
        },
        {
          itemcode: "P-002",
          itemdescription: "Normal Salt ",
          buyingpriceincltax: 30,
          cgst: 6,
          sgst: 6,
          igst: 0,
          sellingprice: 45,
          minsellingprice: 42,
          hsncode: "SC1029386865387",
          reorderlimit: 50,
          vendorcode: "VC007",
          vendorname: "XYZ Pvt Ltd",
        },
      ],
      rows: this.initialdata,
    };
  },
  methods: {
    addProduct() {
      this.rows.push(this.product);
      this.product = {};
      //this.rows[index] = JSON.parse(JSON.stringify(this.rows[index]));
    },
    editProduct(index) {
      this.product = JSON.parse(JSON.stringify(this.rows[index]));
    },
    deleteProduct(index) {
      var delconfirmation = confirm("Are you sure to delete this product ?");
      if (delconfirmation) {
        this.rows.splice(index, 1);
      }
    },
    searchProductbycode() {
      this.rows = this.initialdata.filter((product) =>
        product.itemcode
          .toLowerCase()
          .includes(this.searchitemcode.toLowerCase())
      );
    },
    searchProductbydescription() {
      this.rows = this.initialdata.filter((product) =>
        product.itemdescription
          .toLowerCase()
          .includes(this.searchitemdescription.toLowerCase())
      );
    },
  },
  created() {
    this.searchProductbycode();
    this.searchProductbydescription();
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
  column-gap: 40px;
  row-gap: 20px;
  margin: 30px 25px 20px;
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
.input-layout select {
  font-size: 13px;
  outline: none;
  border-right-style: none;
  border-left-style: none;
  border-top-style: none;
}

.input-layout select {
  border-bottom-width: 2px;
  /* width: 175px; */
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

.displaysection {
  position: absolute;

  margin: 20px;
  height: 200px;
  overflow-y: auto;
  /*overflow-x: auto; */
}
.table {
  max-width: 75vw;
  border: 2px solid #44475c;
  margin: 5px 5px 5px 5px;
}
.table th {
  /* border: 2px solid #474a5c; */
  text-align: center;
  background: #44475c;
  color: #fff;
  padding: 1px;
  min-width: 20px;
  font-size: 12px;
}
.table td {
  font-size: 12px;
  padding: 2px 3px;
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
.input-layout textarea:focus {
  border-color: black;
  box-shadow: 3px 3px 3px green;
}
.button:focus,
.button:hover {
  box-shadow: 5px 5px 10px green;
  color: brown;
}
</style>
