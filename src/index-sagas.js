import SignupSaga from './components/Signup/sagas';
import LoginSaga from './components/Login/sagas';

export default function* IndexSaga () {
    yield [
        SignupSaga(),
        LoginSaga()
    ];
}
