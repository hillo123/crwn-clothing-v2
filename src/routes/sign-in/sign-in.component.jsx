import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
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