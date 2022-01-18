import React from 'react'
import "../Css/Card.css"

export default function Bug(props) {
    const {bug} = props
    console.log(bug,'ddd')
    return (
        <div className='card'>
            <div className="primary_content">
                <p>{bug.title}</p>
                <p className='card_desc'>{bug.desc}</p>
                <p>{bug.priority}</p>
                <p>{bug.status}</p>
            </div>
            <div>
                <p>Created_by</p>
                <p>{bug.creator.username}</p>
            </div>
            <div>
                <p>Solved_by</p>
                <p>{bug.solver.username}</p>
            </div>
            
        </div>
    )
}
