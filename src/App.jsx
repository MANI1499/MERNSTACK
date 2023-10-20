import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const App= () => {

  const course = {
      name :'Half Stack application development',
   parts : 
  [
    {
    
    name: 'Fundamentals of React',
    exercises : 10
  },
  //const exercises1 = 10
 {
    name: 'Using props to pass data',
    exercises: 7
  },
 // const exercises2 = 7
   {
    name: 'State of a component',
    exercises : 14
  } 
  //const exercises3 = 
  ]
}
return (
 <div>
    
    <Header course={course} />
    <Content
    parts= {course.parts}
    />
  
    <Total 
      parts={course.parts}
    />
 </div>
)
}

export default App
