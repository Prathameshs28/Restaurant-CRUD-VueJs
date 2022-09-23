
<template>
    <Header />
    <h1 class="h1 mt-3" style="text-align:center;color:#151B54">Restaurant List</h1>

    <div class="row row-cols-1 row-cols-md-4 g-4 restoList">

        <div v-for="(item,i) in restoList" :key="i" class="col">
            <div class="card text-dark bg-light">
                <div class="card-body">
                    <h5 class="card-title">{{i+1}} : {{item.name}}</h5>
                    <p class="card-text">ID: {{item.id}}</p>
                    <p class="card-text">Address: {{item.address}}</p>
                    <p class="card-text">Contact: {{item.contact}}</p>
                </div>
                <div class="card-footer bg-transparent btngrp">
                    <button @click="UpdateResto(item.id)" class="btn btn-sm btn-warning me-3">Update</button>
                    <button @click="deleteResto(item.id)" class="btn btn-sm btn-danger ms-3">Delete</button>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {

    name: 'Home',
    data() {
        return {
            restoList: []
        }
    },
    components: {
        Header
    },

    mounted() {

        let localData = localStorage.getItem('userInfo');
        // localData = JSON.parse(localData);
        if (!localData) {
            this.$router.push({ name: 'SignUp' }); 
        }

        this.getRestoList();
    },
    methods: {

        async getRestoList() {
            let result = await axios.get(
                `http://localhost:3000/restaurant`
            );
            this.restoList = result.data;

        },
        UpdateResto(id){
            // console.log(id);
            this.$router.push({ name: 'updateResto',params: { id: id } }); 
        },
        async deleteResto(id) {

            // console.log(id);

            let result = await axios.delete(
                `http://localhost:3000/restaurant/${id}`
            );
            this.getRestoList();

        }
    }


}
</script>


<style>
.restoList {
    margin: 20px auto;
    text-align: center;
}

.btngrp {
    display: flex;
    flex-direction: row;
    margin: 5px auto;

}
</style>