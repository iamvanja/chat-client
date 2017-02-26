import SignupSaga from './components/Signup/sagas';

export default function* IndexSaga () {
    yield [
        SignupSaga(),
    ];
}
