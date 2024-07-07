import React, { useState } from 'react'
import "./Comcss/Instagram.css"
function Instagram() {
const[show,setShow]=useState(true);


function toggle(){
if(show){


setShow(false)
}  
else{
  setShow(true)

}



}




  return (
    <>
 <div className="container">

{



(show) ? 
(<div className="card">
  <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="Instagram" />
  <input type="text" placeholder="Phone number, username, or email" />
  <input type="password" placeholder="Password" />
  <button onClick={toggle}>Sign in</button>
  <p style={ { color:"black" }}>Don't have an account? <strong >Sign up</strong></p>
</div>)
:

(<div className="card">
<img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="Instagram" />
<input type="text" placeholder="Mobile Number or Email" />
<input type="text" placeholder="Full Name" />
<input type="text" placeholder="Phone number, username, or email" />
<input type="password" placeholder="Password" />
<button onClick={toggle}>Sign up</button>
<p style={ { color:"black" }  } >Have an account? <strong >Log in</strong></p>
</div>
)

}
  </div>



      
    </>
  )
}

export default Instagram
