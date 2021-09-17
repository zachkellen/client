import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
    
const Detail = (props) => {
    const history = useHistory();
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const onDeleteHandler = (_id) => {
        console.log(_id);

        axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
            .then(res=>{
                console.log(res);
                props.setLoaded(prevState=> !prevState);
            })
            .catch(err => console.log(err));
        history.push('/')
    }
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/${product._id}/edit`}>EDIT</Link>
            <button onClick={()=>onDeleteHandler(product._id)}>x</button>
        </div>
    )
}
    
export default Detail;