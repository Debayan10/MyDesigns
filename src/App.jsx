import logo from "./logo.svg";
import Header from "./Components/Header/Header.jsx";
import VideoSection from "./Components/VideoSection/VideoSection.jsx";
import DesignImagesSection from "./Section/DesignImages/DesignImages.jsx";

import MotionGraphics from "./Assets/Video/motiongraphics.mp4";
import graphicsdesign1 from "./Assets/Image/graphicsdesign1.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&display=swap');
      </style>
      <Header />
      <div>
        <VideoSection src={MotionGraphics} />
        <div style={{}}>
          <DesignImagesSection />
        </div>
      </div>

      <hr style={{ margin: "50px 200px 50px 200px" }} />
    </div>
  );
}

export default App;
