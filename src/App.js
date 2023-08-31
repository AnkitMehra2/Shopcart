import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Contact from './Components/Contact';
import Product from './Components/Product';
import Home from './Components/Home';
import Navbar from './Components/Nav';
function App() {
  return (
    <div>
      <BrowserRouter>  
        <Header />
        <hr className='line'/>
        <Navbar/>
       
        
         <Routes>
          <Route path ="/" element ={<Home />} />
          <Route path ="/About" element ={<Product />} />
          <Route path ="/Contact" element ={<Contact />} />
          <Route path ="/Products" element ={<h1>this is path 4</h1>} />
        </Routes>
         
        </BrowserRouter> 
        

    </div>
  );
}

export default App;
