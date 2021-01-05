<template>
  <div class="list-view">
    <div class="input-layout">
      <label>Vendor Code </label>
      <select v-model="selected">
        <option disabled value="">Please select a Vendor Code</option>
      </select>
    </div>
    <div class="input-layout">
      <label>Vendor Name </label>
      <select v-model="selected">
        <option disabled value="">Please select a Vendor</option>
      </select>
    </div>
    <div class="input-layout">
      <label>Address </label>
      <textarea v-model="message" disabled></textarea>
    </div>
    <div class="input-layout">
      <label>State </label>
      <textarea v-model="message" disabled></textarea>
    </div>
    <div class="input-layout">
      <label>Contact Person</label>
      <input v-model="message" disabled />
    </div>
    <div class="input-layout">
      <label>Designation</label>
      <input v-model="message" disabled />
    </div>
    <div class="input-layout">
      <label>Contact Number 1</label>
      <input v-model.number="contactnumber1" type="number" disabled />
    </div>
    <div class="input-layout">
      <label>Contact Number 2</label>
      <input v-model.number="contactnumber2" type="number" disabled />
    </div>
    <div class="input-layout">
      <label>Email ID</label>
      <input v-model="message" disabled />
    </div>
    <div class="input-layout">
      <label>GST Number</label>
      <input v-model.number="gstnumber" type="number" disabled />
    </div>
    <div class="input-layout">
      <label>Credit Terms </label>
      <input v-model="message" disabled />
    </div>
  </div>
  <div>
    <button>Delete</button>
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
</style>>
