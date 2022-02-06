import React from "react";
import "../Css/post.css";
import { Avatar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CollectionsIcon from "@mui/icons-material/Collections";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CreateIcon from "@mui/icons-material/Create";
import HttpsIcon from "@mui/icons-material/Https";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EventNoteIcon from "@mui/icons-material/EventNote";


export const Post = (props) => {
  return (
    <div className="post">
        <div className="postPop">
          <form onSubmit={props.submitPost}>
            <div className="postHeading">
              <div className="postHeadingleft">
                <CreateIcon /> <a href="#" className="heading"> Compose Post </a>
              </div>
              <div className="postHeadingleft">
                <CollectionsIcon /> <a href="#" className="heading"> Photo/Video Album </a>
              </div>
              <div className="postHeadingleft">
                <VideoCallIcon /> <a href="#" className="heading"> Live Video </a>
              </div>
              <div className="postHeadingRight">
                <IconButton > <CloseIcon /> </IconButton>
              </div>
            </div>

            <div className="postTop">
              <Avatar />
            </div>
            <div className="postBody">
              <textarea rows="3" placeholder="Write something here... "  onChange={props.handleTextarea}/>
            </div>

            <div className="postBottom">
              <div className="postBottomLeft">
                <div className="leftOption">
                  <PersonAddAlt1Icon style={{color:'blue',width:'20px'}}/>
                  <button className="post-button" type="button" >Tag friends</button>
                </div>
                <div className="leftOption">
                  <GifBoxIcon style={{color:'grey',width:'20px'}}/>
                <button className="post-button"  type="button" onClick={props.fetchData} >GIF </button>  
                </div>
              </div>

              <div className="postBottomRight">
                <div className="rightOption">
                  <LocationOnIcon style={{color:'red',width:'20px'}}/>
                  <button className="post-button" type="button">Check in</button>
                </div>
                <div className="rightOption">
                  <EventNoteIcon style={{color:'lightred',width:'20px'}}/>
                  <button className="post-button" type="button">Tag Event</button>
                </div>
              </div>
            </div>

            <div className="postFooter">
              <div className="postFoterLeft">
                {/* <h5>Add to your post</h5> */}
              </div>
              <div className="postFoterRight">
                <HttpsIcon className="icon" />{" "}
                <input type="button" className="post_button" value="Only me" />
                <input type="submit" className="post_submit" value="Post" />
              </div>
            </div>
          </form>
        </div>
    </div>
  )
}
