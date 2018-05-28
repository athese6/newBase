import React, {Component} from 'react';
import Loadable from 'react-loadable';
import {connect} from 'react-redux';
import {setMessage} from './store/appReducer';
import autobind from 'autobind-decorator';
// import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';


const Button = styled.button.attrs({
    className: props => props.className
})`

`;

const AsyncComponent = Loadable({
    loader: () => import(/* webpackChunkName: "myNamedChunk" */ './SomeComponent'),
    loading: () => <div>loading...</div>,
    modules: ['myNamedChunk'],
});

class App extends Component {

    state = {
        response: ''
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({response: res.express}))
            .catch(err => console.log(err));
        if (!this.props.message) {
            this.props.updateMessage("Hi, I'm from client!");
        }
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    @autobind
    test(event) {
        console.log("teasfsfsf");
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="./logo.svg" className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p className="App-intro">{this.state.response}</p>
                <p className="App-intro">{process.env.REACT_APP_CLIENT_TYPE + ": " + process.env.NODE_ENV}</p>
                <div className="App-intro">
                    <AsyncComponent/>
                    <p>
                        Redux: {this.props.message}
                    </p>
                </div>
                <Button className={"waves-effect waves-light btn"} onClick={this.test}>{"버튼"}</Button>
            </div>
        );
    }
}

export default connect(
    ({app}) => ({
        message: app.message,
    }),
    dispatch => ({
        updateMessage: (messageText) => dispatch(setMessage(messageText)),
    })
)(App);
