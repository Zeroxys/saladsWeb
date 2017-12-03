<template>
  <div id="selectSalad">
    <div class="container">
      <header>
          <div class="number">
            <img src="../assets/ic.png">
            <p>2</p>
          </div>
          <p>Construye tu ensalada</p>
          <div class="search">
             <img src="../assets/ic_search.png">
          </div>
      </header>
      <div class="count">
        <p>200 Cal</p>
      </div>
      <section class="inst" v-on:click="pay()">
        <div class="img-select"></div>
        <p>SELECCIONA LOS INGREDIENTES DE TU ENSALADA</p>
      </section>
      <section class="list-in">
        <ul>
          <li>
            <a href="#">
              <div class="img-select tomate"></div>
              <div class="descrip">
                <p class="cls"> VERDURA </p>
                <p>Tomate</p>
                <div class="add-product">
                  <div class="ops">
                    <img src="../assets/ty.png" > 
                    <p class="cls siz">120 Caloria</p>
                  </div>
                  <div class="ops">
                    <img src="../assets/favorites.png" >
                    <p class="cls siz">Agregar</p>
                  </div>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div class="img-select lechuga"></div>
              <div class="descrip">
                <p class="cls"> VERDURA </p>
                <p>Lechuga</p>
                <div class="add-product">
                  <div class="ops">
                    <img src="../assets/ty.png" > 
                    <p class="cls siz">90 Caloria</p>
                  </div>
                  <div class="ops">
                    <img src="../assets/favorites.png" >
                    <p class="cls siz">Agregar</p>
                  </div>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div class="img-select aguacate"></div>
              <div class="descrip">
                <p class="cls"> VERDURA </p>
                <p>Aguacate</p>
                <div class="add-product">
                  <div class="ops">
                    <img src="../assets/ty.png" > 
                    <p class="cls siz">150 Caloria</p>
                  </div>
                  <div class="ops">
                    <img src="../assets/favorites.png" >
                    <p class="cls siz">Agregar</p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>  
</template>


<script>
  export default {
    name: 'selectSalad',
    methods: {
      pay(){
        this.$router.push({ name: 'Check' })
      },
    }
  } 
</script>

<style>
  .count{
    margin-bottom: 5vh;
  }
  .list-in ul {
    padding: 0;
  }
  .list-in ul li {
    list-style: none;
    background-color: white;
    margin-top: 16px;
  }
  .list-in ul li a {
    text-decoration: none;
  }
  .descrip{
    padding: 5px 10px;
    padding-bottom: 18px;
  }
  .add-product, .ops{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
  }
  .ops img {
    width: 14px;
    height: 11px;
    margin-top: 16px;
    margin-right: 4px;
  }
  .descrip p {
    text-align: left;
    font-size: 1.2em;
  }
  .inst p{
    padding: 4vh 0;
    background-color: white;
  }
  
  .descrip p.cls {
    margin-top: 12px;
    font-size: 13px;
    color: #9E9E9E;
    letter-spacing: 1px;
    line-height: 24px;
  }
  .descrip p.cls.siz {
    font-size: 18px;
  }
  .img-select {
    background-image: url('../assets/img-select.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 19vh;
  }
  .tomate {
    background-image: url('../assets/tomate.png');
  }
  .lechuga {
    background-image: url('../assets/lechuga.png');
  }
  .aguacate {
    background-image: url('../assets/aguacate.png');
  }
  #selectSalad{
    background-color: #F7F7F7;
    height: 100%;
    width: 100%;
  }
  header {
    padding: 5vh 0 1vh 0;
  }
  header, .number {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
  }
  .number img {
    width: 14px;
    height: 14px;
  }
  p {
    margin: 0;
    font-family: 'helvetica';
    font-size: 16px;
    color: #333333;
    letter-spacing: 1px;
    text-align: center;
  }
  .number p {
    margin-left: 12px;
  } 
  .container{
    width: 100;
    padding: 0 20px;
  }
</style>
