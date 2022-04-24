import React from 'react'

function Api() {
    const [starWarData,setStarWarData] = React.useState({})
    const [count,setCount ] = React.useState(1)

    console.log("Component Rendered")

    //1.Get the Data(fetch)
    //2.Save the data to state

    //this code is reaching outside the react environment
    // fetch("https://swapi.dev/api/people/1/")
    // .then(res =>res.json())
    // .then(data => setStarWarData(data))

    //side effects in react
    React.useEffect(function() {
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${count}/`)
        .then(res =>res.json())
        .then(data => setStarWarData(data))
    }, [count]) //second parameter limits the no. of time the function will run
    //[0] compare to [1] is their is any chage then it run the function

    function handleChange(){
        setCount(prevCount => prevCount+1)
    }

  return (
    <div>
      <h1>Hello sanket patil {count}</h1>
      <button 
      type='submit'
      onClick={handleChange}
      >Get Next Character</button>
      <pre>{JSON.stringify(starWarData,null,2)}</pre>
    </div>
  )
}

export default Api
