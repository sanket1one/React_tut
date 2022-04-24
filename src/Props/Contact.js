import React from 'react'
import image1 from '../Images/image1.png'
import star1 from '../Images/Star1.png'
// function Contact(props) {
//     console.log(props)
//   return (
//     <div className='contact-card'>
//         <img src={props.img} className='main-image'/>
//         <h3>{props.name}</h3>
//         <div className='info-group'>
//             <img src={star1} />
//             <p>{props.phone}</p>
//         </div>
//         <div className='info-group'>
//             <img src={star1} />
//             <p>{props.email}</p>
//         </div>
//     </div>
//   )
// }


function Contact({img,name,phone,email}) {
  return (
    <div className='contact-card'>
        <img src={img} className='main-image'/>
        <h3>{name}</h3>
        <div className='info-group'>
            <img src={star1} />
            <p>{phone}</p>
        </div>
        <div className='info-group'>
            <img src={star1} />
            <p>{email}</p>
        </div>
    </div>
  )
}

export default Contact
