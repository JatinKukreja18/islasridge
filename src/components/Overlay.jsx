import React from 'react'

const Overlay = (props) => {
    return (
        <div className={`overlay ${props.isOverlayShow ? 'show-overlay' : ''}`} 
            onClick={props.hideContainer} aria-hidden="true">
        </div>
    )
}

export default Overlay
