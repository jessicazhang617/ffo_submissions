import React from 'react';
import { useState } from 'react'

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Part = ({content}) => {
  return (
    <div>
    <p>{content.name} {content.exercises}</p>
    </div>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <Part content={parts[0]} />
      <Part content={parts[1]} />
      <Part content={parts[2]} />
    </div>
  )
}

const Total = ({parts}) => {
  const [part1,part2,part3] = parts
  return (
    <div>
    <p>Number of exercises {part1.exercises+part2.exercises+part3.exercises}</p>
    </div>
  )
}


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({text, value}) => {
  if (text=='positive') {
    return (
      <tr>
      <p>{text} {value}%</p>
      </tr>
    )
  }
  else {
    return (
      <tr>
      <p>{text} {value}</p>
      </tr>
    )
  }
}

const Statistics = ({good,neutral,bad}) => {
  const average = (good-bad)/(good+neutral+bad)
  const positive = good/(good+neutral+bad)*100 

  if (good+neutral+bad!=0) {
  return (
  <div>
    <table>
    <StatisticLine text='good' value={good} />
    <StatisticLine text='neutral' value={neutral} />
    <StatisticLine text='bad' value={bad} />
    <StatisticLine text='average' value={average} />
    <StatisticLine text='positive' value={positive} />
    </table>
  </div>
  )
  }
  else {
    return (
    <div>
      <p>No feedback given</p>
    </div>
    )
  }
}

  
const Anecdotes = ({votes,selected}) => {
  const found  = votes.find(votes => {
    return votes.id == selected
  })
  
    return (
      <div>
        <p>{found.text}</p>
        <p>has {found.number} votes</p>
      </div>
    )
  
}

const AnecWithMostVotes = ({votes}) => {
  const descending = votes.reduce((max, votes) => max.number > votes.number ? max : votes)
  return (
    <div>
      <p>{descending.text}</p>
       <p>has {descending.number} votes</p>
    </div>
   
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [votes, setVotes] = useState([
    {id:0, number:0, text:'If it hurts, do it more often.'},
    {id:1, number:0, text:'Adding manpower to a late software project makes it later!'}, 
    {id:2, number:0, text:'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.'}, 
    {id:3, number:0, text:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'},
    {id:4, number:0, text:'Premature optimization is the root of all evil.'},
    {id:5, number:0, text:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'},
    {id:6, number:0, text:'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'},
    {id:7, number:0, text:'The only way to go fast, is to go well.'}
  ]
  )

  const handleGoodClicks = () => {
    setGood(good+1)
  }

  const handleNeutralClicks = () => {
    setNeutral(neutral+1)
  }

  const handleBadClicks = () => {
    setBad(bad+1)
  }

  const handleSelectClicks = () => {
    setSelected(Math.floor(Math.random()*8))
  }

  const handleVoteClicks = ({selected}) => {
    setVotes(votes.map(votes => {
      if (votes.id == selected) {
        return {
          ...votes,
          number: votes.number+1
        }
      } else {
        return votes;
      }
      
    })
    )
  }
   
  const [selected, setSelected] = useState(0)

  return (
    <div>
    <div>
      <h1>Part1</h1>
      <Header name={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
    {/* Sample */}
    <div>
      <h1>Part2</h1>
      <h1>give feedback</h1>
      <Button handleClick  ={() => handleGoodClicks()} text="good" />
      <Button handleClick={() => handleNeutralClicks()} text="neutral" />
      <Button handleClick={() => handleBadClicks()} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
    <div>
      <h1>Anecdotes</h1>
    <Anecdotes votes={votes} selected={selected} />
    <Button handleClick={() => handleVoteClicks({selected})} text="votes" />
    <Button handleClick  ={() => handleSelectClicks()} text="random anecdote" />
    </div>
    <div>
      <h1>Anecdote with most votes</h1>
     <AnecWithMostVotes votes={votes}/>
    </div>
    </div>
    
  )
}

export default App