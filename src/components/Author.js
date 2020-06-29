import React from 'react'

/* This component was created to render an Author for the user to select */
export default function Author(props) {
    var [highLightColor, setHighLightColor] = React.useState("white")
    return (
        <div className="container">
            <div
                className="row turn"
                onClick={() => { setHighLightColor(props.getHighlightColor(props.author)) }}
                style={{ height: "200px" }, { backgroundColor: highLightColor }}>
                {props.author}
            </div>
        </div>
    )
}


