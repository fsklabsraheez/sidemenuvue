<template>
  <div class="container">
    <div class="list-view">
      <div class="input-layout">
        <label>Item Code </label>
        <input v-model="productcode" placeholder="Enter Item Code" />
      </div>
      <div class="input-layout">
        <label>Item Description</label>
        <input
          v-model="productdescription"
          placeholder="Enter Item Description"
        />
      </div>
      <div class="input-layout">
        <label>Item Short Name</label>
        <input v-model="productshortname" placeholder="Enter Item Short Name" />
      </div>
      <div class="input-layout">
        <label>Vendor Item Code</label>
        <input
          v-model="productvendoritemcode"
          placeholder="Enter Vendor Code"
        />
      </div>
      <div class="input-layout">
        <label>Vendor Code</label>
        <select v-model="productvendorcode">
          <option disabled value="">Select the Vendor Code</option>
          <option>VC-001</option>
          <option>VC-002</option>
        </select>
      </div>
      <div class="input-layout">
        <label>Vendor Name</label>
        <select v-model="productvendorname">
          <option disabled value="">Select the Vendor</option>
          <option>ABC Pvt Ltd</option>
          <option>XYZ Pvt Ltd</option>
        </select>
      </div>
      <div class="input-layout">
        <label>Buying Price</label>
        <input v-model.number="productbuyingprice" type="number" />
      </div>
      <div class="input-layout">
        <div class="gst">
          <label>CGST %</label>
          <input v-model.number="productcgst" type="number" />
          <label>SGST %</label>
          <input v-model.number="productsgst" type="number" />
          <label>IGST % </label>
          <input v-model.number="productigst" type="number" />
        </div>
      </div>
      <div class="input-layout">
        <label>Buying Price Incl Tax</label>
        <input v-model.number="productbuyingpriceincltax" type="number" />
      </div>
      <div class="input-layout">
        <label>Selling Price</label>
        <input v-model.number="productsellingprice" type="number" />
      </div>
      <div class="input-layout">
        <label>Minimum Selling Price</label>
        <input v-model.number="productminsellingprice" type="number" />
      </div>
      <div class="input-layout">
        <label>Maximum Selling Price</label>
        <input v-model.number="productmaxsellingprice" type="number" />
      </div>
      <div class="input-layout">
        <label>Barcode</label>
        <input v-model="productbarcode" placeholder="Enter Barcode" />
      </div>
      <div class="input-layout">
        <label>Vendor Barcode</label>
        <input
          v-model="productvendorbarcode"
          placeholder="Enter Vendor Barcode"
        />
      </div>
      <div class="input-layout">
        <label>Reorder Limit</label>
        <input v-model.number="productreorderlimit" type="number" />
      </div>
    </div>
    <div>
      <button @click="addInventoryproduct()" class="button btnadd">
        Save Product
      </button>
    </div>
    <div class="searchsection">
      <input
        type="text"
        name="searchitemcode"
        id="searchitemcode"
        v-model="searchitemcode"
        @keyup="searchProductbycode()"
        placeholder="Search by Item Code"
      />
      <i class="fas fa-search"></i>

      <input
        type="text"
        name="searchitemdescription"
        id="searchitemdescription"
        v-model="searchitemdescription"
        @keyup="searchProductbydescription()"
        placeholder="Search by Item Description"
      />
      <i class="fas fa-search"></i>
    </div>
    <div class="displaysection">
      <div class="table">
        <table>
          <thead class="headerposition">
            <tr>
              <th>Item Code</th>
              <th>Item Description</th>
              <th>Item Short Name</th>
              <th>Vendor Item Code</th>
              <th>Vendor Code</th>
              <th>Vendor Name</th>
              <th>Buying Price</th>
              <th>CGST%</th>
              <th>SGST%</th>
              <th>IGST%</th>
              <th>Buying Price Incl Tax</th>
              <th>Selling Price</th>
              <th>Minimum Selling Price</th>
              <th>Maximum Selling Price</th>
              <th>Barcode</th>
              <th>Vendor Barcode</th>
              <th>Reorder Limit</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="viewlimit">
            <tr v-for="(product, index) in rows" :key="index">
              <td>{{ product.itemcode }}</td>
              <td>{{ product.itemdescription }}</td>
              <td>{{ product.itemshortname }}</td>
              <td>{{ product.vendoritemcode }}</td>
              <td>{{ product.vendorcode }}</td>
              <td>{{ product.vendorname }}</td>
              <td>{{ product.buyingprice }}</td>
              <td>{{ product.cgst }}</td>
              <td>{{ product.sgst }}</td>
              <td>{{ product.igst }}</td>
              <td>{{ product.buyingpriceincltax }}</td>
              <td>{{ product.sellingprice }}</td>
              <td>{{ product.minsellingprice }}</td>
              <td>{{ product.maxsellingprice }}</td>
              <td>{{ product.barcode }}</td>
              <td>{{ product.vendorbarcode }}</td>
              <td>{{ product.reorderlimit }}</td>
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

  <!--div class="container">
    <div class="list-view">
      <div class="input-layout">
        <label>Item Code </label>
        <input v-model="product.code" placeholder="Enter Item Code" />
      </div>
      <div class="input-layout">
        <label>Item Description</label>
        <input
          v-model="product.description"
          placeholder="Enter Item Description"
        />
      </div>
      <div class="input-layout">
        <label>Item Short Name</label>
        <input
          v-model="product.shortname"
          placeholder="Enter Item Short Name"
        />
      </div>
      <div class="input-layout">
        <label>Vendor Item Code</label>
        <input
          v-model="product.vendoritemcode"
          placeholder="Enter Vendor Code"
        />
      </div>
      <div class="input-layout">
        <label>Vendor Code</label>
        <select v-model="product.vendorcode">
          <option disabled value="">Please select the Vendor Code</option>
          <option>VC-001</option>
          <option>VC-002</option>
        </select>
      </div>
      <div class="input-layout">
        <label>Vendor Name</label>
        <select v-model="product.vendorname">
          <option disabled value="">Please select the Vendor</option>
          <option>ABC Pvt Ltd</option>
          <option>XYZ Pvt Ltd</option>
        </select>
      </div>
      <div class="input-layout">
        <label>Buying Price</label>
        <input v-model.number="product.buyingprice" type="number" />
      </div>
      <div class="input-layout">
        <label>CGST %</label>
        <input v-model.number="product.cgst" type="number" />
        <label>SGST %</label>
        <input v-model.number="product.sgst" type="number" />
        <label>IGST</label>
        <input v-model.number="product.igst" type="number" />
      </div>
      <div class="input-layout">
        <label>Buying Price Incl Tax</label>
        <input v-model.number="product.buyingpriceincltax" type="number" />
      </div>
      <div class="input-layout">
        <label>Selling Price</label>
        <input v-model.number="product.sellingprice" type="number" />
      </div>
      <div class="input-layout">
        <label>Minimum Selling Price</label>
        <input v-model.number="product.minsellingprice" type="number" />
      </div>
      <div class="input-layout">
        <label>Maximum Selling Price</label>
        <input v-model.number="product.maxsellingprice" type="number" />
      </div>
      <div class="input-layout">
        <label>Barcode</label>
        <input v-model="product.barcode" placeholder="Enter Barcode" />
      </div>
      <div class="input-layout">
        <label>Vendor Barcode</label>
        <input
          v-model="product.vendorbarcode"
          placeholder="Enter Vendor Barcode"
        />
      </div>
      <div class="input-layout">
        <label>Reorder Limit</label>
        <input v-model.number="product.reorderlimit" type="number" />
      </div>

      <div>
        <button @click="addInventoryproduct()" class="button btnadd">
          Save Product
        </button>
      </div>
    </div>
    <div id="search">
      <div class="searchsection">
        <input
          type="text"
          name="searchitemcode"
          id="searchitemcode"
          v-model="searchitemcode"
          @keyup="searchProductbycode()"
          placeholder="Search by Item Code"
        />
        <i class="fas fa-search"></i>

        <input
          type="text"
          name="searchitemdescription"
          id="searchitemdescription"
          v-model="searchitemdescription"
          @keyup="searchProductbydescription()"
          placeholder="Search by Item Description"
        />
        <i class="fas fa-search"></i>
      </div>
    </div>
    <div class="displaysection">
      <div class="table">
        <table>
          <thead class="headerposition">
            <tr>
              <th>Item Code</th>
              <th>Item Description</th>
              <th>Item Short Name</th>
              <th>Vendor Item Code</th>
              <th>Vendor Code</th>
              <th>Vendor Name</th>
              <th>Buying Price</th>
              <th>CGST%</th>
              <th>SGST%</th>
              <th>IGST%</th>
              <th>Buying Price Incl Tax</th>
              <th>Selling Price</th>
              <th>Minimum Selling Price</th>
              <th>Maximum Selling Price</th>
              <th>Barcode</th>
              <th>Vendor Barcode</th>
              <th>Reorder Limit</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="viewlimit">
            <tr v-for="(product, index) in rows" :key="index">
              <td>{{ product.itemcode }}</td>
              <td>{{ product.itemdescription }}</td>
              <td>{{ product.itemshortname }}</td>
              <td>{{ product.vendoritemcode }}</td>
              <td>{{ product.vendorcode }}</td>
              <td>{{ product.vendorname }}</td>
              <td>{{ product.buyingprice }}</td>
              <td>{{ product.cgst }}</td>
              <td>{{ product.sgst }}</td>
              <td>{{ product.igst }}</td>
              <td>{{ product.buyingpriceincltax }}</td>
              <td>{{ product.sellingprice }}</td>
              <td>{{ product.minsellingprice }}</td>
              <td>{{ product.maxsellingprice }}</td>
              <td>{{ product.barcode }}</td>
              <td>{{ product.vendorbarcode }}</td>
              <td>{{ product.reorderlimit }}</td>
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
  </div-->
