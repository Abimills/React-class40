import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SingleItem = () => {
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(false)
    
    const url = `https://fakestoreapi.com/products/${id}`;
    useEffect(() => {
        const fetcher = async () => {
            try {

                setLoading(true)
                const res = await fetch(url);
                const data = await res.json();
                setProduct(data);
                setLoading(false);
            }

            catch (error) {
                console.error(error);
            }}
        fetcher();


    }, [id])
   
    
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