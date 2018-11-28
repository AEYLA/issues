const domain = "https://api.github.com/";

const endpoints = {
    getIssues: "repos/facebook/react/issues"
};

export function getResponse({ method, actionKey }) {
    const endpoint = `${domain}${endpoints[actionKey]}`;
    const requestOptions = {
        method,
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    };

    return fetch(endpoint, requestOptions);
}
