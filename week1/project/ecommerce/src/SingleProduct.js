import React from 'react'

const SingleProduct = ({product}) => {

const {id,title,price,description,category,image,rating} = product;

  return (
    <div className='container'>

<article className='product'>

<img src={image} alt={title}  key={id}/>
<p>{title}</p>


</article>

    </div>
  )
}

export default SingleProduct