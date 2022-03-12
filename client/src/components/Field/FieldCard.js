import React from 'react'

//css
import "./FieldCard.css"

//image
import field_rec from "../../Image/field_rectangle.png"; 
import field_1 from "../../Image/science.png"

function FieldCard(props) {
  return (
    <div className='field_card_main'>
      <img src={props.image} className="field_image"/>
      <img src={field_rec} className="field_card_rec"/>
      <div className="field_card_rec_text">{props.field_name}</div>
    </div>
  )
}

export default FieldCard;