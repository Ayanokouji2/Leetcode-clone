import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    getAdditionalUserInfo
} from 'firebase/auth';
import { app } from '../utils/firebase';

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const onSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (!credential) return;
            const token = credential.accessToken;
            const user = result.user;
            const addInfo = getAdditionalUserInfo(result);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

            if (errorCode || errorMessage || credential || email)
                console.log(errorCode || errorMessage || credential);
        });
};
export const Signin = () => {
    return (
        <div>
            <button onClick={onSignInWithGoogle}>Sign In With Google</button>
        </div>
    );
};
