import React from "react";
import axios from "axios";
    import 'bootstrap/dist/css/bootstrap.css';

function Register () {
    const registerData = {
        name:"",
        email:"",
        password:""
    }

    const [register, setRegister]= React.useState(registerData);
    const handleChange = () =>{
        setRegister({name: document.getElementById("userName").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value})
        
    }
    const rediretToLogin = () =>{
        window.location.href="/login";
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(register);
        try{
            const response = await axios.post("http://localhost:8082/addUser", register);
            console.log(response.data);
            alert("User Registered");
        }catch(error){
            console.error(error);
        }
    }
    return(
    <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="card-body center" >
            <labe for="userName">Name</labe>
            <input type="text" id="userName" name="userName"placeholder="Enter Your name" value={register.name} onChange={handleChange}></input>
            <br></br>
            <labe for="email">Email</labe>
            <input type="email" id="email" name="email"placeholder="Enter Your email" value={register.email} onChange={handleChange}></input>
            <br></br>
            <labe for="password">Password</labe>
            <input type="password" id="password" name="password"placeholder="Enter Your password" value={register.password} onChange={handleChange}></input>
            <br></br>

        <a onClick={rediretToLogin}> have an account?</a>
        <br></br>
        <br></br>
        <div className="card col-sm-3">
        <button className="btn btn-success" type="submit">Register</button>
        <button className="btn btn-primary" type="reset">Reset</button>
        </div>
        </div>
        </form>
    </div>
    )
}
export default Register;