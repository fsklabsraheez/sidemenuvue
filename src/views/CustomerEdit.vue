<template>
  <div class="list-view">
    <div class="input-layout">
      <label>Customer Code </label>
      <select v-model="selected">
        <option disabled value="">Please select a Customer Code</option>
      </select>
    </div>
    <div class="input-layout">
      <label>Customer Name </label>
      <select v-model="selected">
        <option disabled value="">Please select a Customer</option>
      </select>
    </div>
    <div class="input-layout">
      <label>Address </label>
      <textarea v-model="message"></textarea>
    </div>
    <div class="input-layout">
      <label>State </label>
      <select v-model="selected">
        <option disabled value="">Please select state</option>
        <option>Kerala</option>
        <option>Tamil Nadu</option>
      </select>
    </div>
    <div class="input-layout">
      <label>Contact Person</label>
      <input v-model="message" />
    </div>
    <div class="input-layout">
      <label>Designation</label>
      <input v-model="message" />
    </div>
    <div class="input-layout">
      <label>Contact Number 1</label>
      <input v-model.number="contactnumber1" type="number" />
    </div>
    <div class="input-layout">
      <label>Contact Number 2</label>
      <input v-model.number="contactnumber2" type="number" />
    </div>
    <div class="input-layout">
      <label>Email ID</label>
      <input v-model="message" />
    </div>
    <div class="input-layout">
      <label>GST Number</label>
      <input v-model.number="gstnumber" type="number" />
    </div>
    <div class="input-layout">
      <label>Credit Terms </label>
      <select v-model="selected">
        <option disabled value="">Please select the credit terms</option>
        <option>Immediate Payment</option>
        <option>7 days</option>
        <option>30 days</option>
        <option>60 days</option>
        <option>90 days</option>
      </select>
    </div>
  </div>
  <div>
    <button>Update</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.list-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /*background-color: tan;*/
  text-align: left;
  margin: 0px 10px 10px 10px;
}
button {
  border-radius: 30px;
  width: 150px;
  height: 40px;
  text-transform: uppercase;
  border: 2px solid black;
  box-shadow: 4px 4px 4px black;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 25px;
}
.input-layout {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  margin: 10px 60px;
}
.input-layout label {
  margin-right: auto;
  font-size: 18px;
}
.input-layout input {
  width: 250px;
  height: 30px;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 3px;
}
.input-layout select {
  width: 258px;
  height: 30px;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 3px;
}
.input-layout textarea {
  width: 250px;
  height: 70px;
  font-size: 18px;
  border: 2px solid black;
  margin-left: 40px;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>>
