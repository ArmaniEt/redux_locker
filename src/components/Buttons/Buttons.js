import React from 'react';
import "./Buttons.css"


const Buttons = (props) => {
    return <div className="button_wrapper">
        <button className="button">{props.val}</button>
    </div>

};

export default Buttons;