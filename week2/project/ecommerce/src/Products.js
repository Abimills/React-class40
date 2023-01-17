import React , {useEffect, useState}from 'react';
import Category from './category'
import SingleProduct from './SingleProduct'
const productUrl = 'https://fakestoreapi.com/products';
const Products = () => {
 
  const [title,setTitle] = useState('Products');
  const [products,setProduct] = useState([]);
  const [loading,setLoading] = useState(false);



 

 
useEffect(() => {
  const fetcher = async () => {
    
    try {
      setLoading(true)
      const res = await fetch(productUrl);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    }

    catch (error) {
      console.error(error);
    }
  }
fetcher();
},[])


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