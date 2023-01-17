import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import { Link } from 'react-router-dom'


const Category = () => {
    
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [myCategory, setMyCategory] = useState();
    const [filteredCat, setFilteredCat] = useState([]);
    
    const categoryFiltering = `https://fakestoreapi.com/products/category/${myCategory}`
    const url = 'https://fakestoreapi.com/products/categories';

   

useEffect(() => {
    const fetcher = async () => {
        try {

            setLoading(true)
            const res = await fetch(url);
            const data = await res.json();
            setCategory(data);
            setLoading(false);
        }

        catch (error) {
            console.error(error);
        }}
fetcher();
},[])
    useEffect(() => {

        const fetcherCat = async () => {
            if (myCategory) {


                try {

                    setLoading(true)
                    const res = await fetch(`https://fakestoreapi.com/products/category/${myCategory}`);
                    const data = await res.json();
                    setFilteredCat(data);
                    setLoading(false);
                }

                catch (error) {
                    console.error(error);
                }
    }}
        fetcherCat();

    }, [myCategory])

if(loading){
    return (
        <div className='loading'>
            <h1>
                Loading ...
            </h1>
        </div>
    )
}

  return (
<> 
      <div className="category">
          {category.map((category, index) => {

              return (
                  
                  <h4 className={`${category === myCategory ? 'single-category extra' : 'single-category'}`}
                      onClick={() => setMyCategory(category)} key={index}  >
                        
                  <Link to={'/category/'} className='cat-btn' key={index} >
                      {category} 
                       </Link>
                      </h4>

                 

)})}
</div>
                     
                     <div className='mother-container'>
          {filteredCat.map(product =>
              <SingleProduct product={product} key={product.id} /> )}
      </div>

         
  </>
  )}

export default Category