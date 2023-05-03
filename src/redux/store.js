import { createStore, combineReducers, applyMiddleware } from 'redux';

// Step 1: npm install redux-saga
// Step 2: import createSagaMiddleware
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
// Step 8: Import axios, takeEvery and put
import elementList from './reducers/element.reducer';
import rootSaga from './sagas/_root.saga';

// Step 4: create saga middleware
const sagaMiddleware = createSagaMiddleware();

// This is creating the store
// the store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    // This function is our first reducer
    // reducer is a function that runs every time an action is dispatched
    combineReducers({
        elementList,
        // More reducers go here
    }),
    // Step 5: add middleware to redux
    applyMiddleware(sagaMiddleware, logger),
);

// Step 6: add our root saga to our middleware
sagaMiddleware.run(rootSaga);

export default storeInstance;