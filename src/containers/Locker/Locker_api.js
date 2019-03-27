import React, {Component} from "react";
import {connect} from "react-redux";
import Number from "./../../components/Number/Number";

let oneToNine = new Array(9);
for (let i = 1; i <= oneToNine.length; i++){
    oneToNine.push(i);
}

class Locker extends Component {
    render() {
        return <div className="display">
            {oneToNine.map((currentVal) => {
                return <Number
                    clicked={() => this.props.inputDigit(currentVal)}
                    value={currentVal}
                />

            })}
        </div>
    }
}


const mapStateToProps = state => {
    return {
        digits: state.digits
    }
};

const mapDispatchProps = dispatch => {
  return {
      inputDigit: (value) => dispatch({type: "INPUT", value})
  }
};

export default connect(mapStateToProps, mapDispatchProps)(Locker);