import React,{useState} from 'react'
import { connect } from 'react-redux'
import '../Css/Card.css'
import {deleteFood} from '../Redux/Actions/foodAction'

 function ImageCard(props) {
    const {food, deleteFood} = props
    const like = '👍'
    const dislike = '👎'
    const [likeState , setLike] = useState(false)

    const handleLike = () => {
        const config = {
            method:"PATCH",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({liked:!likeState})
        }
        
        fetch(`http://localhost:3000/foods/${food.id}`,config)
        .then(res => res.json())
        .then(data => {
            // console.log(data,'update')
            setLike(!likeState)
        })
        
    }

    const handleDelete = () => {
        const config = {
            method:"DELETE",
        }
        fetch(`http://localhost:3000/foods/${food.id}`,config)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            props.deleteFood(data.id)
        //     deleteFood(data.id)
        //    console.log(data,'deleted item')
        })
       
        
    }
    return (
        <div className='card_container'>
            <p>{food.title}</p>
            <img style={{height:'250px', width:'250px'}}  src={food.image}/>
            <button className='card_emoji' onClick={handleLike}>{likeState ? like : dislike}</button>
            <button className='card_emoji' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default connect(null,{deleteFood})(ImageCard)