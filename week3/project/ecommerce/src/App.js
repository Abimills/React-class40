import React from 'react'
import Products from './Products'
import './style.css'
import { Route, Routes } from "react-router-dom";
import Category from './category';
import SingleItem from './singleItem';
import Favorites from './favorites';
const App = () => {
  
return (

 <Routes>
  <Route path='/' element={< Products />} />
  <Route path='/category' element={<Category />}   />
  <Route path='/category/:id' element={<SingleItem />}   />
  <Route path='/favorites' element={<Favorites />} />
 </Routes>
)
     

    


}

export default App
