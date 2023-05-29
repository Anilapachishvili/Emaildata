import "./User.css";
import Icon from "../img/User.png"
import BlackIcon from "../img/blackuser.png"
function User (props) {
    return(
        <div className="flex">
          <div className="whitebgcolor">
            <div className="bg">
            <img src={Icon} alt="" />
            </div>
             <h1>{props.hello}</h1>
             <div>
                <img src={BlackIcon} alt="" />
             </div>
             <div className="logout">
                <button onClick={props.logout}>LOG OUT</button>
             </div>
          </div>
        </div>
    )
}

export default User;