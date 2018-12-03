import React, { Component } from "react";
import "./normalize.css";
import "./App.css";
import IssuesList from "./components/issues-list";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

library.add(faSpinner, faBoxOpen);

class App extends Component {
    render() {
        return <IssuesList />;
    }
}

export default App;
