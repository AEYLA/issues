import React, { Component } from "react";
import "./App.css";
import IssuesList from "./components/issues-list";

class App extends Component {
    state = {};

    render() {
        const issuesList = this.state.issuesList;
        return <div className="App">{JSON.stringify(issuesList)}</div>;
    }

    componentDidMount() {
        const requestOptions = {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        };
        fetch("https://api.github.com/repos/facebook/react/issues", requestOptions)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ issuesList: responseJson });
            });
    }
}

export default App;
