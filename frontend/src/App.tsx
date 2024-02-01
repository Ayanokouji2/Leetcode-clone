import { useEffect } from 'react';
import './App.css';
import { Landing } from './Components/Landing';
import { Signin } from './Components/SignIn';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';

function App() {
    useEffect(() => {
        onAuthStateChanged(auth, function (user) {
            if (user) {
                console.log('This is the user: ', user);
            } else {
                // No user is signed in.
                console.log('There is no logged in user');
            }
        });
    }, []);
    return (
        <>
            <div>
                <Signin />
            </div>
        </>
    );
}

export default App;
