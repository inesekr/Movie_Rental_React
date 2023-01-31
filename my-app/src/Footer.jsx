// import React from 'react';
const Footer = ()=>{
  // <footer>
  //   <div>Made by: Inese Krole</div>
  //   <div>{new Date().getFullYear()}</div>
  // </footer>
  console.log("This is my Footer component");
  return(
  // <p>My Footer</p>
    <div id="footer">
    <div id="footer-left">Made by: Inese Krole</div>
    <div id="footer-right">&copy; {new Date().getFullYear()}</div>
    </div>
  )

};

export default Footer;