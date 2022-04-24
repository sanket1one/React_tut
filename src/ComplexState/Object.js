import React from 'react'
import Star from './Star'

function Object() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    // let starIcon = contact.isFavorite ? "star-filled.png":"star-empty.png"

    function toggleFavorite() {
        setContact(prevContact => {
            //this lead to replacing the previous object with new object of one element only
            return {
                ...prevContact, //it's just like copying pasting things 
                isFavorite:!prevContact.isFavorite
            }
        })
    }
    console.log(contact)
    
  return (
    <main>
        <article className="card">
            <img src="./images/user.png" className="card--image" />
            <div className="card--info">
                <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                <h2 className="card--name">
                    {contact.firstName} {contact.lastName} 
                </h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
            </div>
            
        </article>
</main>
  )
}

export default Object
