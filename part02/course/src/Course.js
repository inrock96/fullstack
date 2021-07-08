const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ course }) => {
    const sum = course.parts.reduce(function (sum, part) {
      return sum + part.exercises
    }, 0)
    return (
      <p>Number of exercises {sum}</p>
    )
  }
  
  const Part = ({ part }) => {
    console.log("Part props:", part)
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
  const Content = ({ course }) => {
    return (
  
      <div>
        {
          course.parts.map(part => <Part key={part.id} part={part} />)
        }
      </div>
    )
  }
  const Course = ({ course }) => {
    return (
      <div>
        {
          course.map(curso => 
          <div>
            <Header course={curso}></Header>
            <Content course={curso}></Content>
            <Total course={curso} />
          </div>)
        }
  
      </div>
  
    )
  }

export default Course;