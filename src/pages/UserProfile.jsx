import React, { useState } from 'react'
import Avatar from '../images/avatar15.jpg'
import { Link } from 'react-router-dom'
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
function UserProfile() {
  const [avatar, setAvatar] = useState(Avatar)
  const [userDetail, setUserDetail] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  function handleForm(e) {
    setUserDetail((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <section className='profile'>
      <div className="container profile__container">
        <Link className="btn" to={`/myposts/id`}>My Posts</Link>
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} alt="" />
            </div>

            <form className="avatar__form">
              <input type="file" name="avatar" id='avatar' accept='png, jpg, jpeg' onChange={e => setAvatar(e.target.files[0])} />
              <label htmlFor="avatar"><FaEdit /></label>
            </form>
            <button className='profile__avatar-btn'>
              <FaCheck />
            </button>
          </div>
          <h1>Ernest Achiever</h1>


          <form className="form profile__form">
            <p className='form__error-message'>This is an error message</p>
            <input
              type="text"
              placeholder='Full name'
              value={userDetail.fullname}
              onChange={handleForm}
              name='fullname'
            />

            <input
              type="email"
              placeholder='Email'
              value={userDetail.email}
              onChange={handleForm}
              name='email'
            />

            <input
              type="password"
              placeholder='Pasword'
              value={userDetail.password}
              onChange={handleForm}
              name='password'
            />

<input
              type="confirmPassword"
              placeholder='Confirm Pasword'
              value={userDetail.confirmPassword}
              onChange={handleForm}
              name='confirmPassword'
            />
            <button type="submit" className='btn primary'>Update Details</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile