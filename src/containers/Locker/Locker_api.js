import React, {Component} from "react";
import {connect} from "react-redux";
import Buttons from "./../../components/Buttons/Buttons";
import Display from "./../../components/Display/Display";
import './Locker.css';
import Eraser from "./../../components/Eraser/Eraser";

const arr = [];
const arrLength = 9;
for (let i = 0; i <= arrLength; i++) {
    arr.push(i);
}


class Locker extends Component {
    render() {
        console.log(this.props.digits);
        return <div className="wrapper">
            <Display
                digit={this.props.digits.replace(/\d/g, "*")}
            />
            {arr.map(currentVal => {
                return <Buttons
                    clicked={this.props.getInput}
                    val={currentVal}
                    key={currentVal}
                />
            })}
        </div>
    }
}

// passed global redux state as props's to our component
const mapStateToProps = state => {
    return {
        digits: state.digits
    }
};


// methods which have access to dispatch for updating state
const mapDispatchToProps = dispatch => {
    return {
        getInput: (value) => dispatch({type: "INPUT", value})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Locker);
