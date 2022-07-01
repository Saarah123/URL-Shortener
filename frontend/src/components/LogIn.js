import React from 'react';
import './login.css';
import { useState} from 'react';


 export const LogIn=()=> {

  const [user,setUser] = useState({
    email:""
  })

  let name, value 
  const handleInputs=(e)=>{
       console.log(e)
       name = e.target.name;
       value=e.target.value;

       setUser({...user,[name]:value})
       
  }

  return (
    <>
    <div className='navbar' style={{height:"50px", width:"100%", backgroundColor:"lavender"}}>
<h1 style={{margin:"auto"}}>URL SHORTENER</h1>
    </div>
    <div className='mail'>
        <form style={{marginLeft:"40%" , marginTop:"17%"}}  onSubmit={handleInputs}>

            <label><i>E-Mail</i></label><br/>

            <input placeholder='Type here' name="email"  value={user.email}  onChange={handleInputs} ></input>

           <button style={{marginLeft:"20px" , width:"50px", height:"20px", backgroundColor:"lavender"}}>GO</button>
        </form>
    </div>
    </>
  )
}

