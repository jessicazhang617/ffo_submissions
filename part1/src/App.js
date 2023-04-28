import React from 'react';

// Part1a
const Header = () => {
  const course = 'Half Stack application development'
  return (
    <h1>{course}</h1>
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

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App