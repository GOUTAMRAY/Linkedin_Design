import { IoIosHome, IoIosNotifications,IoMdSad } from "react-icons/io";
import { MdOutlineOndemandVideo,  MdOutlineCalendarViewMonth,  MdAddPhotoAlternate  } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { VscGame } from "react-icons/vsc";
import { CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger,FaVideoSlash,FaRegSadCry,FaRegComment } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FaEarthAmericas } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { AiFillLike,AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { RiShareForwardLine } from "react-icons/ri";

import "./Home.scss"
import { Link } from "react-router-dom";
import { leftImgbox, storyBox } from "../../components/faker/Faker";
import { Card } from "react-bootstrap";


const Home = () => {
 

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
                  <input type="text" placeholder="Search Facebook" />
               </div>

            </div>
          </div>
          <div className="col-md-6 collum-def">
             <div className="fb-menu">
              <ul>
                <li> <Link>  <IoIosHome />  </Link> </li>
                <li><Link><MdOutlineOndemandVideo /> </Link></li>
                <li><Link> <MdOutlineCalendarViewMonth />  </Link></li>
                <li> <Link><GrGroup />  </Link> </li>
                <li> <Link> <VscGame />  </Link></li>
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

    {/* banner section start */}
    <div className="banner my-4">
      <div className="container banner-container">
        <div className="row banner-row">
          {/* left sideber */}
          <div className="col-md-3 banner-left-side">
            {leftImgbox.map((item, index) => {
              return <Link key={index}> 
              <div className="left-box" >
                <img style={{width: "40px", height:"40px",  borderRadius: "50%"}} src={item.photo} alt="" />
                <h3> {item.content} </h3> 
             </div>
           </Link> 
            })}
           
          </div>
          {/* middle-bar */}
          <div className="col-md-6 middle-box">
            <div className="profile-box">
              <div className="profile-img-box shadow">
                 <img style={{height:"200px", width: "150px"}} src="https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/92460140_507303053271172_3822400947888324608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=ereNXr_g49kAX_sqooY&_nc_ht=scontent.fdac24-4.fna&oh=00_AfA6_cN5eotuc9dzUlmcYc1or_YPlvm0AbDxAUq3XTLmYw&oe=65ADE5ED" alt="" />
                 <h4 className="img-plus"><FiPlus /></h4>
                 <p  className="story"> Create story </p>
              </div>

              {storyBox.map((item, index) => {
                return  <div className="profile-img-box-aa shadow" key={index}>
                <img className="detail-img" src={item.sto_photo} alt="" />
                <div className="photo-ff"> <img style={{height:"35px", width: "35px", borderRadius:"50%"}} src={item.pro_Photo} alt="" /></div>
                <p  className="story-text"> {item.pro_name} </p>
             </div>
              })}
             
            </div>

            {/* post-box-section */}
            <div className="post-box my-3">
               <Card className="post-box-card"> 
                <Card.Body className="post-box-body">
                 <div className="img-input">
                    <img  style={{height:"35px", width: "35px", borderRadius:"50%"}} src="https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/92460140_507303053271172_3822400947888324608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=ereNXr_g49kAX_sqooY&_nc_ht=scontent.fdac24-4.fna&oh=00_AfA6_cN5eotuc9dzUlmcYc1or_YPlvm0AbDxAUq3XTLmYw&oe=65ADE5ED" alt="" />
                   <input type="text"  placeholder="What's on your mind, Goutam?" className="form-control"/>
                 </div>
                 <hr />
                 <div className="live-box">
                   <div className="icon-image">
                       <ul>
                        <li> 
                          <span className="live-video"><FaVideoSlash /> </span>
                          <p> Live video </p>
                        </li>
                        <li> 
                          <span className="photo-video"> <MdAddPhotoAlternate /> </span>
                          <p> Photo/video </p>
                        </li>
                        <li> 
                          <span className="sad-video"><IoMdSad /> </span>
                          <p> Feeling/activity </p>
                        </li>
                       </ul>
                   </div>
                 </div>
                </Card.Body>
               </Card>
            </div>

            {/* single view section  */}
            <Card> 
              <div className="author-box">
                <div className="author-header">
                    <Card.Body className="auth-box-body">
                    <div className="author-image-box">
                        <img style={{height:"30px", width: "30px", borderRadius: "50%"}} src="https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/92460140_507303053271172_3822400947888324608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=ereNXr_g49kAX_sqooY&_nc_ht=scontent.fdac24-4.fna&oh=00_AfA6_cN5eotuc9dzUlmcYc1or_YPlvm0AbDxAUq3XTLmYw&oe=65ADE5ED" alt="" />
                      <div className="content-box">
                        <h2> Goutam ray </h2>
                        <p> 9 min age <span> <FaEarthAmericas /></span></p>
                      </div>
                   </div>
                   <div className="author-close">
                    <button> <HiOutlineDotsHorizontal /> </button>
                    <button> <RxCross2 /> </button>
                   </div>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci culpa debitis ex accusantium reiciendis voluptatibus vel at hic iure.</p>
                 </Card.Body>
                 <img style={{maxWidth:"100%"}} src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/412697090_10163332975443574_1837286943140103346_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=c42490&_nc_ohc=l-sfSwmBH_sAX_GAETC&_nc_ht=scontent.fdac24-3.fna&oh=00_AfAKQFnfNcpXTNDgCNH23azciRqVDrrgGDcETXFs0jMTrA&oe=658AE37F" alt="" />
            
                  <div className="card-foter">                  
                      <div className="footer-left">
                         <ul>
                          <li> <AiFillLike /></li>
                          <li> <FcLike /></li>
                          <li> <FaRegSadCry />  </li>
                         </ul>
                      </div>
                      <div className="footer-right">
                          <p> 35 comments</p>
                      </div>
                  
                  </div>
                  <hr />
                
                  <div className="like-comment-share">
                    <ul>
                      <li> <span><AiOutlineLike /> </span> Like </li>
                      <li> <span><FaRegComment /> </span> Comment </li>
                      <li> <span><RiShareForwardLine /> </span> Share </li>
                    </ul>
                  </div>


                </div>
              </div>
            </Card>

          </div>
          {/* right sideber */}
          <div className="col-md-3">

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home










