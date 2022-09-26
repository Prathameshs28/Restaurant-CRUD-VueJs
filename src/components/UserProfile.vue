<template>
    <Header />
    <div class="profile">
        <h1>User Profile</h1>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">ID:{{userID}}</h5>
                <h6 class="card-subtitle">Name:{{userName}}</h6>
                <p class="card-text">Email:{{userEmail}}</p>

                <a class="btn btn-sm btn-warning me-2" @click="updateData()" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">Update
                    Profile</a>
                <a class="btn btn-sm btn-danger ms-2" @click="deleteProfile()">Delete Profile</a>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Update Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">


                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Update User Details
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">

                                    <div class="updateUser">
                                        <div class="form-floating mb-3">
                                            <input v-model="userName" type="text" class="form-control"
                                                id="floatingInput" placeholder="Enter name">
                                            <label for="floatingInput">Enter name</label>
                                        </div>

                                        <div class="form-floating mb-3">
                                            <input v-model="userEmail" type="email" class="form-control"
                                                id="floatingInput1" placeholder="name@example.com">
                                            <label for="floatingInput1">Email address</label>
                                        </div>

                                    </div>

                                    <div>
                                        <span v-if="userError"
                                            style="color:red;text-align: center;">{{userError}}</span>
                                    </div>

                                    <div>
                                        <span v-if="successMsg"
                                            style="color:green;text-align: center;">{{successMsg}}</span>

                                    </div>
                                    <div class="updateBtn">
                                        <button type="button" @click="updateUserInfo()"
                                            class="btn btn-warning">Update</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Update Password
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="changePass">
                                        <div class="form-floating mb-3">
                                            <input v-model="oldPass" type="password" class="form-control"
                                                id="floatingPassword" placeholder="Password">
                                            <label for="floatingPassword">Old Password</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input v-model="newPass" type="password" class="form-control"
                                                id="floatingPassword1" placeholder="Password">
                                            <label for="floatingPassword1">New Password</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input v-model="cPass" type="password" class="form-control"
                                                id="floatingPassword2" placeholder="Password">
                                            <label for="floatingPassword2">Confirm Password</label>
                                        </div>
                                        <div>
                                            <span v-if="passError"
                                                style="color:red;text-align: center;">{{passError}}</span>
                                        </div>
                                        <div>
                                            <span v-if="passUpMsg"
                                                style="color:green;text-align: center;">{{passUpMsg}}</span>
                                        </div>
                                        <div class="updateBtn">
                                            <button type="button" @click="updatePass()"
                                                class="btn btn-warning">Update</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

</template>

<script>

import Header from './Header.vue'
import axios from 'axios'

export default {
    name: 'UserProfile',
    components: {
        Header
    },
    data() {
        return {

            userData: '',
            userID: '',
            userName: '',
            userEmail: '',
            userPassword: '',
            oldPass: '',
            newPass: '',
            cPass: '',
            passError: '',
            userError: '',
            successMsg: '',
            passUpMsg: ''


        }
    },
    mounted() {

        this.userData = JSON.parse(localStorage.getItem('userInfo'));
        this.userID = this.userData[0].id;
        this.getOneRestoData(this.userID);
    },
    methods: {
        async getOneRestoData(id) {
            let result = await axios.get(
                `http://localhost:3000/users/${id}`
            );
            console.log(result.data);

            this.userName = result.data.name;
            this.userEmail = result.data.email;
            this.userPassword = result.data.password;
        },
        updatePass() {


            if (this.userPassword != this.oldPass) {
                this.passError = 'Old password not correct';
            } else if (this.userPassword === (this.newPass || ths.cPass)) {
                this.passError = 'Old password and new pass are same';
            } else if (this.newPass != this.cPass) {
                this.passError = 'New password and Confirm password are not same';
            } else {
                let result = axios.put(`http://localhost:3000/users/${this.userID}`,
                    {
                        "name": this.userName,
                        "email": this.userEmail,
                        "password": this.cPass
                    });

                console.log(result);
                this.getOneRestoData(this.userID);

                this.passUpMsg = 'Password Updated!!!'
            }
        },
        updateUserInfo() {
            if (this.userName != '' && this.userEmail != '') {

                let result = axios.put(`http://localhost:3000/users/${this.userID}`,
                    {
                        "name": this.userName,
                        "email": this.userEmail,
                        "password": this.userPassword
                    });

                console.log(result);
                this.getOneRestoData(this.userID);

                this.successMsg = 'Data Updated!!!'

            } else {
                this.userError = 'Name and email fields required !!!';
            }
        },
        updateData() {
            this.oldPass = '';
            this.newPass = '';
            this.cPass = '';
            this.successMsg = '',
                this.userError = '',
                this.passUpMsg = '',
                this.passError = ''
        },
        deleteProfile() {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {

                  axios.delete(`http://localhost:3000/users/${this.userID}`);
                    // console.log(result);

                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    );
                    localStorage.removeItem('userInfo');
                    this.$router.push('Login');
                }
            })
        }

    }

}
</script>

<style>
.profile {
    border: 5px skyblue solid;
    border-radius: 15px;
    margin: 50px auto;
    width: 500px;
    text-align: center;
    padding: 30px;

}

.card {
    margin: 30px auto;
}
</style>