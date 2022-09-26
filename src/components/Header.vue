
<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #728FCE;">
        <div class="container-fluid">
            <a class="nav-link active ak" @click="goToHome()" href="#">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">

                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                        <a class="nav-link ak" @click="goToProfile()" href="#">My Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ak" @click="addResto()" href="#">Add Restaurant</a>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link ak" @click="logout()" href="#">Logout</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'Header',
    methods: {
        logout() {
            localStorage.removeItem('userInfo');
            this.$router.push({ name: 'Login' });

        },

        addResto() {
            this.$router.push({ name: 'AddResto' });
        },
        goToHome() {
            this.$router.push({ name: 'Home' });
        },
        goToProfile() {
            this.$router.push({ name: 'UserProfile' });
            
        }
    }

}
</script>

<style>
.ak {
    color: white;
}
</style>