import { LocalStorageHelper } from "./local-storage-helper";
export class APIError extends Error {
    constructor(errorObj, message) {
        super(message);
        this.errorObj = errorObj;
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error()).stack;
        }
    }
}

export class APIHelper {
    static GET = "GET";
    static POST = "POST";
    static getGenericHeaders() {
        const localStorageHelper = new LocalStorageHelper();
        const authorization = localStorageHelper.load(LocalStorageHelper.keys.AUTHORIZATION);
        return {
            "Authorization": `${authorization}`
        };
    }
    static baseRequest(method, endpoint, { requestBody = null, contentType = "application/json", headers = {}, throwError = true }, saveToken = false) {

        let options = {
            method: method,
            headers: {
                "Content-Type": contentType,
                "Accept": "application/json",
                ...headers
            }
        };
        options.body = (contentType === "application/json" && requestBody)
            ? JSON.stringify(requestBody)
            : requestBody;
        return fetch(endpoint, options)
            .then(async (response) => {
                if (response.ok) {
                    if (saveToken) {
                        const localStorageHelper = new LocalStorageHelper();
                        const authorization =  response.headers.get('Authorization');
                        // const authorization = response.headers.get('Token');
                        localStorageHelper.store(LocalStorageHelper.keys.AUTHORIZATION, authorization);
                    }
                    return response.json();
                } else {
                    /*
                     * Fetch has to handle 400 status code
                     */
                    let errorMessage = "";
                    try {
                        const error = await response.json();
                        errorMessage = error;
                    } catch (err) {
                        errorMessage = "failed";
                    }
                    throw new APIError(response, errorMessage);
                }
            }, function (error) {
                console.log("Error :: ", options);
                if (throwError) {
                    throw new APIError(error.response, error);
                } else {
                    return console.error("API Error generated ::: ", error);
                }
            });
    }
}