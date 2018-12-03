import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./issue.module.css";
import moment from "moment";

const Issue = ({ title, state, number, comments, user, created_at }) => {
    const timeCreatedUntilNow = moment(created_at).from(moment());
    const openedByText = `#${number} opened ${timeCreatedUntilNow} by ${user.login}`;
    return (
        <section className={styles.container}>
            <FontAwesomeIcon icon="box-open" color="green" />
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{openedByText}</div>
            </div>
        </section>
    );
};

export default Issue;
