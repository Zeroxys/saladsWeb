<template>
  <div id="home">
    <div class="back-home"></div>
    <div class="container">
      <p>Construye tu ensalada con la cantidad de ingredientes que desees</p>
      <div class="list-options m-t">
        <ul>
          <li> 
            <a v-on:click="select()">ENSALADA CON 4 INGREDIENTES</a> 
          </li>
          <li>
            <a v-on:click="select()">ENSALADA CON 6 INGREDIENTES</a> 
          </li>
          <li>
            <a v-on:click="select()">ENSALADA CON 8 INGREDIENTES</a> 
          </li>
          <li>
            <a v-on:click="select()">ENSALADA CON 10 INGREDIENTES</a> 
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {
      
    },
    methods: {
      select () {

      this.$router.push({ name: 'SelectSalad' })
      }
    }
  }

</script>

<style>
  #home{
    height: 100vh;
    background-color: #F7F7F7;
  }
  .list-options ul{
    padding: 0;
    text-align: center;
  }
  .list-options ul li {
    margin: 15px 0;
    list-style: none;
    background-color: white;
    width: 100%;
    padding: 12px 0;
    border-radius: 4px;
  }
  .list-options ul li a{
    text-decoration: none;
    font-family: 'Helvetica';
    font-size: 14px;
    color: #333333;
    letter-spacing: 1.75px;
    line-height: 24px;
  }
  .container{
    width: 100;
    padding: 0 20px;
  }
  .m-t {
    margin-top: 5vh;
  }
  .container p {
    font-family: 'Helvetica';
    color: #333333;
    letter-spacing: 2px;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
  }
  .back-home{
    height: 25vh;
    width: 100%;
    background-image: url('../assets/img-home.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>