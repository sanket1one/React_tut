import React from 'react'
import './ShortForm.css'

function ShortForm() {
    const [FormData,setFormData] = React.useState({
        email:"",
        password:"",
        confirmPassword:"",
        newsletter:false
    })
    function handleChange(event){
        const {name,value,type,checked} = event.target;
        setFormData((prevData) =>{
            return{
                ...prevData,
                [name]:type === "checkbox"?checked:value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(FormData)
    }
  return (
    <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Email address"
            name='email'
            value={FormData.email}
            className="form--input"
            onChange={handleChange}
            />
            <input 
            type="password"
            placeholder="password"
            className="form--input"
            name='password'
            value={FormData.password}
            onChange={handleChange}
            />
            <input 
            type="password"
            placeholder="confirm password"
            className="form--input"
            name="confirmPassword"
            value={FormData.confirmPassword}
            onChange={handleChange}
            />
            <div className='form--marketing'>
                <input 
                    type="checkbox" 
                    name='newsletter'
                    checked={FormData.newsletter}
                    onChange={handleChange}
                    id="newsletter"
                />
                <label htmlFor='newletter'>I want to join the newsletter</label>
                <br />
                <button type='submit'>Sign Up</button>
            </div>
        </form>
      
    </div>
  )
}

export default ShortForm 