import React, { Component } from "react";
import "./styles/normalize.css";
import styles from "./App.module.scss";
import IssuesList from "./components/issues-list";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faComment, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

library.add(faComment, faBoxOpen);

class App extends Component {
    render() {
        return (
            <div className={styles.container}>
                <header>
                    <h1>React/Issues</h1>
                    <p>A declarative, efficient, and flexible JavaScript library for building user interfaces.</p>
                </header>
                <IssuesList />
            </div>
        );
    }
}

export default App;
