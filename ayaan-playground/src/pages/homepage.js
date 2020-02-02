import React from 'react';
import ProductListing from './../features/product-listing/index.js'
import data from './../data/products.json'
export default function HomePage(props){
    return <div>
        <ProductListing products={data.products}></ProductListing>
    </div>
}