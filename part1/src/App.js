import React from 'react';

const Header = () => {
  const course = 'Half Stack application development'
  return (
    <h1>{course}</h1>
  )
}

const Part = ({sequence}) => {
  const content = [
    {name: 'Fundamentals of React', number: 10},
    {name: 'Using props to pass data', number: 7},
    {name: 'State of a component', number: 14}
  ]

  return (
    <div>
    <p>{content[sequence].name} {content[sequence].number}</p>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part sequence={0} />
      <Part sequence={1} />
      <Part sequence={2} />
    </div>
  )
}

const Total = ({content}) => {
  return (
    <div>
    <p>Number of exercises {content[0].number+content[1].number+content[2].number}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {name: 'Fundamentals of React', number: 10},
    {name: 'Using props to pass data', number: 7},
    {name: 'State of a component', number: 14}
  ]
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total content = {content} />

      {/* <h1>{course}</h1> */}
      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p> */}
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  )
}

export default App