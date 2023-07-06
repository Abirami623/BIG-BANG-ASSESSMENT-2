import React, { useState } from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";
function Home() {

  const navigate = useNavigate();
  const [ user,setUser] = useState({
    "UserId":0,
    "EmailId":" ",
    "Role":"",
    "Token":""
  });
  var login=()=>{
    navigate("/Login");
  }
  return (
    <div className="image">
    <div className="container">
       <nav class="nav nav-pills flex-column flex-sm-row">
  <a class="flex-sm-fill text-sm-center nav-link active" href="#">Home</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">About Us</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Services</a>
</nav>
<br></br><br></br><br></br>
<div>
 <h1 className="Text1">HEALTHCARE HOSPITAL</h1> 
 <br></br>
 <h3 className="Text2">WELCOME! IT'S TIME TO CARE YOUR HEALTH BECAUSE HEALTH IS UR WEALTH</h3>
</div>
</div><br></br><br></br>


 
 
  {/* Sign In Section */}
  <section className="sign-in text-center">
        <div className="container">
          
          
          <button className="btn btn-primary btn-lg" onClick={login}>Sign In</button>
        </div>
      </section>
      </div>
      

  );
  }



export default Home;
