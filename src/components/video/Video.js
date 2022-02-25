import React from "react";
import './video.css';

function Video(props){
    //({videoItem})
    return(
        <li className="container">
           <div className="video">
                <img className="thumbnail"
                    src={props.videoItem.snippet.thumbnails.medium.url}
                    alt="video thumbnail"
                />
                <div className="metadata">
                    <p className="title">{props.videoItem.snippet.title}</p>
                    <p className="channel">{props.videoItem.snippet.channelTitle}</p>
                </div>
            </div>
          {/*   {props.videoItem.snippet.channelTitle} */}
        </li>
    )
}
export default Video;