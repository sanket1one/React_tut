import React from 'react'

function Main(props) {
  return (
    <main className={props.darkMode? "dark":""}>
        <h1 className='main--title'>Fun facts about React</h1>
        <ul className='main--facts'>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walker</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousand of enterprise apps, including mobile app</li>
        </ul>      
    </main>
  )
}

export default Main
