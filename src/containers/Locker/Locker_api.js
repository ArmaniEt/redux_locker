import React, {Component} from "react";
import {connect} from "react-redux";
import Buttons from "./../../components/Buttons/Buttons";
import Display from "./../../components/Display/Display";
import './Locker.css';
import Eraser from "./../../components/Eraser/Eraser";
import Confirm from "./../../components/Confirm/Confirm";
import Zero from "./../../components/Zero/Zero";

const arr = [];
const arrLength = 3;
for (let i = 1; i <= arrLength; i++) {
    arr.push(i);
}


class Locker extends Component {
    render() {
        return <div className="wrapper">
            {this.props.access_granted ?
                <p className="access_confirm_text">Access Granted</p>
                : null}
            {this.props.access_denied ?
                <p className="access_denied_text">Access Denied</p>

                : null}
            <Display
                digit={this.props.digits.replace(/\d/g, "*")}
            />
            <div>
                {arr.map(currentVal => {
                    return <Buttons
                        clicked={this.props.getInput}
                        val={currentVal}
                        key={currentVal}
                    />
                })}
            </div>
            <div>
                {arr.map((currentVal) => {
                    return <Buttons
                        clicked={this.props.getInput}
                        val={currentVal + 3}
                        key={currentVal + 3}
                    />
                })}
            </div>
            <div>
                {arr.map((currentVal) => {
                    return <Buttons
                        clicked={this.props.getInput}
                        val={currentVal + 6}
                        key={currentVal + 6}
                    />
                })}
            </div>
            <div>
                <Eraser
                    onDelete={this.props.deleteDigit}
                />
                <Zero
                    clicked={this.props.getInput}
                />
                <Confirm
                    confirmation={this.props.confirmPassword}
                />
            </div>
        </div>
    }
}

// passed global redux state as props's to our component
const mapStateToProps = state => {
    return {
        digits: state.digits,
        access_granted: state.access_granted,
        access_denied: state.access_denied
    }
};


// methods which have access to dispatch for updating state
const mapDispatchToProps = dispatch => {
    return {
        getInput: (value) => dispatch({type: "INPUT", value}),
        deleteDigit: () => dispatch({type: "DELETE"}),
        confirmPassword: () => dispatch({type: "COMPARE"})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Locker);
