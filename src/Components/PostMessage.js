import React from 'react';
import { Avatar} from "@mui/material";
import "../Css/postMessage.css";

export const PostMessage = ({postMsg, gifLinks}) => {
  return(
    <div className='postMessage'>
        <div className="messageHeader">
        <Avatar />
        </div>
        <div className="messageBody">
                <p className='text'>{postMsg.text}</p>
                { gifLinks.map(el =>{
                     return (
                        <div className="gif" key={el.id}>
                           { el.id == postMsg.imageId ?
                              <img src={el.images.fixed_height.url} alt="gif" />
                           :
                           // console.log("id is not matched")
                         ""
                            }  
                        </div>
                     )
                     }
                  )}
        </div>
  </div>
  )
};
