import React from 'react'
import { Button } from 'react-bootstrap';
//image
import collegeImage from "../../Image/college.png";

//icons
import location from "../../Image/Icons/location.png"

//css
import "./CollegeCard.css";

function CollegeCard(props) {
  return (
    <div className='college_card_main' style={{flexDirection : props.count%2 == 0 ? 'row-reverse' : 'row'}}>
      <div className='college_card_first'>
        <img src={collegeImage} className="college_image"/>
      </div>
      <div className='college_card_second'>
        <div className='college_title'>
          Manipal Academy of Higher Education (MAHE)
        </div>
        <div className='college_details'>
          <div>
            <div><span className='college_sub_text'>B.Tech Computer Science and Engineering  </span></div>
            <div className='college_location'><img src={location} className='location_icon'/><span className='college_location_text'>Manipal, Karnataka </span></div>
            <div className='exam_fees'> Fees: <span>₹1,780,000</span>  </div>
          </div>
          <div>
            <div><Button  style={{backgroundColor : '#14397D',borderRadius:'30px',minWidth:'150px',padding:'0.5rem'}}>View All Courses</Button></div>
            <div className='college_rank'>Ranked <span># 13 NIRF</span></div>
            <div className='exam_fees'>Exams: <span> MET , JEE</span></div>
          </div>
        </div>
        <div className='college_apply_btn'>
          <Button  style={{backgroundColor : '#14397D',borderRadius:'10px',minWidth:'100px'}}>Apply</Button>
        </div>

      </div>
    </div>
  )
}

export default CollegeCard