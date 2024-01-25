
import { IoIosHome, IoIosNotifications } from "react-icons/io";
import {  MdPeopleAlt } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoSearch, IoNotificationsSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { BsBagDashFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

import "./Header.scss"
const Header = () => {
  const location = useLocation();
  
  return (
    <>
        {/* header section start  */}
        <div className="header">
       <div className="container header-container">
        <div className="row header-row">
          <div className="col-md-3 collum-abc"> 
            <div className="header-fb-search">
               <img style={{width:"40px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="" />
               <div className="fff-box">
                  <span> <IoSearch />  </span>
                  <input type="text" placeholder="Search Facebook" />
               </div>

            </div>
          </div>
          <div className="col-md-8 collum-def">
             <div className="fb-menu">
              <ul>
                <li> <Link to="/" className={location.pathname === "/" ? "active" : ""}>  <IoIosHome /> </Link> <span> Home </span>  </li>
                <li><Link to="/video" className={location.pathname === "/video" ? "active" : ""}><MdPeopleAlt /> </Link> <span> My Network </span>  </li>
                <li><Link to="/marketPlace" className={location.pathname === "/marketPlace" ? "active" : ""}> <BsBagDashFill />  </Link> <span> Jobs </span> </li>
                <li> <Link to="/group" className={location.pathname === "/group" ? "active" : ""}><AiFillMessage /> </Link> <span> Messaging </span>  </li>
                <li> <Link to="/game" className={location.pathname === "/game" ? "active" : ""}> <IoNotificationsSharp />  </Link> <span> Notifications </span>  </li>
                <li> <Link> <img style={{width: "25px", height:"25px", borderRadius:"50%" , objectFit: "cover" , marginLeft: "-9px"}} src="https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/92460140_507303053271172_3822400947888324608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=D-ksgHWSn68AX-jdMKu&_nc_ht=scontent.fdac24-4.fna&oh=00_AfC26sOqiF8grnt8kInsWJXVzoxBAVvwb4D2HbNKIz80mQ&oe=65D99FAD" alt="" />  </Link><span> me </span> </li>
                <li> <Link> <TbGridDots /></Link>  <span> For Business</span>  </li>
                <li> <Link> </Link>  <span> Try Premium for BDT0 </span>  </li>
              </ul>
             </div>
          </div> 

        </div>
       </div>
        </div>
    </>
  )
}

export default Header













