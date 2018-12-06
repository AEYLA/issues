import { GET_ISSUES_SUCCESS } from "../../../actions/issues-actions";
import reducer, { initialState } from "../../../reducers/issues-reducer";
import { sampleIssues } from "../../test-data/issues-stub";

describe("issues reducer - GET_ISSUES_SUCCESS", () => {
    it("should set state flags to success status and store response in issuesList", () => {
        const expectedState = Object.assign({}, initialState, {
            getIssuesInProgress: false,
            getIssuesError: false,
            getIssuesErrorMessage: undefined,
            issuesList: sampleIssues
        });
        const action = {
            type: GET_ISSUES_SUCCESS,
            response: sampleIssues
        };

        const newState = reducer(initialState, action);
        expect(newState).toEqual(expectedState);
    });
});
