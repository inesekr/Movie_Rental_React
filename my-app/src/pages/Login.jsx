import { Outlet, Link } from "react-router-dom";
import {useState} from 'react';

const Login = () => {
  // return (
  //   <h1>Here will be my login page</h1>
  // )
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [newName, setNewName] = useState("");
  const [newSurname, setNewSurname] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newEmailRepeat, setNewEmailRepeat] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");

  const handleLogin = () =>{

    // console.log("handleLogin event trigered");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user)=>user.email===email && user.password === password);

    if(user){
      localStorage.setItem("isLoggedIn", true);
      window.location.reload();
    } else {
      alert ("Incorrect email or password");
    }
  };

  const handleRegister = () => {
    // event.preventDefault();

    // console.log("register button event trigered");

    if (newEmail!== newEmailRepeat){
      alert("Emails do not match!");
      return;
    } 
   if(newPassword !== newPasswordRepeat){
      alert("Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const taken = users.find((user)=> user.email === newEmail);

    if(taken){
      alert("Email is already taken");
      return;
    }
     
      users.push({name: newName, surname: newSurname, email:newEmail, password: newPassword});
      localStorage.setItem("users", JSON.stringify(users));
      setShowRegister(false);
      alert ("Registered succesfully. You can now log in!");
      window.location.reload();
  }

  return (
    <div>
      {!showRegister ? (
        <>
         <div id="login"> 
         <label for="email">Email</label>
         <input
        type = "email" 
        placeholder = "Email" 
        value= {email}
        onChange={(e)=> setEmail(e.target.value)}
        />
        <label for="password">Password</label>
        <input
        type = "password" 
        placeholder = "Password" 
        value= {password}
        onChange={(e)=> setPassword(e.target.value)}
        />
        <button id="signin-button" onClick={handleLogin}>Sign in</button>
        </div>
        <button id="register-button" onClick={()=> setShowRegister(true)}>Register</button>
        </>
      ) :(
        <> 
          <div id="login"> 
          <label for="email">Email</label>
          <input
            type = "email" 
            placeholder = "Email" 
            value= {email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <label for="password">Password</label>
          <input
            type = "password" 
            placeholder = "Password" 
            value= {password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <button id="signin-button" onClick={handleLogin}>Sign in</button>
          </div>

          <div id="login"> 
          <label for="name">Name</label>
          <input
            type = "text" 
            placeholder = "name" 
            value= {newName}
            onChange={(e)=> setNewName(e.target.value)}
          />
          <label for="surname">Surname</label>
          <input
            type = "text" 
            placeholder = "surname" 
            value= {newSurname}
            onChange={(e)=> setNewSurname(e.target.value)}
          />
          <label for="email">Email</label>
          <input
            type = "email" 
            placeholder = "Email" 
            value= {newEmail}
            onChange={(e)=> setNewEmail(e.target.value)}
          />
          <label for="email">Email again</label>
          <input
            type = "email" 
            placeholder = "Email again" 
            value= {newEmailRepeat}
            onChange={(e)=> setNewEmailRepeat(e.target.value)}
          />
          <label for="password">Password</label>
          <input
            type = "password" 
            placeholder = "Password" 
            value= {newPassword}
            onChange={(e)=> setNewPassword(e.target.value)}
          />
          <label for="password">Password again</label>
           <input
            type = "password" 
            placeholder = "Password again" 
            value= {newPasswordRepeat}
            onChange={(e)=> setNewPasswordRepeat(e.target.value)}
          />
          <button id="register-button" onClick={handleRegister}>Register</button>
          </div>
        </>
      )}            
    </div>
  )
};

export default Login;