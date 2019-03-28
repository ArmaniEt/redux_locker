import React from "react";
import './Zero.css';

const Zero = (props) => {
    return <div className="zero_button_wrapper">
        <button onClick={() => props.clicked(0)} className="zero_button" type="button">0</button>
    </div>
};


export default Zero;