import React from "react"
import Add from "../img/addAvatar.png"
const Login=()=>{
    return(
        <div className="formContainer">
          <div className="formWrapper">
            <span className="logo">Neha</span>
            <span className="title">Login</span>
            <form>
              
              <input type="email" placeholder="email"/>
              <input type="password" placeholder="password"/>
              
              <button>sign up</button>
            </form>
            <p>If account already exists? Register</p>
          </div>
        </div>
    )
}
export default Login