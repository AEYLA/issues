import { getResponse } from "../utils/fetch-helper";

function getIssues() {
    const options = {
        method: "GET",
        actionKey: "getIssues"
    };
    return getResponse(options);
}

export { getIssues };
