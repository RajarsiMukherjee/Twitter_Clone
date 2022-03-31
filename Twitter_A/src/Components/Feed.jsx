import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollIcon from '@mui/icons-material/Poll';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import './Feed.css';
 import { ElevateAppBar } from './AppNav';

export  function FeedCard() {
  return (
 
    <div id="feedcontainer">
   <ElevateAppBar/>
        <div className='tweetDiv'>
        
            <div><Avatar alt="User Profile" src="https://mui.com/static/images/avatar/2.jpg" style={{height:"35%", width:"65%", margin:"auto", marginTop:"30%"}}/></div>
            <div className='tweetDiv2'>
                <div >
                 <input  className = "tweetInput" type="text"  placeholder="What's happening? " />
                 
                </div>

                <div>
                    

                     <IconButton size="large" aria-label="Image Selector" color="inherit">
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
                    <Button variant="contained" className="tweetBtn" style={{borderRadius:"50px", padding:"8px", width:"25%", marginLeft:"50px"}}>Tweet</Button>
               
                </div>
            </div>
        </div>


    </div>
  );
}
