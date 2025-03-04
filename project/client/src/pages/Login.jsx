import React, {useState} from "react";

export const LoginPretty = (props) => {
    const {email, setEmail} = useState('');
    const {pass, setPass} = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }

    return (
        <div className="auth-form-container">
            <div className="header">
                  <h1>WonderHop</h1>
            </div>
            <h2 className="login-text">Login</h2>
             <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="emailaddress@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input htmlFor={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            <button type="submit">Sign Up with Github</button>
        </div>
       
    )
}