</template>

<script>
export default {};
</script>
<!--script>
export default {
  data() {
    return {
      product: {},
      searchname: "",
      searchcode: "",

      initialdata: [{}, {}],
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
      //this.inventoryproduct = this.rows[index];
    },

    deleteProduct(index) {
      var delconfirmation = confirm("Are you sure to delete this Product ?");
      if (delconfirmation) {
        this.rows.splice(index, 1);
      }
    },
    searchProductbycode() {
      this.rows = this.initialdata.filter((product) =>
        product.code
          .toLowerCase()
          .includes(this.searchproductbycode.toLowerCase())
      );
    },
    searchProductbydescription() {
      this.rows = this.initialdata.filter((product) =>
        product.name
          .toLowerCase()
          .includes(this.searchproductbydescription.toLowerCase())
      );
    },
  },
  created() {
    this.searchProductbycode();
    this.searchProductbydescription();
  },
};
</script-->

<style scoped>
.container {
  position: relative;

  width: 100%;
}
.list-view {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
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
.input-layout select {
  width: 178px;
}
.gst {
  grid-column-start: 3;
  grid-column-end: 5;
  gap: 20px;
}
.gst label {
  margin: auto 6px auto 2px;
}
.gst input {
  width: 35px;
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
  /* margin: 8px 0 0 30%; */
  /*margin-top: 25px;*/
}
.searchsection {
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr 0.1fr 5fr;
  margin: 15px 20px 0px;
}
.searchsection input,
.searchsection i {
  border-right-style: none;
  border-left-style: none;
  border-top-style: none;
  border-bottom-width: medium;
  border-bottom-color: black;
}
.searchsection i {
  margin-right: 35px;
}
.displaysection {
  position: absolute;

  margin: 10px;
  height: 90%;
  overflow-y: auto;
  overflow-x: auto;
}
.table {
  width: 75vw;

  border: 2px solid #44475c;
  margin: 5px 5px 5px 5px;
}
.table th {
  text-align: center;
  background: #44475c;
  color: #fff;
  padding: 3px;
  min-width: 20px;
  font-size: 13px;
}
.input-layout label {
  /* margin-right: 15px; */
}
</style>
<!--style scoped>

.container {
  position: relative;
  /* height: 100%; */
  width: 100%;
}
.list-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /*background-color: tan;*/
  text-align: left;
  margin: 25px 20px 5px 20px;
  /* overflow-y: auto;
  overflow-x: auto; */
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
  margin: 8px 0 0 30%;
  /*margin-top: 25px;*/
}
.iconbutton {
  width: auto;
  height: auto;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 5px 5px;
  gap: 10px;
}
.iconbutton i:hover {
  color: blue;
  font-size: 14px;
}

