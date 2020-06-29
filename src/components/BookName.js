import React from 'react'

/* Component created to show name of the book which will be randomly passed to this component*/
export default function BookName(props) {
    return (
        <div className="container-fluid" style={{backgroundColor:"white"}}>
            {props.name}
        </div>
    )
}
