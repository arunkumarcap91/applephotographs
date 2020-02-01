export class LocalStorageHelper {
    static keys = {
        AUTHORIZATION: "Authorization",
        // AUTHORIZATION: "Token",
        COMPANY_ID: "companyId",
        FIRST_NAME: "firstName",
        LAST_NAME: "lastName",
        ROLE: "role",
        PERSISTEDSTATE: "Pesrsisted State"
    }
    store(key, data) {
        try {
            localStorage.setItem(
                key, data
            );
        } catch (error) {
            console.error("LocalStorage Manager :: ", error);
        }
    }
    load(key) {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            console.error("LocalStorage Manager :: ", error);
        }
    }
    getAccessToken() {
        return this.load(LocalStorageHelper.keys.AUTHORIZATION);
    }
    getCompanyId() {
        return this.load(LocalStorageHelper.keys.COMPANY_ID);
    }
}