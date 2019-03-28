import React from "react";
import './Confirm.css';

const Confirm = (props) => {
    return <div className="confirm_button_wrapper">
        <button onClick={() => props.confirmation()} className="confirm_button" type="button">E</button>
    </div>
};


export default Confirm;