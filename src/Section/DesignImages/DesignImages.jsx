import React from "react";
import "./DesignImagesCss.css";
import Images from "../../Components/Images/Images";
import VideoSection from "../../Components/VideoSection/VideoSection.jsx";
import img1 from "../../assets/Image/lionelmessi.png";
import img2 from "../../assets/Image/nascar.png";
import img3 from "../../assets/Image/elclasico.png";
import img4 from "../../assets/Image/ronaldo.png";
import MotionGraphics from "../../assets/Video/motiongraphics2.mp4";

function DesignImages() {
  return (
    <div className="row">
      <div className="column">
        <Images src={img1} />
        <div style={{ marginTop: "5px" }}>
          <center>
            <video
              style={{
                width: "98%",
                borderRadius: "10px",
                boxShadow: "0px 5px 10px 5px rgb(0 0 0 / 20%)",
              }}
              loop
              autoPlay={true}
              controls={false}
              muted
            >
              <source src={MotionGraphics} type="video/mp4" />
            </video>
          </center>
        </div>
      </div>
      <div className="column">
        <Images src={img2} />
      </div>
      <div className="column">
        <Images src={img3} />
      </div>

      <div className="column">
        <Images src={img4} />
      </div>
    </div>
  );
}
export default DesignImages;
