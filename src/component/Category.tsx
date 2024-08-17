import React from 'react'

const Category = () => {
    const categories =['Fiction', 'Non-Fiction', 'Mystery', 'History']

    
  return (
    
        <div className="categories">
               <h2>Choose a Category</h2>
               {categories.map((category) => (
                   <button key={category}>{category}</button>
               ))}
        </div>
  )
}

export default Category
