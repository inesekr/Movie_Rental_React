
const Footer = ()=>{

  // console.log("This is my Footer component");
  return(
    <div id="footer">
      <div id="footer-left">Made by: Inese Krole</div>
      <div id="footer-right">&copy; {new Date().getFullYear()}</div>
    </div>
  )

};

export default Footer;