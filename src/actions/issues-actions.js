import * as issuesService from "../services/issues-service";

export const GET_ISSUES_IN_PROGRESS = "GET_ISSUES_IN_PROGRESS";
export const GET_ISSUES_SUCCESS = "GET_ISSUES_SUCCESS";
export const GET_ISSUES_ERROR = "GET_ISSUES_ERROR";

export function getIssues() {
    return dispatch => {
        dispatch({ type: GET_ISSUES_IN_PROGRESS });

        return issuesService.getIssues().then(response => {
            if (response.ok) {
                response
                    .json()
                    .then(response => {
                        dispatch({ type: GET_ISSUES_SUCCESS, response });
                    })
                    .catch(error => {
                        dispatch({ type: GET_ISSUES_ERROR, error });
                    });
            } else {
                dispatch({ type: GET_ISSUES_ERROR });
            }
        });
    };
}
