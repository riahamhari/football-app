import React from "react";
import './Modal.css'

const Modal = (props) => {
    console.log(props.show)
    if (!props.show) {
        return null
    }
    return (
        <div id="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}

export default Modal