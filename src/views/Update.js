import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';

const Edit = (props) => {
    const {id} = useParams();
    const history = useHistory();

    const [form, setForm] = useState({
        title: "",
        price: "",
        description: ""
    })
    const [errors, setErrors] = useState({});

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/products/${id}/edit`,form)
            .then(res=>{
                console.log(res.data);
                    history.push('/');
            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res=>{
                console.log(res.data);
                setForm(res.data);})
            .catch(err=>console.log(err));
    },[id])

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label><br/>
                <input name='title' type="text" value={form.title} onChange={onChangeHandler}/>
                <span>{errors.title && errors.title.message}</span>
            </p>
            <p>
                <label>Price: </label><br/>
                <input name='price' type="number" value={form.price} onChange={onChangeHandler}/>
                <span>{errors.price && errors.price.message}</span>
            </p>
            <p>
                <label>Description: </label><br/>
                <input name='description' type="text" value={form.description} onChange={onChangeHandler}/>
                <span>{errors.description && errors.description.message}</span>
            </p>
            <input type="submit"/>
        </form>
        </div>
    )
}

export default Edit;