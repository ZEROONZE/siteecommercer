import logo from './logo.svg';
import './App.css';
import slide from './components/slide';
import './index.css';
import Slide from './assests/store_9.jpg'
import ProdutoF from './components/ProdutoF';
import fone1 from './assests/fone1.png'
import Form from './components/Form';


function App() {
  return (
<body>
    <header>
    <div className="App">
      <nav>
        <ul className='menu'>
          <li><a href='#' className='home'>Home</a></li>
          <li><a href='#'>Sobre</a>
               <ul className='submenu'>
               <li><a>VIRTUA</a></li>
               <li><a>VIRTUA + APP</a></li>
                <li><a>VIRTUA + BOX</a></li>
               <li><a>VIRTUA + CLARO TV HD</a></li>
               <li><a>VIRTUA + CLARO TV 4K</a></li>
              <li><a>VIRTUA + M + NETFLIX</a></li>
               </ul>
               </li>
          <li><a href='#'>Projetos</a>
          <ul className='submenu'>
               <li><a>CLARO TV APP</a></li>
               <li><a>CLARO TV BOX</a></li>
                <li><a>CLARO TV HD</a></li>
                
               <li><a>CLARO TV HD MAIS</a></li>
        
               </ul>
               </li>
         <li><a href='#'>contato</a></li>
       </ul>

    </nav>

   </div>
   </header>

   <div className='buscar'>
   <div id="divBusca">
   <input type="text" id="txtBusca" placeholder="Buscar..."/>
    <img src="lupa.png" height={25} id="btnBusca" alt="Buscar"/>
   </div>
   </div>

    
   <div>
    <img src={Slide} alt="slide" className="Slide" height="400%" width="900%"  />
  </div>

<ProdutoF/>


   </body>
  );
};

export default App;


