import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="error" />
            <h1>{props.user} , {props.age}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <button>view profile</button>
        </div>
    )
}

export default Card
