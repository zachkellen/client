import React, { useState } from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const ProductForm = (props) => {
    const history = useHistory();
    //keep track of what is being typed via useState hook
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
        console.log(form)
    }

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products/new', form)
            .then(res=>{
                console.log(res.data);
                if(res.data.results){
                    history.push('/');
                }
                else{
                    setErrors(res.data.err.errors);
                }
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label><br/>
                <input name='title' type="text" onChange={onChangeHandler}/>
            </p>
            <p>
                <label>Price: </label><br/>
                <input name='price' type="number" onChange={onChangeHandler}/>
            </p>
            <p>
                <label>Description: </label><br/>
                <input name='description' type="text" onChange={onChangeHandler}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm;