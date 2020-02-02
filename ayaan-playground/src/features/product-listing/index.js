import React from  'react'
import ProductListItem from './product-listing-item.js'
import {connect } from 'react-redux'

function ProductListing(props){
    return <div className = 'product-listing'>
        {
            props.products.map(product =>
                <ProductListItem product= {product} addToCart = {props.addToCart}></ProductListItem>
          )
        }
    </div>
}

function mapStateToProps(state){
return {
    cart:state.cart
}
}

function mapDispatchToProps(dispath){
    return{
        addToCart: (item)=> {
            dispath({ 
                type: 'ADD', payload :item
            })
        },
        removeFromCart: (item) =>{
            dispath({
                type: 'REMOVE', payload:item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)