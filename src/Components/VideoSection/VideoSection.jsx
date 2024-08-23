import React from "react";
import "./VideoSectionCss.css"

function VideoSection({src}){
    return (
      <div className="container">
          <video className="videoStyle" loop autoPlay={true} controls={false} muted>

            <source src={src} type="video/mp4"/>

        </video>

      </div>      
    );
    
}
export default VideoSection;