import React, { useState } from "react";
import axios from "axios";

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
    return(
    
    <div className="container">
        <form onSubmit={handleSubmit}> 
        <label>User ID</label>
        <br></br>
        <input type="email" placeholder="Enter Your Email ID" value={userID} onChange={setUserID}></input>
        <br></br>
        <input type="password" placeholder="Enter Your password" value={password} onChange={setPassword}></input>
        <br></br>
        <br></br>
        <a onClick={rediretToRegister}>Don't have an account</a>
        <br></br>
        <br></br>
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
        </form>
    </div>
    )
}
export default Login;