import { sampleIssues } from "./issues-stub";

export const sampleState = {
    issues: {
        getIssuesInProgress: false,
        getIssuesError: false,
        getIssuesErrorMessage: undefined,
        issuesList: sampleIssues
    }
};