.input-layout {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 3px;
  margin: 0px 6px;
}
.input-layout label {
  margin-right: auto;
  font-size: 15px;
}
.input-layout input,
.input-layout select {
  width: auto;
  height: 25px;
  font-size: 13px;
  border: 1px solid black;
  border-radius: 3px;
}
.input-layout select {
  width: 255px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.displaysection {
  position: absolute;
  /*background-color: burlywood;*/
  margin: 10px;
  height: 90%;
  overflow-y: auto;
  /* overflow-x: auto; */
  /*position: relative;*/
}

.table {
  /*border-collapse: collapse;*/

  width: 75vw;

  border: 2px solid #44475c;
  margin: 5px 5px 5px 5px;
}
.table th {
  /*text-transform: uppercase;*/
  text-align: center;
  background: #44475c;
  color: #fff;
  padding: 3px;
  min-width: 20px;
  font-size: 13px;
  /*position: fixed;*/
}
/* .headerposition {
   position: sticky; 
  position: sticky;
  top: 0;
  z-index: 10;
} */

.table th {
  /*text-transform: uppercase;*/
  text-align: center;
  background: #44475c;
  color: #fff;
  padding: 3px;
  min-width: 20px;
  font-size: 13px;
  /*position: fixed;*/
}

.table td {
  text-align: left;
  padding-left: 3px;
  border-right: 2px solid #7d82a8;
  word-wrap: break-word;
  /*max-width: 140px;*/
  width: auto;
  font-size: 12px;
}

/*.table td:last-child {
  border-right: none;
}*/
.table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}

.searchsection {
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr 0.1fr 5fr;
  margin: 15px 20px 0px;
}
.searchsection input,
.searchsection i {
  border-right-style: none;
  border-left-style: none;
  border-top-style: none;
  border-bottom-width: medium;
  border-bottom-color: black;
}
.searchsection i {
  margin-right: 35px;
}
</style-->
