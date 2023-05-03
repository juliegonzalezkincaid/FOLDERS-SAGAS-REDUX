// responsible for passing info to all the sagas
import { all } from 'redux-saga/effects';
import elementSaga from './element.saga.js';

// root saga bundles all other sagas together

export default function* rootSaga() {
    yield all([
        elementSaga(),
        //other sagas would go here
    ]);
}