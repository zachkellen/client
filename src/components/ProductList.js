import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    return(
        <div>
            <h2>All Products: </h2>
            {props.products.map((item,i) =>
                <div key={i}>
                    <Link to={`/products/${item._id}`}>{item.title}</Link>
                </div>
            )}
        </div>
    )
}

export default ProductList;