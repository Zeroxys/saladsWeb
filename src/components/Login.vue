<template>
  <div id="login">
    <section class="container">
      <h2>{{ title }}</h2>
      <div class="btns-login">
        <button type="submit" class="btn btn-primary" v-on:click="login()">LOGIN</button> 
        <p>No tienes una cuenta?</p>
        <button type="submit" class="btn btn-second m-t" v-on:click="register()">REGISTRAR</button> 
      </div>
    </section>
  </div>  
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        title: 'SALAD'
      }
    },
    methods: {
      login(){
        this.$router.push({ name: 'LoginUp' })
      },
      register(){
      this.$router.push({ name: 'Register' }) 
      }
    }
  } 
</script>

<style>
  .container{
    width: 100;
    padding: 0 20px;
  }
  .btns-login {
    margin-bottom: 10vh;
  }
  h2 {
    text-align: center;
    padding-top: 20vh;
    color: black;
    font-family: 'Helvetica';
    margin: 0;
    font-size: 3em;
  }
  .btns-login {
    margin-top: 20vh;
  }
  .btns-login p {
    text-align: center;
    font-family: 'Helvetica';
    margin-top: 4vh;
  }
  .btn {
    width: 100%;
    padding: 14px 0;
    font-size: 16px;
    letter-spacing: 1.5px;
    line-height: 24px;
    border-radius: 100px;
    border: 0;
  }
  .btn-primary {
    background-image: linear-gradient(-42deg, #FF8C2B 0%, #FF6322 100%);
    color: #FFFFFF;
  }
  .btn-second {
    background-color: white;
    border: 2px solid #FF8C2B;
    color: #FF8C2B;
  }
  .m-t {
    margin-top: 1vh;
  }

</style>
