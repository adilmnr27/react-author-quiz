import React from 'react'

export default function Continue(props) {
    return (
        <button className="btn btn-info" onClick={()=>props.continueClicked()}>Continue</button>
    )
}
