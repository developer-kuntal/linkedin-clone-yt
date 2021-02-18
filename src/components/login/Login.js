import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../auth/firebase';
import { login } from '../../features/userSlice';
import './Login.css'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setprofilePic] = useState("")
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            }))
        }).catch((error) => alert(error));
    };
    const register = () => {
        if(!name) {
            alert('Please enter a full name');
        }
        auth.createUserWithEmailAndPassword( email, password )
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }))
            })
        }).catch((error) => alert(error));
    };

    return (
        <div className="login">
            <img src="https://blog-assets.hootsuite.com/wp-content/uploads/2025/05/linkedin-for-business-9-620x151.png" alt=""/>
            
            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name required if resistering" type="text" />
                <input value={profilePic} onChange={e => setprofilePic(e.target.value)}  placeholder="Profile picture Url" type="text"/>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form> 

            <p>Not a member?{" "} <span className="login__register" onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
