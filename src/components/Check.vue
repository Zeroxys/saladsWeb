<template>
  <div id="check">
    <div class="container">
      <h2>CHECK</h2>
      <p> cantidad a pagar: $150.00 </p>
      <section>
        <form action="">
          <input type="text" class="input-text m-t" placeholder="Cantidad con la que desea pagar">  
          <input type="text" class="input-text m-t" placeholder="Teléfono">  
          <select name="" id="" class="input-text m-t">
            <option value="">Estado</option>
            <option value="">Tabasco</option>
            <option value="">Chiapas</option>
            <option value="">Veracruz</option>
          </select>
          <input type="text" class="input-text m-t" placeholder="Colonia">  
          <input type="text" class="input-text m-t" placeholder="Calle">  
          <input type="text" class="input-text m-t" placeholder="Número de casa o departamento">
          <textarea name="" class="input-text m-t" placeholder="Referencia del domicilio" id="" cols="20" rows="8"></textarea> 
          <button type="submit" class="btn btn-primary m-t-4 m-b-4">CREAR PEDIDO</button>  
        </form>     
      </section>
    </div>
  </div>  
</template>

<script>
  
</script>

<style>
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
  .m-t-4 {
    margin-top: 6vh;
  }
  .m-b-4 {
    margin-bottom: 6vh;
  }
  h2 {
    text-align: center;
    padding-top: 10vh;
    color: black;
    font-family: 'Helvetica';
    margin: 0;
    margin-bottom: 6vh;
    font-size: 3em;
  }

  p {
    font-size: 14px;
    color: #333333;
    letter-spacing: 0.88px;
  }

  .container{
    width: 100;
    padding: 0 20px;
  }
  .input-text {
    border: 1px solid #E0E0E0;
    width: 100%;
    padding: 14px 0;
    padding-left: 12px;
    box-sizing: border-box;
  }
  .m-t {
    margin-top: 2vh;
  }
</style>

