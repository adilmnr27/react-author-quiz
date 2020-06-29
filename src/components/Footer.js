import React from 'react'

export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="container-fluid text-center text-md-center">
                <span className="text-muted">{props.footer}</span>
            </div>
        </footer>
    )
}
