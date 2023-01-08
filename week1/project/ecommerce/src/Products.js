import React , {useState}from 'react'
import products from './fake-data/all-products.js'
import category from './fake-data/all-categories'
import SingleProduct from './SingleProduct'
const Products = () => {
const [myCategory,setMyCategory] = useState('');



  return (
    <>
    
    
 <h1>Products</h1>
    


            <div className="category">
           {category.map((singleCategory) => {


              return(  
              
              <h4 className={`${singleCategory.slice(6) == myCategory ? 'single-category extra' : 'single-category'}`}  onClick={() => setMyCategory(singleCategory.slice(6))}  >
                
                {singleCategory.slice(6) 
              
              
              }
            
              
              </h4>
              
              )

           })}


    </div>


    <div className='mother-container'>

 {!myCategory ? products.map(product => (
                 <SingleProduct product={product}  key={product.id} />
    
            )
        )  
        : 

          products.filter(cat => cat.category.toLowerCase() === myCategory )
          .map(product => 
         <SingleProduct product={product} key={product.id}  />
         
         )
    
             }
             
             
             
             
             </div>
    </>
  )
}

export default Products