import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/all")
            .then(res=>{
                console.log(res.data);
                setProducts(res.data.results);
                setLoaded(true);
            })
            .catch(err=>console.log(err))
    }, [loaded]);

    return (
        <div>
            <h2>Product Manager</h2>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList products={products} />}
        </div>
    )
}

