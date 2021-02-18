import React from 'react';
import ProductList from './ProductList';
import data from './data/products.json'

const HomePage = () => {
    return(<div>
                <h2>Home</h2>
                <ProductList products={data.products}/>
           </div>);
}

export default HomePage;