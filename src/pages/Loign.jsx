import React, { useState } from 'react'
import {Link} from 'react-router-dom'
function Register() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  function changeInputHandler(e){
    setUserData((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  return (
    <section className='login'>
      <div className="container">
        <h2>Log in</h2>
        <form action="/register" className='form login__form'>
        <p className='form__error-message'>This is an error message!</p>

        <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} autoFocus/>

        <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />

        <button className='btn primary'>Login</button>
        </form>
        <small>Don't have an account? <Link to="/register">Sign up</Link> </small>
      </div>
    </section>
  )
}

export default Register