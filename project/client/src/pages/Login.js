import React, {useState} from "react";

const Login = (props) => {
    
  const AUTH_URL = `${props.api_url}/auth/github`
  return (
    

      <div className="auth-form-container">
            <div className="header">
                  <h1>WonderHop</h1>
            </div>
            <h2 className="login-text">Login</h2>
            <a href={AUTH_URL}>
          <button className="headerBtn"> 🔒 Login via Github </button>
        </a>
        </div>
    
  )
}

export default Login
