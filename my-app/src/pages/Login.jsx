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

    let regexp = /\S+@\S+\.\S+/; //this checks for format anything@anything.anything
    let regexpLetters = /^[A-Za-z]*$/; //allows only letters, NO spaces

    if(newName===""){
      alert ("Please enter your name!");
      newName.focus();
      return false;
    }
    if(newName.length < 2){
      alert ("Name must be at least 2 characters long!");
      newName.focus();
      return false;
    }
    if( !regexpLetters.test(newName)){
      // if( !nameReg.value.match(regexpLetters))
      alert ("Name must include letters only!");
      newName.focus();
      return false;
    }

    if(newSurname===""){
      alert ("Please enter your surname!");
      newSurname.focus();
      return false;
    }
    if(newSurname.length < 2){
      alert ("Surname must be at least 2 characters long!");
      newSurname.focus();
      return false;
    }
    if( !regexpLetters.test(newSurname)){
      // if( !nameReg.value.match(regexpLetters))
      alert ("Surname must include letters only!");
      newSurname.focus();
      return false;
    }
    if (newEmail ==="" ){
      alert ("Please enter your email address!");
      newEmail.focus();
      return false;
    }
    if( !regexp.test(newEmail)){
      alert ("Please enter your email address in correct format!");
      newEmail.focus();
      return false;
    }
    if (newEmail!== newEmailRepeat){
      alert("Emails do not match!");
      return;
    } 
    if(newPassword === ""){
      alert ("Please enter your password!");
      newPassword.focus();
      return false;
  }
  if(newPassword.length<8){
      alert ("Password must be at least 8 characters long!");
      newPassword.focus();
      return false;
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
         <label htmlFor="email">Email</label>
         <input
        type = "email" 
        placeholder = "Email" 
        value= {email}
        onChange={(e)=> setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
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
          <label htmlFor="email">Email</label>
          <input
            type = "email" 
            placeholder = "Email" 
            value= {email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type = "password" 
            placeholder = "Password" 
            value= {password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <button id="signin-button" onClick={handleLogin}>Sign in</button>
          </div>

          <div id="login"> 
          <label htmlFor="name">Name</label>
          <input
            type = "text" 
            placeholder = "name" 
            value= {newName}
            onChange={(e)=> setNewName(e.target.value)}
          />
          <label htmlFor="surname">Surname</label>
          <input
            type = "text" 
            placeholder = "surname" 
            value= {newSurname}
            onChange={(e)=> setNewSurname(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type = "email" 
            placeholder = "Email" 
            value= {newEmail}
            onChange={(e)=> setNewEmail(e.target.value)}
          />
          <label htmlFor="email">Email again</label>
          <input
            type = "email" 
            placeholder = "Email again" 
            value= {newEmailRepeat}
            onChange={(e)=> setNewEmailRepeat(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type = "password" 
            placeholder = "Password" 
            value= {newPassword}
            onChange={(e)=> setNewPassword(e.target.value)}
          />
          <label htmlFor="password">Password again</label>
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