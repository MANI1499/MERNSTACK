const Total =(props) =>{
    let k =0;
    let c =0;
    return (
        <>
            <h5>Number of exercises {
                props.parts.map(part =>{
                     k+=part.exercises
                        
                })
               
            
                
            } {c+=k}</h5>
        </>
    )
}

export default Total;