const shapeItems = [
    {
        id: 0,
        categoria: 'Entrada',
        name: 'Pão de Queijo',
        img: 'img/paodequeijo.png',
        price: 3.99,
        quantidade: 0
    },
    
    {
        id: 1,
        categoria: 'Entrada',
        name: 'Waffle com Sorvete"',
        img: 'img/waffle.png',
        price: 6.99,
        quantidade: 0
    },

    {
        id: 2,
        categoria: 'Entrada',
        name: 'Donuts',
        img: 'img/donuts.png',
        price: 9.99, 
        quantidade: 0
    },

    {
        id: 3,
        categoria: 'Prato Principal',
        name: 'Salmão Grelhado',
        img: 'img/salmaogrelhado.png',
        price: 39.99, 
        quantidade: 0
    },
    {
        id: 4,
        categoria: 'Prato Principal',
        name: 'Salada Caesar',
        img: 'img/caesarsalad.png',
        price: 29.99, 
        quantidade: 0
    },
    {
        id: 5,
        categoria: 'Prato Principal',
        name: 'Taco',
        img: 'img/taco.png',
        price: 19.99, 
        quantidade: 0
    },
    {
        id: 6,
        categoria: 'Prato Principal',
        name: 'Stake',
        img: 'img/churras.png',
        price: 29.99, 
        quantidade: 0
    },
    {
        id: 7,
        categoria: 'Prato Principal',
        name: 'DUCHEFE',
        img: 'img/bacon.png',
        price: 49.99, 
        quantidade: 0
    },
    {
        id: 8,
        categoria: 'Sobremesas',
        name: 'Brigadeiro',
        img: 'img/brigadeiros.png',
        price: 6.99, 
        quantidade: 0
    },
    {
        id: 9,
        categoria: 'Sobremesas',
        name: 'Sundae',
        img: 'img/sundae.png',
        price: 5.99, 
        quantidade: 0
    },
    {
        id: 10,
        categoria: 'Sobremesas',
        name: 'CheeseCake',
        img: 'img/cheesecake.png',
        price: 6.99, 
        quantidade: 0
    }
    

]

inicializarLista = () => {

    var containerShape = document.getElementById('produtos');
    shapeItems.map((val) => {
        containerShape.innerHTML += `
        
        <div class="item-caixa-produtos">
                <div><img src="`+val.img+`" alt="" class="img-produto"><div class="cut">
                <span class="span-categoria">`+val.categoria+`</span> 
                <span class="span-info">`+val.name+`</span>
                <span class="span-preco">R$ `+val.price+`</span> 
                </div>
                </div>
                <a key="`+val.id+`" ><button class="btn-addcart">Adicionar</button></a>
            </div> 
             
        
        
        `
    })
}  

inicializarLista(); 

/* Função atualizar carrinho */
atualizarCarrinho = () => {
    
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = ""; 
    let modalCarrinho = document.getElementById('modal-carrinho');
    
    shapeItems.map((val) => {
        if(val.quantidade > 0 ) {
            modalCarrinho.style.display = 'block';
            containerCarrinho.innerHTML += `
            <div class="carrinho-style">
            <img src="`+val.img+`" alt=""> 
            <div class="price-name-column">
            <span class="span-info">`+val.name+`</span>
            </div>
            
            
            <div class="price-box">
            <p>Preço</p>
            <p class="price-style" >`+val.price+`</p>
            </div>
            </div>
            
            
            ` 
        
        }
    })
} 

// BOTAO FECHAR PEDIDO
// var quantItem = 1;

// function mudarQuantidade () {
//      let spaceQuant = document.getElementById('qnt-box-item');
//      quantItem++
//      spaceQuant.innerHTML = quantItem 
    


// } 

//  function btnRemove () {
//      let spaceQuant = document.getElementById('qnt-box-item');
//      if (quantItem > 1) {
//         quantItem--
//          spaceQuant.innerHTML = quantItem
//      }
    
//  }

// const btnAdd = document.getElementById('btn-add-item');
// btnAdd.addEventListener('click', mudarQuantidade); 

//  const btnTeste = document.getElementById('btn-remove-item');
//  btnTeste.addEventListener('click', btnRemove)

// Ao clicar em Adicionar adiciona o item no carrinho
var links = document.querySelectorAll('a');
var btnUm = document.getElementsByTagName('button');

for(var i = 0; i < links.length; i++) {
    
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key');
        shapeItems[key].quantidade++;
        atualizarCarrinho();
        return false;
       
    })
} 



// Botoes no modal Add e remove


// function fechar modal 

closeModal = () => {
    let modalCarrinho = document.getElementById('modal-carrinho'); 

    modalCarrinho.style.display = 'none';
    
    
} 

let btnClose = document.getElementById('btn-close');
btnClose.addEventListener('click', closeModal)