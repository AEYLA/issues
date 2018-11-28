import React, { Component } from "react";
import "./normalize.css";
import "./App.css";
import IssuesList from "./components/issues-list";

class App extends Component {
    render() {
        return <IssuesList />;
    }
}

export default App;
