import React from 'react';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    // onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    // signOut,
  } from 'firebase/auth';


// import { db } from "../../Configs/firebase";
import Styles from "./auth_home.module.css"
import {useNavigate } from 'react-router';

// const firebaseAppConfig = getFirebaseConfig();
// initializeApp(firebaseAppConfig);

export const Buttons = ({content}) =>{
    
    const Navigate = useNavigate()
    

    let styles = {}
    if(content[1]==="Apple")
    {
        styles = {color:"black",fontWeight:"900"}
    }
    else
    {
        styles = {color:"rgb(73, 72, 72)",fontWeight:"100"}
    }

    const Auth = async (e) =>{
        console.log(e.target.childNodes[1])
        var provider = new GoogleAuthProvider();
       const add = await signInWithPopup(getAuth(), provider);
       if(add)
       {
            console.log("ADD",add.user.reloadUserInfo)
           Navigate("/home")
       }
       console.log("ADD",add.user.reloadUserInfo)
    
    }

    return<div className={Styles.signlogin} value={content[1]} onClick={(e)=>{Auth(e)}}>
        <img id={Styles.btnicon} src={content[0]} alt="" />
        <span style={styles}>Sign up with {content[1]} </span>
    </div>
}