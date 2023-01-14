import React , {useState}from 'react'
import products from './fake-data/all-products.js'

import Category from './category'
import SingleProduct from './SingleProduct'
const Products = () => {
const [myCategory,setMyCategory] = useState('');
const [title,setTitle] = useState('Products');



  return (
    <>
    
    
 <h1>{title}</h1>


<Category myCategory={myCategory} setMyCategory={setMyCategory} />
        


 <div className='mother-container'>
{!myCategory ? products.map(product => (

<SingleProduct product={product}  key={product.id} />))  
        : 
        
products.filter(cat => cat.category.toLowerCase() === myCategory )
.map(product => 
   <SingleProduct product={product} key={product.id}  />
         
         )} </div>
    </>
  )}

export default Products