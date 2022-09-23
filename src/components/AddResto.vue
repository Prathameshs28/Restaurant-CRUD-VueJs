

<template>
    <Header />
    <div class="resto">
        <img class="resto-logo" src="../assets/resto-logo.webp" alt="logo">
        <h1 class="h2 mt-3 mb-3" style="color:#29465B;">Add New Restaurant</h1>
        <div class="rest-form">
            <div class="form-floating mb-3">
                <input v-model="name" type="text" class="form-control" id="floatingInput" placeholder="Enter name">
                <label for="floatingInput">Enter Restaurant name</label>
            </div>

            <div class="form-floating mb-3">
                <textarea v-model="address" class="form-control" placeholder="Leave a comment here"
                    id="floatingTextarea2" style="height: 80px"></textarea>
                <label for="floatingTextarea2">Restaurant Address</label>
            </div>

            <div class="form-floating mb-3">
                <input v-model="contact" type="text" class="form-control" id="floatingInput" placeholder="Enter name">
                <label for="floatingInput">Enter Restaurant contact</label>
            </div>

            <button @click="addNewResto()" class="btn btn-success">Add Restaurant</button>


        </div>

    </div>
</template>

<script>

import axios from 'axios'
import Header from './Header.vue'

export default {
    name: 'AddResto',
    data() {
        return {
            name: '',
            address: '',
            contact: ''
        }
    },
    methods: {

         
        async addNewResto() {
            // console.log(this.name,this.address,this.contact);

            

            if (this.name != '' && this.address != '' && this.contact != '') {
                let result = await axios.post('http://localhost:3000/restaurant',
                    { "name": this.name, "address": this.address, "contact": this.contact });

                    console.log(result);

                if (result.data != null) {                   
                    this.$router.push({ name: 'Home' })
                } else {
                   console.log('failed');
                }

            }

        }
    },
    components: {
        Header
    }

}
</script>


<style>
.resto {
    text-align: center;
    width: 500px;
    margin: 20px auto;
    border: 5px gray solid;
    padding: 20px;
    border-radius: 10px;

}

.resto-logo {
    width: 100px;
    height: auto;
    border-radius: 50%;
}

.rest-form {
    margin: 10px auto;
    width: 400px;

}
</style>