import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import  heartDark from './assets/heart-solid.svg';
import  heartLight from './assets/heart-regular.svg';
import { useFavourites } from './Context';

    
const SingleProduct = ({ product}) => {
  const [fav, setFav] = useState(false);
  const {favorites,setFavorites} = useFavourites();


const handleFav = () => {
  setFav(prev => !prev)
  
}

  

useEffect(() => {
 if(fav) {
   setFavorites(prev => [...prev, { id:parseInt( product.id) }])
  } 
  if(!fav){

    setFavorites(prev => prev && prev.filter(fovored => fovored.id !== product.id))
  }


 
}
,[fav])
 


  const { id, title, image } = product;
  return (
    <div className='container'>

<div className='product'>
 <div className="heart-container">
 <img src={fav ? heartDark : heartLight} alt="heart" className='heart' onClick={()=> handleFav()}/>  

 </div>
        <Link to={`/category/${id}`} key={id}>
<img src={image} alt={title}  />

<p>{title}</p>


</Link>
</div>
    </div>
  )
}

export default SingleProduct