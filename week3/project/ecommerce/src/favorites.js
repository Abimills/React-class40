
import React, { useState, useEffect } from 'react'

import { useFavourites } from './Context'
import Products from './Products';
import SingleItem from './singleItem';
import SingleProduct from './SingleProduct';
import  heartDark from './assets/heart-solid.svg';
import  heartLight from './assets/heart-regular.svg';
import { Link } from 'react-router-dom';


const Favorites = () => {
    const {useFetch,favorites,setFavorites} = useFavourites();
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [fav, setFav] = useState(false);
    const productUrl = 'https://fakestoreapi.com/products';


    useFetch(productUrl,setLoading,setProducts)

   let all = [];
products.map(item => {
        return favorites.map(fav => {
       if (fav.id === item.id){
         return all.push(item)
       }
       else{
        return;
       }
   })});
            
    const handleFav = (id) => {
        
        if (!fav) {
setFavorites(prev => {
    alert(`remove item id: ${id} from favorites`)
    return prev && prev.filter(fovored => fovored.id !== id)
})
        }}
          
   

return(
    <>
        <div className="navbar">


            <Link to='/' style={{ }} className='home'>Home</Link>
            <Link to='/favorites' className='favs'>Favorites</Link>
        </div>
    <div className='mother-container'>
       {
         all.length > 0  ?   all.map(product =>{
           product =   {...product,fav:true}
                   const {image,id,title,fav} = product
            return(
                <div className='container' key={id}>

                    <div className='product'>
                        <div className="heart-container">
                            <img src={fav ? heartDark : heartLight} alt="heart" className='heart' onClick={() => handleFav(id)} />

                        </div>
                        <Link to={`/category/${id}`} key={id}>
                            <img src={image} alt={title} />

                            <p>{title}</p>


                        </Link>
                    </div>
                </div> 
            )



         } )

         :

          ( <div className='empty-fav'>
               
                <h1> Your Favorites are empty</h1>
            </div>)
         

        }
    </div>
        </>
    )}
   
  


export default Favorites