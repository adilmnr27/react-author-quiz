import React from 'react'

export default function Continue(props) {
    return (
        <button className="btn" onClick={()=>props.continueClicked()}>Continue</button>
    )
}
