<template>
  <div id="loginUp">
    <section class="container">
      <h2>{{ title }}</h2>
      <div class="content-form">
        <form action="">
          <input type="text" placeholder="Email" class="input-text" v-model="form.email">
          <input type="text" placeholder="Password" class="input-text m-t" v-model="form.password"> 
        </form>
         <button type="submit" class="btn btn-primary m-t-4" v-on:click="entrar()">ENTRAR</button>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
  name: 'loginUp',
  data () {
    return {
      title: 'LOGIN',
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    entrar(){
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
<style>
  .container{
    width: 100;
    padding: 0 20px;
  }
  h2 {
    text-align: center;
    padding-top: 20vh;
    color: black;
    font-family: 'Helvetica';
    margin: 0;
    font-size: 3em;
  }
  .content-form{
    margin-top: 20vh;
  }
  .m-t {
    margin-top: 2vh;
  }
  .m-t-4 {
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
  .input-text {
    border: 1px solid #E0E0E0;
    width: 100%;
    padding: 14px 0;
    padding-left: 12px;
    box-sizing: border-box;
  }
</style>

