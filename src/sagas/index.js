import { fork, all } from "redux-saga/effects";
// import previousTestSuitesSaga from "./previousTestSuitesSaga";
// import liveTestSuiteSaga from "./liveTestSuiteSaga";
// import selectedTestCaseSaga from "./selectedTestCaseSaga";
// import currentLiveSuiteSaga from "./currentLiveSuiteSaga";
// import loginSaga from "./loginSaga";

export default function* rootSaga() {
    yield all([
        // fork(previousTestSuitesSaga),
        // fork(liveTestSuiteSaga),
        // fork(selectedTestCaseSaga),
        // fork(currentLiveSuiteSaga),
        // fork(loginSaga),
    ]);
}
