<template>

  <router-view />
</template>

<script>


export default {
  name: 'App',
  mounted(){
      let localData = localStorage.getItem('userInfo');
      
        if (localData) {
            this.$router.push({ name: 'Home' });
        }
  }
}
</script>


