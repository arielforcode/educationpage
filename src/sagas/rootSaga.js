import {takeLatest} from 'redux-saga/effects'
import {actionTypes as usersActions} from '../features/users';

import tryUsersList from './users/list'

export default function* rootSaga() {
    yield takeLatest(usersActions.LIST_TRY, tryUsersList);
}