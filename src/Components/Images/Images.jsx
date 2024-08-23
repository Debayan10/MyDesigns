import React from "react";

function Images({src}){
    return (
        <span>
            <a href={src} target="_blank">
                <img src={src} alt="Snow" style={{width : "100%", borderRadius: "10px", boxShadow: "0px 5px 6px 5px rgb(0 0 0 / 20%)"}}/> 
            </a>
        </span> 
        
    );
    
}
export default Images;