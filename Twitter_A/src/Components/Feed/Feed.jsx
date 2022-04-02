import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollIcon from '@mui/icons-material/Poll';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import Style from './Feed.module.css';
import axios from "axios";

import { useState } from "react";
import { db } from '../../Configs/firebase';

export  function Feed() {
   const state = {
      selectedFile: null,
   }


   const  [ tweetMsg, setTweetMsg ] = useState("");
   const [tweetImage, setTweetImage] = useState("");

   const handleTweet = (e) => {
      e.preventDefault();

      db.collection("posts").add({
       
        displayName: "Rafeh Qazi",
        username: "cleverqazi",
        verified: true,
        text: tweetMsg,
        image: tweetImage,
        avatar:
          "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
        
       
      });
      setTweetMsg("")
      setTweetImage("")
   } 
   
   // File Selecter 

   // const  fileSelectHandler = (event) => {
   //    console.log(event.target.files[0])
   // }

   // const handleTweet = () => {
      
   //    axios.post('')
   // }
   

  return (
 
    <div id={Style.feedcontainer}>
   {/* <ElevateAppBar className="static_header"/> */}
   <div className={Style.fixedBar}>
      <h3>Home</h3>
   </div>
        <div className={Style.tweetDiv}>
        
            <div><Avatar alt="User Profile" src="https://mui.com/static/images/avatar/2.jpg" style={{height:"30%", width:"50%", margin:"auto", marginTop:"30%"}}/></div>
            <div className={Style.tweetDiv2}>
               <form>
                <div >
                 <input  className = {Style.tweetInput}  onChange={(e) => setTweetMsg(e.target.value)} type="text" value={tweetMsg}  placeholder="What's happening? " />
                 {/* <input type="text"  value={tweetImage} ref={fileInput => this.fileInput = fileInput}  /> */}
                </div>


                <div>
                    <Button onClick={() => this.fileInput.click()}>T</Button>
                     <IconButton size="large" aria-label="Image Selector" color="inherit"  >
                        <InsertPhotoOutlinedIcon style={{color:"#1d9bf0"}}/>
                     </IconButton>
                     <IconButton size="large" aria-label="GIF Selector" color="inherit">
                        <GifBoxOutlinedIcon  style={{color:"#1d9bf0"}}/>
                     </IconButton>
                     <IconButton size="large" aria-label="Create Poll" color="inherit">
                        <PollIcon  style={{color:"#1d9bf0"}}/>
                     </IconButton>
                     <IconButton size="large" aria-label="emoji" color="inherit">
                        <SentimentSatisfiedAltIcon style={{color:"#1d9bf0"}}/>
                     </IconButton>
                     <IconButton size="large" aria-label="Location" color="inherit">
                        <FmdGoodOutlinedIcon style={{color:"#1d9bf0"}}/>
                     </IconButton>
                    <Button variant="contained" className= {Style.tweetBtn} onClick={handleTweet} type="submit" >Tweet</Button>
               
                </div>
                </ form>
            </div>
        </div>


    </div>
  );
}
