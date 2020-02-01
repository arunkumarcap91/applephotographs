import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga"
import rootReducer from "../../reducers";
import rootSaga from "../../sagas";
import { LocalStorageHelper } from "../../utilities";


const configureStore = () => {
    // const localStorageManager = new LocalStorageHelper();
    const sagaMiddleware = createSagaMiddleware()
    // const persistedState = localStorageManager.load(LocalStorageHelper.keys.PERSISTEDSTATE);
    const persistedState = { LOGIN: [{}] };
    const store = createStore(
        rootReducer,
        persistedState,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    // store.subscribe(() => {
    //     localStorageManager.store(LocalStorageHelper.keys.PERSISTEDSTATE, JSON.stringify(store.getState()));
    // });
    // console.log(store.getState());
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;