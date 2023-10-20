// const Hello =({name, age}) =>{

//   const bornYear = ()=> new Date().getFullYear() -age
    

//   return(
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>
//         So you were probably born in { bornYear()}
//       </p>
//     </div>
//   )
// }

import { useState } from "react"
import Button from "./Button";
import Display from "./Display";

const App= () => {
  // const name = 'Mani'
  // const age =21
  const [counter, setCounter] = useState(0)

  const increaseByOne = () =>{
    console.log('increasing, value before', counter)
   setCounter(counter + 1);
  }
  const decreaseByOne = () => {
    console.log('decreading')
    setCounter(counter -1)
  }

  const setToZero = () => {
    setCounter(0)
  }

  return (
    <>
      <Display
        counter={counter}
      />
        <Button 
        handleClick={decreaseByOne}
        text='Decrease'
         />
      <Button
        handleClick={increaseByOne}
        text = 'plus'
      />
    <Button 
      handleClick ={setToZero}
      text= 'zero'
    />
    </>
  )

// return (
//  <div>
//   <h1>Greetings</h1>
//   <Hello name='Maya' age ={10+12} />

//   <Hello  name={name} age={age} />
    
   
//  </div>
// )
}

export default App
 