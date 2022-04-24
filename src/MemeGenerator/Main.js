import React from 'react'
// import MemesData from './MemesData.js'

let url;
function Main() {
  const [meme,setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/26am.jpg"});
  const [allMemes,setAllMemes]  = React.useState([])

    // function getMeme(){
    //     const memesArray = MemesData.data.memes;
    //     const randomNumber = Math.floor(Math.random()*memesArray.length);
    //     // const {url} = memesArray[randomNumber];
    //     // url = memesArray[randomNumber].url;
    //     // console.log(url)
    //     setMeme((prevMeme) =>({
    //         ...prevMeme,
    //         randomImage: memesArray[randomNumber].url
    //     })
    //     )
    // }
    function getMeme(){
        const randomNumber = Math.floor(Math.random()*allMemes.length);
        const url = allMemes[randomNumber].url
        setMeme((prevMeme) =>({ 
            ...prevMeme,
            randomImage: url
        })
        )
    }

    /* useEffect takes a function as its parameter.IF that function returns something, it needs to be cleanup
     function.Otherwise it should return nothing,If we make it an async function,it
     automatically return a promise instead of a function or nothing.
     Therefore, if you want to use async operations inside of useEffect, you need to define the function seperately inside of the call
     back function,as seen below: */

    React.useEffect(async()=>{
      async function getMemes(){
        const res  = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
        
      }
      // async ()=>{
        // fetch("https://api.imgflip.com/get_memes")
        // .then(res=>res.json())
        // .then(data => setAllMemes(data.data.memes))
      getMemes()

        // return ()=>{

        // }
    },[])

    console.log(allMemes)

    function handleChange(event){
      const {name,value} = event.target
      setMeme(prevMeme =>({
        ...prevMeme,
        [name]:value
      }))
    }
  return (
    <main>
        {/* <p>URL:{url}</p>    url is only visible after calling the function */}
      <div className='form'>
          <input 
          type="text"
          placeholder='Top text'
          className='form--input'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
           />
          <input
           type="text"
           placeholder='Bottom text'
           className='form--input'
           name='bottomText'
           value={meme.bottomText}
           onChange={handleChange}
            />
          <button
          className='form--button'
          onClick={getMeme}
          >
              Get a new meme image🐱‍🏍
          </button>
          <div className='meme'>
              <img src={meme.randomImage} className="meme--image"/>
              <h2  className='meme--text top'>{meme.topText}</h2>
              <h2  className='meme--text bottom'>{meme.bottomText}</h2>
          </div>
      </div>
    </main>
  )
}

export default Main
