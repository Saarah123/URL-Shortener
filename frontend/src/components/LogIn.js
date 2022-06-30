import React from 'react';
import './login.css';

 export const LogIn=()=> {
  return (
    <>
    <div className='navbar' style={{maginLeft:"40%"}}>

    </div>
    <div className='mail'>
        <form>
            <label><i>E-Mail</i></label><br/>
            <input placeholder='Type here'></input>
            <button>GO</button>
        </form>
    </div>
    </>
  )
}
export default LogIn;
