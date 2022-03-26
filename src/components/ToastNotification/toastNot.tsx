import React from 'react'
import './toastNot.scss';

function ToastNot() {
    return (
        <>
            <div className="toast">
                <div className="toastContent">
                    <i className="fas fa-solid fa-check check"></i>
                    <div className="message">
                        <span className="text text-1">Success</span>
                        <span className="text text-2">Your saves has been saved</span>
                    </div>
                </div>
                <div className="progress">
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </>
    )
}

export default ToastNot