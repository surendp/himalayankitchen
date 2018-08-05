<template>
  <div class="display-area">
    <div class="display-area__item">
      <div class="display-area__item_background"></div>
      <h3 class="display-area__item_header">Make Reservation </h3>
      <div class="display-area__item_content">
       <form class="form">
         <div class="form__group">
           <label for="name" class="label">Name</label>
           <input 
            type="text" 
            v-model="name" 
            id="name" 
            class="input"
            maxlength="250"
            required>
         </div>
         <div class="form__group">
           <label for="email" class="label">Email</label>
           <input 
            type="email" 
            v-model="email" 
            id="email" 
            class="input"
            maxlength="250"
            required>
         </div>
         <div class="form__group">
           <label for="phone" class="label">Phone Number</label>
           <input 
            type="text" 
            v-model="phone" 
            id="phone" 
            class="input"
            maxlength="20"
            required>
         </div>
         <div class="form__group">
           <label for="size" class="label">Party Size</label>
           <input 
            type="number" 
            v-model="size" 
            id="size" 
            class="input" 
            min="1"
            required>
         </div>
         <div class="form__group">
           <label for="date" class="label">Date</label>
           <input 
            type="date" 
            v-model="date" 
            id="date" 
            class="input">
         </div>
         <div class="form__group">
           <label for="message">Message</label>
          <textarea 
            v-model="message" 
            id="message" 
            cols="30" 
            rows="10"></textarea>
         </div>
         <button class="btn-primary" @click.prevent="submitReservation">Submit</button>
       </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactAndReservations',
  data () {
    return {
      name: null, 
      email: null, 
      phone: null,
      size: null, 
      date: null, 
      message: null
    }
  },
  methods: {
    submitReservation () {
      const data = { 
        name: this.name, 
        email: this.email, 
        phone: this.phone, 
        size: this.size, 
        date: this.date, 
        message: this.message 
      }
      const payload = `
        Mr/Mrs ${this.name} wants to make reservation for ${this.size} people. \n
        Email: ${this.email} \n
        Contact Number: ${this.phone} \n
        Date: ${this.date} \n
        Message: ${this.message}
      `
      const newpayload = JSON.stringify(payload)
      console.log(typeof payload)
      fetch('https://secret-castle-23220.herokuapp.com/makeReservation',{
        method: 'POST',
        body: newpayload,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            
        },
        referrer: "*client",
        credentials: "omit"
      })  
    }
  }
}
</script>

