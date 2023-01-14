import React from 'react'
import category from './fake-data/all-categories'

const Category = ({myCategory,setMyCategory}) => {
  return (
      <div className="category">
          {category.map((singleCategory, index) => {

             const categoryTitle = singleCategory.slice(6);
              return (

                  <h4 className={`${categoryTitle === myCategory ? 'single-category extra' : 'single-category'}`}
                      onClick={() => setMyCategory(categoryTitle)} key={index} >
                      {categoryTitle} </h4>

              )

          })}


      </div>
  )
}

export default Category