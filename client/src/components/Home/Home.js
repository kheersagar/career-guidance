import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Search from "../Search/Search";


//css
import "./Home.css";

//image
import homeImage from "../../Image/home_main.png"
import rectange from "../../Image/Rectangle.png";

function Home() {
  return (
    <>
    <div className="home_main">
      <NavigationBar />
      <div className="home_section">
        <div className="home_text_section">
          <h1 style={{fontSize:'4rem'}}>Maecenas  </h1>
          <h1 style={{fontSize:'4rem'}}>Mollis</h1>
          <p className="home_main_p">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          Distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
        </div>
        <div className="home_img_section">
          <img src={homeImage} className='home_image'/>
        </div>
      </div>
      <div className="home_search">
        <img src={rectange}  style={{width:'100%'}} />
        <Search />
      </div>
    </div>
    {/* <div>
        asd
    </div> */}
    </>
  );
}

export default Home;
