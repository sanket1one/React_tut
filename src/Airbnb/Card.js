import React from 'react'
import image1 from '../Images/image1.png'
import StarImg from '../Images/Star1-1.png'


function Card(props) {
  let badgeText
  if(props.openShots == 0)
  {
    badgeText = "SOLD OUT"
  }else if(props.location == "Online"){
    badgeText = "ONLINE"
  }
  console.log(props)
  return (
    <div className='card'>
      {/* {!props.openShots == 0 && <div className="card--badge ">SOLD OUT</div>} */}
      {badgeText && <div className="card--badge ">{badgeText}</div>}
        <img src={`../Images/${props.img}`} className="card--image" />
        <div className='card--stats'>
            <img src={StarImg}  className="card--star"/>
            <span >{props.stats.rating}</span>
            <span className='gray'>({props.stats.reviewCount})•</span>
            <span className='gray'>{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card
