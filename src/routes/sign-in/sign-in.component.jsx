import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                <h1>
                    Sign In with Google Popup
                </h1>
            </button>
        </div>
    );
};

export default SignIn;