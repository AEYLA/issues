import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getIssues } from "../actions/issues-actions";
import Issue from "./issue";

class IssuesList extends React.Component {
    render() {
        const issues = this.props.issuesList;
        return (
            <div>
                {issues &&
                    issues.map(issue => {
                        return <Issue {...issue} />;
                    })}
            </div>
        );
    }

    componentDidMount() {
        this.props.getIssues();
    }
}

const mapStateToProps = state => ({
    issuesList: state.issues.issuesList,
    getIssuesInProgress: state.issues.getIssuesInProgress,
    getIssuesError: state.issues.getIssuesError
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getIssues
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IssuesList);
