
<template>
    <div class="login">
        <img class="login-logo" src="../assets/login.png" alt="logo">
        <h1 class="h2 mt-3 mb-3" style="color:#29465B;">Log In</h1>
        <div class="loginform">
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

            <button @click="logIn()" class="btn btn-success mt-3">Login</button>

            <p @click="goToregister()" class="haventAcc mt-2">Not register yet, please register</p>

        </div>

    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {

        async logIn() {
            // console.log(this.email,this.password);
            if (this.email != '' && this.password != '') {
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                );
                // console.log(result)
                if (result.data.length != 0) {
                    this.$router.push({ name: 'Home' });
                    // console.log('successfully logged in');
                    localStorage.setItem('userInfo', JSON.stringify(result.data));

                } else {
                    this.error = 'Incorrect email or password!!'
                }
            } else {

                this.error = 'Incorrect email or password!!'

            }




        },

        goToregister() {
            this.$router.push({ name: 'SignUp' });
        }
    },
   
}
</script>


<style>
.login {
    text-align: center;
    width: 500px;
    margin: 20px auto;
    border: 5px lightgreen solid;
    padding: 20px;
    border-radius: 10px;

}

.login-logo {
    width: 100px;
    height: auto;
    border-radius: 50%;
}

.loginform {
    margin: 10px auto;
    width: 400px;

}

.haventAcc {
    color: gray;
    text-decoration: underline;
    cursor: pointer;
}
</style>