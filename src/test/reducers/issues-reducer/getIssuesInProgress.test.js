import { GET_ISSUES_IN_PROGRESS } from "../../../actions/issues-actions";
import reducer, { initialState } from "../../../reducers/issues-reducer";

describe("issues reducer - GET_ISSUES_IN_PROGRESS", () => {
    it("should set state flags to in progress status", () => {
        const expectedState = Object.assign({}, initialState, {
            getIssuesInProgress: true,
            getIssuesError: false,
            getIssuesErrorMessage: undefined
        });
        const action = {
            type: GET_ISSUES_IN_PROGRESS
        };

        const newState = reducer(initialState, action);
        expect(newState).toEqual(expectedState);
    });
});
