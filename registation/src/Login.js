import React, { useState } from "react";
import axios from "axios";
import './Login.css'

function Login () {
const [password, setPasswordValue] = useState("");
const [userID, setUserIDValue] = useState("");

    const setUserID = (e) =>{
        setUserIDValue(e.target.value);
    }

    const setPassword = (e) =>{
        setPasswordValue(e.target.value);
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log("This is your " + userID +" and password is "+ password);
        //create object with login  and assword for passing the api.
        const data = {
        "userId":userID,
        "password":password
        }
        try{
            const response = await axios.post("http://localhost:8082/login",data);
            if(response.data==false){
                alert("Invalid credentials");
            }else{
                alert("Login successfully");
            }
        }catch(error){
            console.error(error);
        }
    }
    const rediretToRegister=()=>{
        window.location.href="/register";
    }

     const handleReset = () => {
  
  };

    return(
    
    <div className="login-container">
        <form className="login-form"onSubmit={handleSubmit}>
            <div className="form-section">
          <h2>Create Account</h2> 
          <div className="input-group">
        <label>User ID</label>
        <br></br>
        <input type="email" id="email" placeholder="Enter Your Email ID" value={userID} onChange={setUserID}></input>
        <br></br></div>
        <div className="input-group">
            <label>Password</label>
        <input type="password" id="password" placeholder="Enter Your password" value={password} onChange={setPassword}></input>
        <br></br></div>
        <br></br>
        <div className="login-link">
        <a onClick={rediretToRegister}>Don't have an account</a></div>
        <br></br>
        <br></br>
        <div className="button-group">
        <button className="btn btn-success" type="submit">Login</button>
        <button className="btn btn-danger" type="reset" onClick={handleReset}>Reset</button>
        </div>
        </div>
        </form>
    </div>
    )
}
export default Login;