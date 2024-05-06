import React from 'react'

const Signup = () => {
  const [name, setName] =useState("");
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const collectData=()=>{
    console.warn(name, email, password);
  }
  return (
    <div>
      <h1 className='register'>Register</h1>
      <input type="text" name='name' value={name} placeholder='Your Name' className='inputBox' on onChange={(e)=>setName(e.target.value)} />
      <input type="email" name='email' placeholder='Your Email' value={email} className='inputBox' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" name='pass'  placeholder='Enter Password' className='inputBox' onChange={(e)=>setPassword(e.target.value)} />
      <button className='appButton' type='button' >Sign Up</button>
    </div>
  )
}

export default Signup