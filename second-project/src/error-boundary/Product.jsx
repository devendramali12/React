import React from 'react'

const Product = (props) => {
    console.log(props);// {product: 'Chair'}

    let {product} = props 

    if(product == "Chair"){
        throw new Error("Product not available.") 
    }
    
  return (
    <>
        <h2>Product - {product}</h2>
    </>
  )
}

export default Product