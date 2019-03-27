import React, {Fragment,Component} from 'react';
import './App.css';
import Locker from "./containers/Locker/Locker_api";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Locker/>
            </Fragment>
        );
    }
}

export default App;
