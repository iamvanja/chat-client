import SignupSaga from './components/Signup/sagas';
import LoginSaga from './components/Login/sagas';
import MessageSaga from './components/Messages/sagas';

export default function* IndexSaga () {
    yield [
        SignupSaga(),
        LoginSaga(),
        MessageSaga(),
    ];
}
