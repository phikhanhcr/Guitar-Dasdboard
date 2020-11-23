import Axios from 'axios';
import React, { useState } from 'react';
import { store } from 'react-notifications-component';
import { Redirect } from 'react-router-dom';


function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userCheck, setUserCheck] = useState('cl-red display-none')
  const [passCheck, setPassCheck] = useState('cl-red display-none')
  const [loginStatus, setLoginStatus] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password })
    await Axios.post("http://localhost:3000/admin-login", {
      email, password
    })
      .then(res => res.data)
      .then(data => {
        if (data.emailNotFound) {
          setUserCheck('cl-red')
          return;
        }
        if (data.wrongPass) {
          setPassCheck('cl-red')
          return;
        }
        if (data.adminFail) {
          store.addNotification({
            title: "Access denied",
            type: "danger",
            message: "Only Administrator!",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 1500,
              onScreen: true
            }
          })
          return;
        }
        store.addNotification({
          title: "Login Successfully",
          type: "success",
          message: "You can do anything as an Administrator can do!",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 1500,
            onScreen: true
          }
        })
        setLoginStatus(true)
        localStorage.setItem('auth-admin-token', data.token)
      })
  }
  if (loginStatus) {
    return <Redirect to="" />
  }
  return (
    <div className="mt-5 d-flex container justify-content-center align-items-center">

      <div>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <p className={userCheck}>* User doesn't exist</p>
          <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="form-control mb-3" />
          <p className={passCheck}>* Wrong Password</p>
          <input required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="form-control mb-3" />
          <button className="btn btn-dark">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;