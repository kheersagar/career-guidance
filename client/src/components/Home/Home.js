import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Search from "../Search/Search";

//css
import "./Home.css";

//image
import homeImage from "../../Image/home_main.png";
import rectange from "../../Image/Rectangle.png";
//
import Classes from "../Classes/Classes";
import CollegeCard from "../CollegeCard/CollegeCard";
import FieldCard from "../Field/FieldCard";

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
  const field_data = [
    {
      id:1,
      field_name:'Science',
      image: require( "../../Image/science.png")
    },
    {
      id:2,
      field_name:'Medical',
      image: require("../../Image/medical.png")
    },
    {
      id:3,
      field_name:'Commerce',
      image: require("../../Image/commerce.png")
    },
    {
      id:4,
      field_name:'Arts',
      image: require("../../Image/arts.png")
    },
    {
      id:5,
      field_name:'Engineering',
      image: require("../../Image/engineering.png")
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
        {/* college details section */}
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
      {/* fields card section */}
      <div className="choose_field_section">
        <div className="field_text">Choose Your Field</div>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
        {field_data.map((item)=>{
           return <FieldCard key={item.id} field_name={item.field_name} image={item.image}/>
         })}
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;
