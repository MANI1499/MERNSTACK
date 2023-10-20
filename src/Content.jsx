import Part from "./Part";
const Content =(props) =>{
    
    return (
        <>
      

        {props.parts.map(part =>{
            return <Part key={part} part={part} />
        })}
            {/* <p>
                <Part part1 ={props.part1} />
                 {props.exercises1}
            </p>
            <p>
                <Part part1 ={props.part1} />
                 {props.exercises2}
            </p>
            <p>
                 <Part part1 ={props.part1} />
                 {props.exercises3}
            </p> */}
        </>
    )
}
export default Content;