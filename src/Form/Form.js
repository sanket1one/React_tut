//Controlled inputs

import React from 'react'
import './Form.css'
function Form() {
    const [FormData,setFormData] = React.useState({
      firstName:"",
      lastName:"",
      email:"",
      comments:"",
      isFriendly:false,
      employment:"",
      favColor:"",
    })

    function handleChange(event){
        // setFormData(event.target.value)

        const {name,value,type,checked} = event.target
        setFormData((prevFormData) =>{
          return{
            ...prevFormData,
            // [event.target.name]:[event.target.value] //computed properties
            [name]:type === "checkbox"?checked:value
          }
        })
    }
    function handleSubmit(event){
      event.preventDefault();
      // submitToApi(FormData) //for api
      console.log(FormData)
    }



    
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder='First Name' 
        onChange={handleChange}
        name="firstName"
        value={FormData.firstName}
        />

      <input 
        type="text"
        placeholder='Last Name' 
        onChange={handleChange}
        name="lastName"
        value={FormData.lastName}    //Controlled input
        />
      <input 
        type="email"
        placeholder='Email' 
        onChange={handleChange}
        name="email"
        value={FormData.email}
        />
        <textarea
        placeholder='Comments'
        onChange={handleChange}
        name="comments"
         value={FormData.comments} />

         <input 
         type="checkbox"
         id='isFriendly'
         checked={FormData.isFriendly}
         onChange={handleChange}
         name="isFriendly"
         />
         <label htmlFor='isFriendly'>Are you friendly</label>
         <br />
         <fieldset>
           <legend>Current employement status</legend>

           <input 
              type="radio"
              id="unemployed"
              name="employment"
              value="unemployed"
              checked={FormData.employment == "unemployed"}
              onChange={handleChange}
           />
           <label htmlFor='unemployed'>Unemployed</label><br />
           <input 
              type="radio"
              id="part-time"
              name="employment"
              value="part-time"
              checked={FormData.employment == "part-time"}
              onChange={handleChange}
           />
           <label htmlFor='part-time'>Part Time</label><br />
           <input 
              type="radio"
              id="full-time"
              name="employment"
              value="full-time"
              checked={FormData.employment == "full-time"}
              onChange={handleChange}
           />
           <label htmlFor='full-time'>Full Time</label><br />
         </fieldset>

          <label htmlFor='favColor'>What is your favourite color?</label><br />
          <select
           id="favColor"
           value={FormData.favColor}
           onChange={handleChange}
           name="favColor"
          >
              <option value="">--Choose--</option>
              <option value="red">red</option>
              <option value="orange">orange</option>
              <option value="yellow">yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="indigo">indigo</option>
              <option value="violet">violet</option>
          </select>
          <br />
          <button type='submit'>submit</button>
    </form>
  )
}

export default Form
