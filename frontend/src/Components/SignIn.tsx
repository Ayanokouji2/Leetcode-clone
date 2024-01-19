import {getAuth, sendSignInLinkToEmail} from "firebase/auth";
import { useState } from "react";
import { app } from "../utils/firebase";


const actionCodeSettings = {
    url: 'https://localhost:5173',
    handleCodeInApp: true,
  };


export const Signin = () => {
    const auth = getAuth(app);
    const [email,setEmail] = useState("");


	async function onSignIn() {
		await sendSignInLinkToEmail(auth, email, actionCodeSettings)
			.then(() => {
                alert("Emeail sent");
				window.localStorage.setItem("emailForSignIn", email);
			})
			.catch((error) => {
                alert("Emeail Not sent");
				const errorCode = error.code;
				const errorMessage = error.message;
                
			});
	}
	return (
		<div>
            <input type="email" placeholder="Email" onChange={(e)=>{
                setEmail(e.target.value);
            }} />
			<button onClick={onSignIn}>Sign In</button>
		</div>
	);
};
