import React from 'react'

//css
import "./Classes.css"
function Card(props){
  return(
    <div className='class_card'>
      <div className='card_class_no'>{props.class_no}</div>
      <div className='card_class_name'>Class {props.class_no}</div>
    </div>
  )
}
function Classes() {
  const data = [
    {
      value:9
    },
    {
      value:10
    },
    {
      value:11
    },
    {
      value:12
    },
    {
      value:1
    },
    {
      value:2
    },
]
  return (
    <div className='classes_main'>
      <div style={{fontSize:'1.5rem',fontWeight:'700',marginBottom:'1.2rem'}}>Classes</div>
      <div className='classes_main_section'>
      {data.map((item)=>{
        return(
          <Card class_no = {item.value}/>
        )
      })}
      </div>
    </div>
  )
}

export default Classes