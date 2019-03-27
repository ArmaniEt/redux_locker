import React, {Component} from "react";
import {connect} from "react-redux";
import Buttons from "./../../components/Buttons/Buttons";
import Display from "./../../components/Display/Display";
import './Locker.css';

const arr = [];
const arrLength = 9;


class Locker extends Component {

    fromOneToNine = () => {
        for (let i = 0; i <= arrLength; i++) {
            arr.push(i);
        }

        return arr;
    };


    render() {
        return <div className="wrapper">
            <Display/>
            {this.fromOneToNine().map(currentVal => {
                return <Buttons
                    val={currentVal}
                    key={currentVal}
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