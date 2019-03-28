import React from 'react';
import './Eraser.css';


const Eraser = (props) => {
    return <div className="eraser_button_wrapper">
        <button className="eraser_button" onClick={() => props.onDelete()} type="button">
            >
        </button>
    </div>

};

export default Eraser;