import React from 'react'
import Joke from './Joke'
import Jokes from "./JokeData.js"

function Condition() {
  console.log(Jokes)
  const jokeElement = Jokes.map(joke =>{
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })
  console.log(jokeElement)
  return (
    <div>
        {/* <Joke 
          punchline="It's hard to explain pun to kleptomatics because they always take thing literally" 
          isPun={true}
          upvotes={10}
          downvotes={2}
          comments={[{author:"", body:"", title:""}]}
          />
        <Joke 
          setup="I got my daughter a fridge for her birthday"
          punchline="I can't wait to see her face light up when she open it."  
          isPun={false} 
          />
        <Joke 
          setup="How did the hacker escape the police?"
          punchline="He just ransomware"  
          isPun={false} 
          />
        <Joke 
          setup="why don't pirates travel on mountain roads?"
          punchline="scurvy."  
          isPun={false} 
          />
        <Joke 
          setup="Why do bees stay in the hive in the winter?"
          punchline=""  
          isPun={true} 
        /> */}
        {jokeElement}
    </div>
  )
}

export default Condition
