<<<<<<< HEAD

import { IoIosHome } from "react-icons/io";
import {  MdPeopleAlt } from "react-icons/md";

import { IoSearch, IoNotificationsSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { BsBagDashFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
=======
import { GrGroup } from "react-icons/gr";
import { VscGame } from "react-icons/vsc";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosHome, IoIosNotifications } from "react-icons/io";
import { MdOutlineOndemandVideo,  MdOutlineCalendarViewMonth } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
>>>>>>> parent of c6c6e2a (linkedin design)

import "./Header.scss"
const Header = () => {
  return (
    <>
        {/* header section start  */}
        <div className="header">
       <div className="container header-container">
        <div className="row header-row">
          <div className="col-md-3 collum-abc"> 
            <div className="header-fb-search">
               <img style={{width:"40px"}} src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png" alt="" />
               <div className="fff-box">
                  <span> <IoSearch />  </span>
                  <input type="text" placeholder="Search" />
               </div>

            </div>
          </div>
          <div className="col-md-6 collum-def">
             <div className="fb-menu">
              <ul>
                <li> <Link to="/" className={location.pathname === "/" ? "active" : ""}>  <IoIosHome />  </Link> </li>
                <li><Link to="/video" className={location.pathname === "/video" ? "active" : ""}><MdOutlineOndemandVideo /> </Link></li>
                <li><Link to="/marketPlace" className={location.pathname === "/marketPlace" ? "active" : ""}> <MdOutlineCalendarViewMonth />  </Link></li>
                <li> <Link to="/group" className={location.pathname === "/group" ? "active" : ""}><GrGroup />  </Link> </li>
                <li> <Link to="/game" className={location.pathname === "/game" ? "active" : ""}> <VscGame />  </Link></li>
              </ul>
             </div>
          </div> 

          <div className="col-md-3 collum-fgh">
              <div className="right-menu">
                <ul>
                  <li> <Link> <CgMenuGridR />  </Link> </li>
                  <li> <Link> <FaFacebookMessenger />  </Link></li>
                  <li> <Link><IoIosNotifications /> </Link> </li>
                  <Link> <img style={{width: "40px", height:"40px", borderRadius:"50%" , objectFit: "cover"}} src="https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/92460140_507303053271172_3822400947888324608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=ereNXr_g49kAX-MeG9h&_nc_ht=scontent.fdac24-4.fna&oh=00_AfCxP1_hbtpgXaf1oKqITv2BaqmEy4yR2eiwDKgriNGsYQ&oe=65AD3D2D" alt="" />  </Link>
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













