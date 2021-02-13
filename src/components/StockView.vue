<template>
  <div class="container">
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
              <th>
                Stock Available
                <tr>
                  <th>Warehouse</th>
                  <th>Shop</th>
                </tr>
              </th>
              <th>Buying Price</th>
              <th>Selling Price</th>
              <th>HSN Code</th>
              <th>Reorder Limit</th>

              <!-- <th>Actions</th> -->
            </tr>
          </thead>
          <tbody class="viewlimit">
            <tr v-for="(product, index) in rows" :key="index">
              <td>{{ product.itemcode }}</td>
              <td>{{ product.itemdescription }}</td>
              <td>
                <tr>
                  <td>55</td>
                  <td>45</td>
                </tr>
              </td>
              <td>{{ product.buyingprice }}</td>
              <td>{{ product.sellingprice }}</td>
              <td>{{ product.hsncode }}</td>
              <td>{{ product.reorderlimit }}</td>

              <!-- <td>
                <span @click="editProduct(index)" class="iconbutton"
                  ><i class="fas fa-pencil-alt"></i
                ></span>

                <span @click="deleteProduct(index)" class="iconbutton"
                  ><i class="fas fa-trash"></i
                ></span>
              </td> -->
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
          buyingprice: 50,
          sellingprice: 65,

          hsncode: "SC102938646738",
          reorderlimit: 50,
        },
        {
          itemcode: "P-002",
          itemdescription: "Normal Salt ",
          buyingprice: 30,

          sellingprice: 45,

          hsncode: "SC1029386865387",
          reorderlimit: 50,
        },
        {
          itemcode: "P-001",
          itemdescription: "Crystal Salt premium",
          buyingprice: 50,

          sellingprice: 65,

          hsncode: "SC102938646738",
          reorderlimit: 50,
        },
        {
          itemcode: "P-002",
          itemdescription: "Normal Salt ",
          buyingprice: 30,
          sellingprice: 45,

          hsncode: "SC1029386865387",
          reorderlimit: 50,
        },
        {
          itemcode: "P-001",
          itemdescription: "Crystal Salt premium",
          buyingprice: 50,

          sellingprice: 65,

          hsncode: "SC102938646738",
          reorderlimit: 50,
        },
        {
          itemcode: "P-002",
          itemdescription: "Normal Salt ",
          buyingprice: 30,

          sellingprice: 45,

          hsncode: "SC1029386865387",
          reorderlimit: 50,
        },
        {
          itemcode: "P-001",
          itemdescription: "Crystal Salt premium",
          buyingprice: 50,

          sellingprice: 65,

          hsncode: "SC102938646738",
          reorderlimit: 50,
        },
        {
          itemcode: "P-002",
          itemdescription: "Normal Salt ",
          buyingprice: 30,
          sellingprice: 45,

          hsncode: "SC1029386865387",
          reorderlimit: 50,
        },
        {
          itemcode: "P-001",
          itemdescription: "Crystal Salt premium",
          buyingprice: 50,
          sellingprice: 65,

          hsncode: "SC102938646738",
          reorderlimit: 50,
        },
        {
          itemcode: "P-002",
          itemdescription: "Normal Salt ",
          buyingprice: 30,

          sellingprice: 45,

          hsncode: "SC1029386865387",
          reorderlimit: 50,
        },
        {
          itemcode: "P-001",
          itemdescription: "Crystal Salt premium",
          buyingprice: 50,

          sellingprice: 65,

          hsncode: "SC102938646738",
          reorderlimit: 50,
        },
        {
          itemcode: "P-002",
          itemdescription: "Normal Salt ",
          buyingprice: 30,

          sellingprice: 45,

          hsncode: "SC1029386865387",
          reorderlimit: 50,
        },
        {
          itemcode: "P-001",
          itemdescription: "Crystal Salt premium",
          buyingprice: 50,

          sellingprice: 65,

          hsncode: "SC102938646738",
          reorderlimit: 50,
        },
        {
          itemcode: "P-002",
          itemdescription: "Normal Salt ",
          buyingprice: 30,
          sellingprice: 45,

          hsncode: "SC1029386865387",
          reorderlimit: 50,
        },
      ],
      rows: this.initialdata,
    };
  },
  methods: {
    // addProduct() {
    //   this.rows.push(this.product);
    //   this.product = {};
    //   //this.rows[index] = JSON.parse(JSON.stringify(this.rows[index]));
    // },
    // editProduct(index) {
    //   this.product = JSON.parse(JSON.stringify(this.rows[index]));
    // },
    // deleteProduct(index) {
    //   var delconfirmation = confirm("Are you sure to delete this product ?");
    //   if (delconfirmation) {
    //     this.rows.splice(index, 1);
    //   }
    // },
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
  outline: none;
}
.searchsection i {
  margin-right: 35px;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 50%;
  margin-left: -10px;
}
.displaysection {
  position: absolute;
  height: 70vh;
  margin: 20px;
  overflow-y: auto;
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
</style>
