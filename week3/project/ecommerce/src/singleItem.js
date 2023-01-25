import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import heartDark from './assets/heart-solid.svg';
import heartLight from './assets/heart-regular.svg';
import { useFavourites } from './Context';

const SingleItem = () => {
    const {id}= useParams();
    const url = `https://fakestoreapi.com/products/${id}`;
    const [product,setProduct] = useState([]);
    const [newFav,setNewFav] =useState(false);
    const [loading,setLoading] = useState(false);
    const { favorites, setFavorites,useFetch} = useFavourites();
    useFetch(url,setLoading,setProduct);
 
    
    
    useEffect(() => {
    const foundValue = favorites.find(item => item.id === parseInt(id))
    if (!foundValue) {
        setNewFav(false)

    }
    else if (foundValue) {
        setNewFav(true)
    }
},[])
useEffect(() => {

if(newFav){
    const check= favorites.find(item => item.id === parseInt(id));
    if(check){
        return;
    }
    else{
        setFavorites(prev => [...prev,{id:parseInt(id)}])
    }
}

    if(!newFav){
        setFavorites(favorites.filter(item => parseInt(item.id) !== parseInt(id) ))
    }
    
},[newFav])


function handleClick(id){
    setNewFav(prev => !prev);
    }
    

    if (loading) {
        return (
            <div className='loading'>
                <h1>
                    Loading ...
                </h1>

            </div>
        )
    }
    if(product){
        const {image , title,description,price,category} = product;
        return (
<>
            <div className='single-items'>
                
<div className="single-heart-container">

                <img src={!newFav  ? heartLight: heartDark  } alt={title}  className='single-heart' onClick={() => handleClick(id)}/>
</div>
                <div className='image-container'>
                <img src={image} alt={title} />

            <h3>Name: {title}</h3>
                <p>Price: {price}</p>
                </div>

 <div className='description-container'>
    <h2>{category}</h2>
    <p> {description}</p>

</div>
</div>
<Link to={'/'} className='btn'> back Home</Link>
            </>
        )}}
        

export default SingleItem