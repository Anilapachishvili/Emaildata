import "./Login.css";
import Users from "../img/User.png";
import Usericon from "../img/Vector.png";
import Eye from "../img/eye.png";
import { useState } from "react";
import User from "./User";
function Login () {

   const[IsLoggedIn, setIsLoggedIn ] = useState(false);
   const[userName, setUsarName  ] = useState("");


    

    return(
        <div>
    {IsLoggedIn ?(
        <div >
         <User hello={userName}  />
         <button >logout</button>
         </div>
    ):(
           
         <div className="flex">
            <div className="bgcolor">
             
                <div className="blucolor">
                 <img src={Users}alt="" />
                </div>
                <h3>Login</h3>
                <p>Hello My Frined</p>
                <div className="text">
                <form><input type="text" placeholder="Email" required onChange={(e)=> setUsarName(e.target.value)} /></form>
                <img className="icon" src={Usericon} alt="" />
                </div>
                <div className="text">
                <form><input class="lastinput" type="password" placeholder="Password" required autoComplete="none" /> </form>
                <img className="eye" src={Eye} alt="" />
                </div>
                <div className="btn">
                <button onClick={() => setIsLoggedIn(true)}>LOG IN</button>
                </div>    
             </div>     
         </div>
         ) }
        </div>
    )
   }

export default Login;