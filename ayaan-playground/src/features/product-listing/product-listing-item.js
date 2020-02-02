import React from 'react'
export default function ProductListItem(props){
    return <div className = 'product-list-item'>
        <h3>{props.product.title}</h3>
        <div>{props.product.desc}</div>
        <div>{props.product.price}</div>
        <button onClick = {()=> {props.addToCart(props.product)}}>Add to Cart</button>
    </div>
}