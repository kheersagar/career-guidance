import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Search from "../Search/Search";

//css
import "./Home.css";

//image
import homeImage from "../../Image/home_main.png";
import rectange from "../../Image/Rectangle.png";
import Classes from "../Classes/Classes";
import CollegeCard from "../CollegeCard/CollegeCard";

function Home() {

  const college_data = [
    {
      value:1
    },
    {
      value:2
    },
    {
      value:3
    },
    {
      value:4
    },
    {
      value:5
    },
  ]
  return (
    <>
      <div className="home_main">
        <NavigationBar />
        <div className="home_section">
          <div className="home_text_section">
            <h1 style={{ fontSize: "4rem" }}>Maecenas </h1>
            <h1 style={{ fontSize: "4rem" }}>Mollis</h1>
            <p className="home_main_p">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
              Distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="home_img_section">
            <img src={homeImage} className="home_image" />
          </div>
        </div>
        <div className="home_search">
          <img src={rectange} style={{ width: "100%" }} />
          <Search />
        </div>
      </div>
      <div className="home_content">
        <Classes />
      <div className="college_card_section">
        <div className="college_section_text">Top Ranked Colleges in India</div>
        <div>
        {college_data.map((item)=>{
          return(
            <CollegeCard count={item.value}/>
          )
        })}
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;
