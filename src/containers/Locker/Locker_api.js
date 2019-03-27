import React, {Component} from "react";
import {connect} from "react-redux";

class Locker extends Component {
    render() {
        return <div>
            <h1>{this.props.digits}</h1>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        digits: state.digits
    }
};

const mapDispatchProps = dispatch => {
  return null;
};

export default connect(mapStateToProps)(Locker);