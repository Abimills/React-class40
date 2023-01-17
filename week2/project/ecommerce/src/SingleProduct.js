import React from 'react'
import { Link } from 'react-router-dom'
const SingleProduct = ({product}) => {

const {id,title,image} = product;

  return (
    <div className='container'>

        <Link to={`/category/${product.id}`} key={product.id}>
<article className='product'>
<img src={image} alt={title}  />
<p>{title}</p>


</article>
</Link>
    </div>
  )
}

export default SingleProduct