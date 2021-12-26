import React from 'react'

const Overlay = (props) => {
    return (
        <div className={`overlay ${props.isOverlayShow ? 'show-overlay' : ''}`} 
            onClick={props.hideContainer}>
        </div>
    )
}

export default Overlay
