import { GET_ISSUES_ERROR } from "../../../actions/issues-actions";
import reducer, { initialState } from "../../../reducers/issues-reducer";

describe("issues reducer - GET_ISSUES_ERROR", () => {
    it("should set state flags to error status and store the error message", () => {
        const expectedState = Object.assign({}, initialState, {
            getIssuesInProgress: false,
            getIssuesError: true,
            getIssuesErrorMessage: "sample error message"
        });
        const action = {
            type: GET_ISSUES_ERROR,
            error: "sample error message"
        };

        const newState = reducer(initialState, action);
        expect(newState).toEqual(expectedState);
    });
});
