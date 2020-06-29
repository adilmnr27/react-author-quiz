import React from 'react'

export default function Header(props) {
    return (
        <div className="container">
            <div className="col-10 -1 jumbotron">
            <h1>{props.header}</h1> 
             </div>
        </div>
    )
}
