import React from 'react'
import Main from './Main'
import Navbar from './Navbar'

function MainFile() {
    const [darkMode,setDarkMode] = React.useState(true)

    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }
  return (
    <div className='container'>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Main darkMode={darkMode}/>
    </div>
  )
}

export default MainFile
