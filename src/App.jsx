import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Food from './Component/Food.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Drink from './Component/Drink.jsx';
import About from './Component/About.jsx';
import PageNotFound from './Component/PageNotFound.jsx';
import HomePage from './Component/HomePage.jsx';
import Body from './Component/Body.jsx';
import Menu from './Component/Menu.jsx';
import Recipes from './Component/Recipe.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<HomePage />}/>
       <Route path="/HomePage" element={<HomePage/>}/> 
       <Route path="/Menu" element={<Menu/>} />
       <Route path="/Recipe" element={<Recipes/>}/>
       <Route/>
       <Route path="/Food" element={<Food />}/>
       <Route path="/Drink" element={<Drink />}/>
       <Route path="/About" element={<About />}/>
       <Route path="/*" element ={<PageNotFound/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
