
<template>
    <Header />
    <div class="resto">
        <img class="resto-logo" src="../assets/resto-logo.webp" alt="logo">
        <h1 class="h2 mt-3 mb-3" style="color:#29465B;">Update Restaurant</h1>
        <div class="rest-form">
            <div class="form-floating mb-3">
                <input v-model="name" type="text" class="form-control" id="floatingInput" placeholder="Enter name">
                <label for="floatingInput">Restaurant name</label>
            </div>

            <div class="form-floating mb-3">
                <textarea v-model="address" class="form-control" placeholder="Leave a comment here"
                    id="floatingTextarea2" style="height: 80px"></textarea>
                <label for="floatingTextarea2">Restaurant Address</label>
            </div>

            <div class="form-floating mb-3">
                <input v-model="contact" type="text" class="form-control" id="floatingInput" placeholder="Enter name">
                <label for="floatingInput">Restaurant contact</label>
            </div>

            <button @click="updateResto()" class="btn btn-warning">Update Restaurant</button>


        </div>

    </div>

</template>

<script>

import axios from 'axios'
import Header from './Header.vue'
import { useRoute } from "vue-router"


export default {

    name: 'updateResto',
    data() {
        return {
            name: '',
            address: '',
            contact: '',
            id: ''
        }
    },
    mounted() {                        // mounted / setup
        const route = useRoute();
        const id = route.params.id;
        this.id = id;
        this.getOneRestoData(id);
    },
    components: {
        Header
    },
    methods: {
        async getOneRestoData(id) {

            let result = await axios.get(
                `http://localhost:3000/restaurant/${id}`
            );
            // console.log(result.data);

            this.name = result.data.name,
                this.address = result.data.address,
                this.contact = result.data.contact
        },
        async updateResto() {

            // console.log(this.id);
            // console.log(this.name, this.address,this.contact)


            let result = await axios.put(
                `http://localhost:3000/restaurant/${this.id}`
                ,
                {
                    "name": this.name,
                    "address": this.address,
                    "contact": this.contact
                }
            );

            // console.log(result);

            this.$router.push({ name: "Home" });

        }
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