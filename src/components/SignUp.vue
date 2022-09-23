
<template>
    <div class="sinup">
        <img class="resto-logo" src="../assets/resto-logo.webp" alt="logo">
        <h1 class="h2 mt-3 mb-3" style="color:#29465B;">Sign Up</h1>
        <div class="register">
            <div class="form-floating mb-3">
                <input v-model="name" type="text" class="form-control" id="floatingInput" placeholder="Enter name">
                <label for="floatingInput">Enter name</label>
            </div>

            <div class="form-floating mb-3">
                <input v-model="email" type="email" class="form-control" id="floatingInput"
                    placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input v-model="password" type="password" class="form-control" id="floatingPassword"
                    placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>
            <div>
                <span v-if="error" style="color:red">{{error}}</span>
            </div>
            <button @click="signUP()" class="btn btn-success mt-5">Sign Up</button>
            <p @click="goToLogin()" class="haveAcc mt-2">Already have account, login please</p>

            <!-- <router-link class="haveAcc mt-2" to="/login">Already have account, login please</router-link> -->

        </div>

    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            error:''
        }
    },
    methods: {
        async signUP() {
            // console.log(this.name,this.name,this.password)

            if(this.name != '' && this.email != '' && this.password != '' ){
                let result = await axios.post('http://localhost:3000/users',
                { "name": this.name, "email": this.email, "password": this.password });

                if (result.status == 201) {
                    console.log('Successfully signup please login');
                    this.$router.push({name:'Login'})
            }else{
                this.error = 'please enter all valid details';
            }

            // localStorage.setItem('userInfo', JSON.stringify(result.data));
            }else{
                // console.log('please enter all valid details');
                this.error = 'please enter all valid details';
            }           

        },
        goToLogin(){
            this.$router.push({name:'Login'});            
        }
    },
    mounted() {
            let localData = localStorage.getItem('userInfo');
            // localData = JSON.parse(localData);
            if(localData){
                this.$router.push({name:'Home'});
            }
 }
}
</script>


<style>
.sinup {
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

.register {
    margin: 10px auto;
    width: 400px;

}

.haveAcc{
    color: gray;
    text-decoration: underline;
    cursor: pointer;
}
</style>