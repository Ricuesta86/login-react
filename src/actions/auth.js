import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';


export const startLoginEmailPassword = (email,password) => {
    return (dispatch)=>{

        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(  ({user})=>{                
                dispatch(login(user.uid,user.displayName));
                dispatch(finishLoading());
            })
            .catch(e =>{
                console.log(e);
                dispatch(finishLoading());
            });
    }
}

export const startRegisterWithEmailPasswordName = ( email,password,nick )=>{
    return(dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then( async ({user})=>{
                await user.updateProfile({displayName:nick});
                dispatch(login(user.uid,user.displayName));
            })
            .catch(e =>{
                console.log(e);
            })
    }
}

export const startGoogleLogin = () =>{
    return(dispatch)=>{
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then(({user}) =>{
            dispatch(
                login( user.uid,user.displayName )
            )
        });
    }
}


export const login = ( uid, displayName )=> ({
    type:types.login,
    payload: {
        uid,
        displayName
    }
})