import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId + '/delete')
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    return(
        <div>
            <h2>All Products: </h2>
            {props.products.map((item,i) =>
                <div key={i}>
                    <Link to={`/products/${item._id}`}>{item.title}</Link>
                    <button onClick={(event)=>{deleteProduct(item._id)}}>DELETE</button>
                </div>
            )}
        </div>
    )
}

export default ProductList;