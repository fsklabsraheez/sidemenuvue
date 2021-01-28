<template>
  <div class="container">
    <div class="list-view">
      <div class="input-layout">
        <label>Item Code </label>
        <input v-model="inventory.code" placeholder="Enter Item Code" />
      </div>
      <div class="input-layout">
        <label>Item Description </label>
        <input
          v-model="inventory.description"
          placeholder="Enter Item Description"
        />
      </div>
      <div class="input-layout">
        <label>Item Short Name </label>
        <input
          v-model="inventory.shortname"
          placeholder="Enter Item Short Name"
        />
      </div>
      <div class="input-layout">
        <label>Vendor Name </label>
        <input v-model="inventory.vendorname" placeholder="Enter Vendor Code" />
      </div>
      <div class="input-layout">
        <label>Vendor Item Code </label>
        <input
          v-model="inventory.vendoritemcode"
          placeholder="Enter Vendor Code"
        />
      </div>
      <div class="input-layout">
        <label>Barcode </label>
        <input v-model="inventory.barcode" placeholder="Enter Vendor Code" />
      </div>
      <div class="input-layout">
        <label>Buying Price</label>
        <input v-model.number="inventory.buyingprice" type="number" />
        <div>
          <label>SGST %</label>
          <input v-model.number="inventory.sgst" type="number" />
          <label>CGST %</label>
          <input v-model.number="inventory.cgst" type="number" />
          <label>IGST %</label>
        </div>
        <input v-model.number="inventory.igst" type="number" />
        <label>Buying Price (Incl Tax) </label>
        <input v-model.number="inventory.buyingpriceincltax" type="number" />
      </div>
      <div class="input-layout">
        <label>Minimum Selling Price</label>
        <input v-model.number="inventory.minsellingprice" type="number" />
      </div>
      <div class="input-layout">
        <label>Maximum Selling Price</label>
        <input v-model.number="inventory.maxsellingprice" type="number" />
      </div>
      <div class="input-layout">
        <label>Reorder limit</label>
        <input v-model.number="inventory.reorderlimit" type="number" />
      </div>

      <div>
        <button @click="addVendor()" class="button btnadd">Save Vendor</button>
      </div>
    </div>
    <div id="search">
      <div class="searchsection">
        <input
          type="text"
          name="searchvendorcode"
          id="searchvendorcode"
          v-model="searchcode"
          @keyup="searchVendorbyCode()"
          placeholder="Search by Code"
        />
        <i class="fas fa-search"></i>
        <!--p>Searching content : {{ searchcode }}</p-->

        <input
          type="text"
          name="searchvendorname"
          id="searchvendorname"
          v-model="searchname"
          @keyup="searchVendorbyName()"
          placeholder="Search by Name"
        />
        <i class="fas fa-search"></i>
        <!--p>Searching content : {{ searchname }}</p-->
      </div>
    </div>
    <div class="displaysection">
      <div class="table">
        <table id="vendorTable">
          <thead class="headerposition">
            <tr>
              <th>Item Code</th>
              <th>Item Description</th>
              <th>Item Short Name</th>
              <th>Vendor Code</th>
              <th>Contact Person</th>
              <th>Designation</th>
              <th>Contact Num1</th>
              <th>Contact Num2</th>
              <th>Email ID</th>
              <th>GST Number</th>
              <th>Credit Terms</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="viewlimit">
            <tr v-for="(vendor, index) in rows" :key="index">
              <td>{{ vendor.code }}</td>
              <td>{{ vendor.name }}</td>
              <td>{{ vendor.address }}</td>
              <td>{{ vendor.state }}</td>
              <td>{{ vendor.contactperson }}</td>
              <td>{{ vendor.desig }}</td>
              <td>{{ vendor.cnum1 }}</td>
              <td>{{ vendor.cnum2 }}</td>
              <td>{{ vendor.email }}</td>
              <td>{{ vendor.gst }}</td>
              <td>{{ vendor.creditterm }}</td>

              <td>
                <span @click="editVendor(index)" class="iconbutton"
                  ><i class="fas fa-pencil-alt"></i
                ></span>

                <span @click="deleteVendor(index)" class="iconbutton"
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
export default {};
</script>

<style scoped>
.top-menu {
  margin: 20px 150px 0px;
  border-radius: tomer 20px;
  padding: 20px 20px;
  background-color: none;
  display: flex;
  flex-direction: row;
}
.menu-btn.active {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  padding: 15px;
  margin: 0px 20px 0px 20px;
  background-color: rgb(0, 0, 0);
  color: blue;
  border-radius: 10px;
}

.top-menu > * {
  /*flex-basis: 10%;*/
}
.menu-btn {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  /*font-weight: bold;*/
  padding: 15px;
  margin: 0px auto 0px auto;
  background-color: rgb(0, 0, 0);
  color: white;
  border-radius: 10px;
}
</style>