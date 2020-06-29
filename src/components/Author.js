import React from 'react'

/* This component was created to render an Author for the user to select */
export default function Author(props) {
    return (
        <div className="container">
            <div className="row" style={{height:"100px"}}>
                {props.author}
            </div>
        </div>
    )
}


