import { GET_ISSUES_IN_PROGRESS, GET_ISSUES_SUCCESS, GET_ISSUES_ERROR } from "../actions/issues-actions";

export const initialState = {
    getIssuesInProgress: false,
    issuesList: [],
    getIssuesError: false,
    getIssuesErrorMessage: undefined
};

function issues(state = initialState, action = {}) {
    switch (action.type) {
        case GET_ISSUES_IN_PROGRESS:
            return Object.assign({}, state, initialState, {
                getIssuesInProgress: true,
                getIssuesError: false,
                getIssuesErrorMessage: undefined
            });
        case GET_ISSUES_SUCCESS:
            return Object.assign({}, state, {
                getIssuesInProgress: false,
                getIssuesError: false,
                getIssuesErrorMessage: undefined,
                issuesList: action.response
            });
        case GET_ISSUES_ERROR:
            return Object.assign({}, state, initialState, {
                getIssuesInProgress: false,
                getIssuesError: true,
                getIssuesErrorMessage: action.error
            });
        default:
            return state;
    }
}

export default issues;
