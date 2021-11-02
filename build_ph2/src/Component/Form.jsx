import React,{useState} from 'react'
import { connect } from 'react-redux'
import {addFood} from '../Redux/Actions/foodAction'
function Form(props) {
    const {addFood} = props
    const [food, setFood] = useState({
        title:'',
        image:''
    })

    const onChange = event => {
        setFood({
            ...food,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = event => {
        event.preventDefault();
        const config = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(food)
        }
        fetch('http://localhost:3000/foods',config)
        .then(res => res.json())
        .then(props.addFood)
    }
    return (
       <form onSubmit={onSubmit}>
           <label  for='title' > Title</label><br/>
           <input  type='text' name='title' value={food.title} onChange={onChange}/><br/>
           <label  for='image' > Image</label><br/>
           <input  type='text' name='image' value={food.image} onChange={onChange}/><br/>
           <input  type='submit' value='Create Food'/>
       </form>
    )
}

export default connect(null,{addFood})(Form)

