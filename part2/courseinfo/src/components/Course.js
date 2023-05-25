const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  const sum = Object.values(parts).reduce((acc, {exercises}) => acc + exercises, 0)
  return(
    <h4>Number of exercises {sum}</h4>
  )
}

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Course = ({course}) => {
  return(
    <>
    <Header course={course.name}/>
    {course.parts.map(part => {return(<Part key={part.id} part={part}/>)})}
    <Total parts={course.parts}/>
    </>
  )

} 

export default Course 