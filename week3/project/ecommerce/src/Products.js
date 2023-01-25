import React , {useEffect, useState}from 'react';
import Category from './category'
import SingleProduct from './SingleProduct'
import { Link } from 'react-router-dom';
import { useFavourites } from './Context';

const productUrl = 'https://fakestoreapi.com/products';
const Products = () => {
 
  const [title,setTitle] = useState('Products');
const {useFetch} = useFavourites();
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);


useFetch(productUrl,setLoading,setProduct)
 




if(loading){
return (
  <div className='loading'>
    <h1>
      Loading ...
    </h1>
   </div>
)}


  return (
    <>
   
    <div className="navbar">
      

        <Link to='/' className='home'>Home</Link>
        <Link to='/favorites' className='favs'>Favorites</Link>
    </div>
    <h1>{title}</h1>
<Category  />
     
 <div className='mother-container'>
{ products.map(product => (
<SingleProduct product={product}  key={product.id} />
))} 
          </div>
    </>
  )}

export default Products;