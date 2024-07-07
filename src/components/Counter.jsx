import React, { useState } from 'react'

function Counter() {

    const [val,setVal]=useState(0);



const increase=()=>{
    
    setVal(val+1)
}
const decrease=()=>{
    if(val==0){
        return
    }
    setVal(val-1)
}



  return (
    <>
      

<div className='container'>
    <h1 style={{textAlign:'center'}}>{val}</h1>

<div className='btns'>

<button onClick={increase}>Increment</button>
<button onClick={decrease} >Decrement</button>


</div>




</div>




    </>
  )
}

export default Counter
