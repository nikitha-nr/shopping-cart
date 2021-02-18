//This component is used to display single products

import React from 'react'

const ProductListItem = (props)=>{
const thisItemInCart = props.cart.filter(item=>item.id===props.product.id)[0]
return <div className="product-list-item"> 
        <h3>{props.product.name} </h3>
        <img height={100} alt={"hello"} title={props.product.name} src={`/products/${props.product.image}`}/> 
        <div>{props.product.description}</div>
        <div>${props.product.price}</div>
        <div>
            <button onClick={()=>props.addToCart(props.product)}>Add to Cart({(thisItemInCart && thisItemInCart.quantity) || 0})</button>
        </div>
    </div>

}



export default ProductListItem;