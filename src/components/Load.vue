<template>
  <div class="load">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'load',
  data () {
    return {
      title: 'SALAD'
    }
  },
  created() {
    setTimeout( () => {
      this.$router.push({ name: 'Login' })
    }, 1000)
  }
}
</script>
<style scoped>
  .load {
    display: flex;
    flex-direction: column;
    align-items:center;
    background-image: url('../assets/background-load.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
  }
  h1 {
    padding-top: 20vh;
    color: white;
    font-family: 'Helvetica';
    margin: 0;
    font-size: 3em;
  }
</style>
