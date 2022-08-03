import Form from "./Form";

const ProdutoF = () => { 

return(

<div>
<section class="vendas" id="vendas">

      <div class="card">
        <img src="/fone1.png" alt="slide" className="Slide" />
        <h1 class="price2">Fone de Ouvidos</h1>
        <p class="price">R$ 99.99</p>
        <p>Headset Gamer Acer.....</p>
        <p><button class="button"><a href={Form}>COMPRAR</a></button></p>
      </div>
  
       <div class="card">     
        
       <img src="/fone1.png" alt="slide" className="Slide" />
           <p class="price">R$ 99.99</p>
           <p>Headset Gamer Acer......</p>
           <p><button class="button" href='{Form}'>COMPRAR</button></p>
        </div>
      
        <div class="card">
        
        <img src="/fone1.png" alt="slide" className="Slide" />
            <p class="price">R$ 99.99</p>
            <p>Headset Gamer Acer.....</p>
            <p><button class="button" href='./Form'>COMPRAR</button></p>
        </div>

    </section>
</div>
);
};

export default ProdutoF;

