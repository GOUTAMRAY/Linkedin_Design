import { SlCalender } from "react-icons/sl";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaRegSadCry,FaRegComment, FaEdit } from "react-icons/fa";
import { RiCheckboxBlankFill, RiMoneyCnyBoxFill, RiShareForwardLine  } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import { FaEarthAmericas } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { AiFillLike,AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillBoxFill, BsThreeDots } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";



import { Modal } from "react-bootstrap";

import "./Home.scss"

import { Button, Card } from "react-bootstrap";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPosts, deletePosts, getAllPosts, updatePosts } from "../../redux/post/actions";






const Home = () => {
     const [modal , setModal ] = useState();
     const [modalEdit , setModaledit ] = useState(false);
    

     const dispatch = useDispatch();
     const { posts, loading } = useSelector((state) => state.post)

     const [ input , setInput ] = useState({
       name : "",
       desc : "",
       pr_photo : "",
       po_photo : ""
     });

     

     // show modal
     const handleModalShow = () => {
          setModal(true)
     }
     // hide modal
     const handleModalHide = () => {
          setModal(false)
     }
     


     // handle inut change 
     const handleInputChange = (e) => {
       setInput((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value
       }))
     };


  // GET ALL STUDENT 
  useEffect(() => {
     dispatch(getAllPosts())
  }, []);

  // handleDeletePost
  const handleDeletePost = (id) => {
    dispatch(deletePosts(id))
  };
 
  // add new student 
  const handleCreate = () => {

     if (modalEdit) {
       dispatch(updatePosts(input));
       setModaledit(false);

     }else{
       dispatch(addNewPosts(input));
       handleModalHide()
       setInput({
        name : "",
        desc : "",
        pr_photo : "",
        po_photo : ""
       })
     }
    
  };
    
  // handleStudentEdit
  const handleStudentEdit = (item) => {
    setInput(item);
    handleModalShow()
    setModaledit(true)

  }

  // 

  return (
    <>
      <PageHeader title={"Feed"}/>

    {/* create post modal  */}
    <Modal show={modal} className="popup-modal" onHide={handleModalHide}> 
      <Modal.Header className="popup-modal-box"> 
          {loading && "LoadingBar......"}
          <div className="modal-text">
             <h3> { modalEdit ? "Update Post" : "Create Post"}  </h3>
             <button onClick={handleModalHide}> <RxCross2 /> </button>
          </div>
      </Modal.Header>
      <Modal.Body> 
           <form onSubmit={handleCreate}>
             <div className="my-3">
               <label> Name </label>
               <input type="text"  className="form-control" name="name" value={input.name}  onChange={handleInputChange}/>
             </div>
             <div className="my-3">
               <label> Desc </label>
               <input type="text"  className="form-control" name="desc" value={input.desc}  onChange={handleInputChange}/>
             </div>
             <div className="my-3">
               <label> Profile Photo </label>
               <input type="text"  className="form-control" name="pr_photo" value={input.pr_photo}  onChange={handleInputChange}/>
             </div>
             <div className="my-3">
               <label> Post Photo </label>
               <input type="text" className="form-control" name="po_photo" value={input.po_photo}  onChange={handleInputChange}/>
             </div>
             <div className="my-3">
              { modalEdit ?  <Button type="submit"> Update </Button> :  <Button type="submit"> Post </Button>}
             
             </div>
           </form>
      </Modal.Body>
    </Modal>
      


    {/* banner section start */}
    <div className="banner my-4">
      <div className="container banner-container">
        <div className="row banner-row">

          {/* left sideber */}
          <div className="col-md-3 banner-left-side" style={{width: "310px"}}>
            <div className="left-ber-fixed" > 
              <Card >
                 <img src="https://media.licdn.com/dms/image/D4E16AQGJ0eRRS1vLRg/profile-displaybackgroundimage-shrink_200_800/0/1667039952615?e=1711584000&v=beta&t=x_5dnk3pZN-evH6Chyoxgmx-0MNafQhQAO6k29i6Klg" alt="" />
                <Card.Body>
                  <div className="profile-box-link text-center "style={{marginTop: "-40px"}} >
                    <img style={{width: "50px", height: "50px" , borderRadius: "50%", }} src="https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/92460140_507303053271172_3822400947888324608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=D-ksgHWSn68AX-jdMKu&_nc_ht=scontent.fdac24-4.fna&oh=00_AfC26sOqiF8grnt8kInsWJXVzoxBAVvwb4D2HbNKIz80mQ&oe=65D99FAD" alt="" />
                    <h3 style={{fontSize: "22px"}}>Goutam Ray  </h3>
                    <p style={{fontSize: "13px"}}>Full-Stack Developer | Expert in Front-End & Back-End Development </p>
                  </div>
                   <hr />
                   <div className="ppp-box "> 
                     <div className="profile-views d-flex justify-content-between">
                        <p style={{fontSize: "14px"}}> Profile viewers  </p> <span style={{fontSize: "15px", color: "#0a66c2"}}> 30</span>    
                     </div>
                     <div className="profile-views  d-flex justify-content-between " style={{marginTop: "-7px"}} >
                        <p style={{fontSize: "14px"}} > Post impressions </p > <span style={{fontSize: "15px", color: "#0a66c2"}}> 40</span>  
                     </div>
                  </div>
                  <div className="last-box">
                    <p style={{fontSize: "12px"}}> Access exclusive tools & insights </p>
                    <p style={{fontSize: "13px"}}> <span style={{fontSize: "14px", color: "#f8c77e"}}> <RiCheckboxBlankFill /></span> Try for BDT0 </p>
                  </div>
                  <hr />
                  <div className="last-box">
                    <p style={{fontSize: "13px"}}> <span style={{fontSize: "14px", color: "#000"}}> <RiCheckboxBlankFill /></span> My items </p>
                  </div>


                </Card.Body>
              </Card>

              <Card className="mt-2"> 
                <Card.Body> 
                <div className="recent-abcdef">
                  <p style={{ fontSize: "13px"}}> Recent </p>
                  <div className="recent-box">
                    <div className="ppp-abc d-flex gap-2"> 
                      <span style={{fontSize: "18px" , marginTop: "-5px"}}> <FaPeopleGroup /> </span>
                       <p style={{fontSize: "13px"}}> Frontend Developers - HTML, C....</p>
                    </div>
                    <div className="ppp-abc d-flex gap-2"> 
                      <span style={{fontSize: "18px" , marginTop: "-5px"}}> <BsFillBoxFill /> </span>
                       <p style={{fontSize: "13px"}}> POSTPONED:The Logistics of Labo....</p>
                    </div>
                    <div className="ppp-abc d-flex gap-2"> 
                      <span style={{fontSize: "18px" , marginTop: "-5px"}}> <FaPeopleGroup /> </span>
                       <p style={{fontSize: "13px"}}> JavaScript Learning Group , linke.</p>
                    </div>
                    <div className="ppp-abc d-flex gap-2"> 
                      <span style={{fontSize: "18px" , marginTop: "-5px"}}> <FaPeopleGroup /> </span>
                       <p style={{fontSize: "13px"}}> Developers, Engineers & Techies....</p>
                    </div>
                    <div className="ppp-abc d-flex gap-2"> 
                      <span style={{fontSize: "18px" , marginTop: "-5px"}}> <FaPeopleGroup /> </span>
                       <p style={{fontSize: "13px"}}> Developers, Engineers & Techies....</p>
                    </div>
                    </div>
                </div>

                <div className="recent-abcdef">
                  <p style={{color: "#1877f2", fontSize: "13px"}}> Groups </p>
                  <div className="recent-box">
                    <div className="ppp-abc d-flex gap-2"> 
                      <span style={{fontSize: "18px" , marginTop: "-5px"}}> <FaPeopleGroup /> </span>
                       <p style={{fontSize: "13px"}}> Frontend Developers - HTML, C....</p>
                    </div>
                    <div className="ppp-abc d-flex gap-2"> 
                      <span style={{fontSize: "18px" , marginTop: "-5px"}}> <FaPeopleGroup /> </span>
                       <p style={{fontSize: "13px"}}> POSTPONED:The Logistics of Labo....</p>
                    </div>
                    <div className="ppp-abc d-flex gap-2"> 
                      <span style={{fontSize: "18px" , marginTop: "-5px"}}> <FaPeopleGroup /> </span>
                       <p style={{fontSize: "13px"}}> JavaScript Learning Group , linke.</p>
                    </div>
                    <div className="ppp-abc d-flex gap-2"> 
                      <span style={{fontSize: "18px" , marginTop: "-5px"}}> <FaPeopleGroup /> </span>
                       <p style={{fontSize: "13px"}}> JavaScript </p>
                    </div>
                    <div className="ppp-abc d-flex gap-2"> 
                      <span style={{fontSize: "18px" , marginTop: "-5px"}}> <FaPeopleGroup /> </span>
                       <p style={{fontSize: "13px"}}> Developers, Engineers & Techies....</p>
                    </div>
                    <div className="ppp-abc d-flex gap-2"> 
                      <span style={{fontSize: "18px" , marginTop: "-5px"}}> <FaPeopleGroup /> </span>
                       <p style={{fontSize: "13px"}}> JavaScript Developer</p>
                    </div>
                    <div className="ppp-abc d-flex gap-2"> 
                      <span style={{fontSize: "18px" , marginTop: "-5px"}}> <FaPeopleGroup /> </span>
                       <p style={{fontSize: "13px"}}> Jobs 4 Devs: JavaScript, Python, </p>
                    </div>
                    </div>
                </div>

                <div className="recent-abcdef">
                  <div className="text-icon d-flex "> 
                    <p style={{color: "#1877f2", fontSize: "13px", width: "200px"}}> Events </p>
                    <span style={{fontSize: "25px" , marginTop: "-5px"}}> + </span>
                  </div>
                  <div className="recent-box">
                    <div className="ppp-abc d-flex gap-2"> 
                      <span style={{fontSize: "18px" , marginTop: "-5px"}}> <BsFillBoxFill /> </span>
                       <p style={{fontSize: "13px"}}> Using ChatGPT in Research</p>
                    </div>
                    <div className="ppp-abc d-flex gap-2"> 
                      <span style={{fontSize: "18px" , marginTop: "-5px"}}> <BsFillBoxFill /> </span>
                       <p style={{fontSize: "13px"}}> POSTPONED:The Logistics of Lab</p>
                    </div>            
                    <div className="ppp-abc d-flex gap-2"> 
                       <p style={{fontSize: "13px", marginLeft: "25px"}}> See all</p>
                    </div>            
                  </div>
                </div>
                <p style={{color: "#1877f2", fontSize: "13px", }} > Followed Hashtags</p>
                <hr /> 
                <div className="footer-dis">
                  <h6 className="text-center"> Discover more </h6>
                </div>
                </Card.Body>
              </Card>
              </div>
          </div>

          {/* middle-bar */}
          <div className="col-md-6 middle-box">

            {/* profile box start */}
            {/* <div className="profile-box">
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
            </div> */}

            {/* post-box-section */}
            <div className="post-box ">
               <Card className="post-box-card"> 
                <Card.Body className="post-box-body">
                 <div className="img-input">
                    <img  style={{height:"35px", width: "35px", borderRadius:"50%"}} src="https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/92460140_507303053271172_3822400947888324608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=D-ksgHWSn68AX-jdMKu&_nc_ht=scontent.fdac24-4.fna&oh=00_AfC26sOqiF8grnt8kInsWJXVzoxBAVvwb4D2HbNKIz80mQ&oe=65D99FAD" alt="" />
                   <input type="text"  placeholder="Start a post" className="form-control" onClick={handleModalShow}/>
                 </div>
        
                 <div className="live-box mt-2">
                   <div className="icon-image">
                       <ul>
                        <li> 
                          <span className="live-video"><GoFileMedia /> </span>
                          <p> Media </p>
                        </li>
                        <li> 
                          <span className="photo-video"> <SlCalender /> </span>
                          <p> Event </p>
                        </li>
                        <li> 
                          <span className="sad-video"><CiViewList /> </span>
                          <p> Write article </p>
                        </li>
                       </ul>
                   </div>
                 </div>
                </Card.Body>
               </Card>
            </div>

            {/* single view section  */}
           
            {posts.length === 0 ? " Not Post Found ": posts.map((item, index) => {
               return <Card key={index} className="my-3">  <div className="author-box" >
               <div className="author-header" >
                  <Card.Body className="auth-box-body">
                   <div className="header-content-data"> 
                   <div className="author-image-box">
                      <img style={{height:"40px", width: "40px", borderRadius: "50%"}} src={item.pr_photo} alt="" />
                    <div className="content-box">
                      <h2> {item.name} </h2>
                      <p> 9 min age <span> <FaEarthAmericas /></span></p>
                    </div>
                  </div>
                   <div className="author-close">
                      <button onClick={() => handleStudentEdit(item)}> <HiOutlineDotsHorizontal /> </button>
                     <button onClick={() => handleDeletePost(item.id)}> <RxCross2 /> </button>
                    </div>
                 </div>
                 <p> {item.desc} </p>
                 </Card.Body>
               <img style={{maxWidth:"100%"}} src={item.po_photo} alt="" />
          
                <div className="card-foter">                  
                    <div className="footer-left">
                       <ul>
                        <li className="like-icon"> <AiFillLike /></li>
                        <li> <FcLike /></li>
                        <li className="sad-icon"> <FaRegSadCry />  </li>
                        <p> 35 </p>
                        
                       </ul>
                    </div>
                    <div className="footer-right">
                        <p> 35 comments</p>
                        <p> 5 shares</p>
                    </div>
                
                </div>
                <div className="abcddeff"> </div>
              
                <div className="like-comment-share">
                 
                  <ul>
                    <li> <span><AiOutlineLike /> </span> Like </li>
                    <li> <span><FaRegComment /> </span> Comment </li>
                    <li> <span><RiShareForwardLine /> </span> Share </li>
                    <li> <img style={{width:"35px", height: "30px", borderRadius:"50%"}} src="https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/92099167_507299896604821_1009659898331398144_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7a1959&_nc_ohc=9QRPm8kifNsAX98XYsw&_nc_ht=scontent.fdac24-4.fna&oh=00_AfAOhyBK2qSIq5oOGc_Vu24t774CQzK0-strXDgSiRVPJg&oe=65D99E28" alt="" /> <span> <MdOutlineArrowDropDown /> </span> </li>
                  </ul>
                </div>

                {/* comment box */}
                {/* <div className="comment-box p-3">
                  <p> View more comments </p>
                  <div className="replay-box">
                        <img style={{width: "20px", height: "20px" , borderRadius: "50%"}} src="https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/92460140_507303053271172_3822400947888324608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=ereNXr_g49kAX9Oy7He&_nc_ht=scontent.fdac24-4.fna&oh=00_AfBPU6H5TyNt3BQJ2GRAuUAWo1PPuGIZyNjGwzquu9fLlA&oe=65AFA7ED" alt="" />
                    <div className="name-box">
                      <div className="name-interbox">
                         <h6> Goutam ray </h6>
                         <p> interested </p>
                      </div>
                      <div className="bbbb-cd">
                         <ul>
                           <li> 4d </li>
                           <li> Like </li>
                           <li> Replay </li>
                         </ul>
                      </div>

                    </div>
                  </div>
                </div> */}


              </div>
              </div>
              </Card>
            })}
              
            
           

          </div>

         {/* right site ber  */}
          <div className="col-md-3 banner-right-side">
              <Card>
                <Card.Body>
                  <div className="head-box d-flex justify-content-between">
                     <h6>Add to your feed </h6>
                     <span><RiMoneyCnyBoxFill /> </span>
                  </div>
                  <div className="follow-box d-flex mt-2 gap-3">
                    <div className="left-follow">
                      <img style={{height: "60px", width: "60px", objectFit: "cover", cursor: "pointer" , borderRadius: "50%"}} src="https://media.licdn.com/dms/image/D560BAQHEVvSj_xs2ug/company-logo_100_100/0/1690783827840/upay_ucbfintech_logo?e=1714003200&v=beta&t=W0Ve2LxSQDE9oGD132FSV71W-kTDYd_I75stN1BJ3_A" alt="" />
                    </div>
                    <div className="right-follow">
                      <h6 style={{fontSize: "14px", cursor: "pointer"}}> উপায় (UCB Fintech Company Limited) </h6>
                      <p style={{fontSize: "12px", cursor: "pointer"}}> Company • Financial Services </p>
                      <button className="btn btn-outline-secondary" style={{borderRadius: "25px", fontWeight: "600", cursor: "pointer"}}> <span> + </span> Follow </button>

                    </div>
                  </div>
                  <div className="follow-box d-flex mt-2 gap-3">
                    <div className="left-follow">
                      <img style={{height: "60px", width: "60px", objectFit: "cover", cursor: "pointer",  borderRadius: "50%"}} src="https://media.licdn.com/dms/image/D5603AQEThUnyF5AAvw/profile-displayphoto-shrink_100_100/0/1673797122500?e=1711584000&v=beta&t=0GLSGPOul8Z1lhMnFyI6bxaAxIGHH4PIMjmVg-lFncM" alt="" />
                    </div>
                    <div className="right-follow">
                      <h6 style={{fontSize: "14px", cursor: "pointer"}}> Aysha Jui</h6>
                      <p style={{fontSize: "12px", cursor: "pointer"}}> Talent Acquisition  </p>
                      <button className="btn btn-outline-secondary" style={{borderRadius: "25px", fontWeight: "600", cursor: "pointer"}}> <span> + </span> Follow </button>

                    </div>
                  </div>
                  <div className="follow-box d-flex mt-2 gap-3">
                    <div className="left-follow">
                      <img style={{height: "60px",  borderRadius: "50%", width: "60px", objectFit: "cover", cursor: "pointer"}} src="https://media.licdn.com/dms/image/C5103AQH9iMsmifpfAw/profile-displayphoto-shrink_100_100/0/1571823823953?e=1711584000&v=beta&t=86bFF_kghQK-VMFeV7b1loD575LRJR7NTvdVLcFyjWI" alt="" />
                    </div>
                    <div className="right-follow">
                      <h6 style={{fontSize: "14px", cursor: "pointer"}}> Solaiman Shukhon </h6>
                      <p style={{fontSize: "12px", cursor: "pointer"}}> Director Innovation & Insights,Nagad </p>
                      <button className="btn btn-outline-secondary" style={{borderRadius: "25px", fontWeight: "600", cursor: "pointer"}}> <span> + </span> Follow </button>

                    </div>
                  </div>
                  <div className="head-box d-flex mt-2 ">
                     <h6 className="mx-3 mt-1">Add to your feed </h6>
                     <span ><FaArrowRight /> </span>
                  </div>
                </Card.Body>
              </Card>

              <Card className="mt-3 sticky-box-right-abc">
                <Card.Body className="sticky-box-right">
                   <div className="ad-dot">
                    <p className="text-end"> ad <span> <BsThreeDots /></span></p>
                   </div>
                <div className="abcd-aadde text-center"> 
                   <div className="content-side-ber">
                    <p style={{fontSize: "13px", cursor: "pointer"}} > New year, new Premium features </p>
                    <div className="img-biv-boxa d-flex gap-2 justify-content-center">
                        <img  style={{width: "100px", height: "100px", borderRadius: "5px"}} src="https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/92460140_507303053271172_3822400947888324608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=D-ksgHWSn68AX-jdMKu&_nc_ht=scontent.fdac24-4.fna&oh=00_AfC26sOqiF8grnt8kInsWJXVzoxBAVvwb4D2HbNKIz80mQ&oe=65D99FAD" alt="" />
                        <img style={{width: "100px", height: "100px"}} src="https://media.licdn.com/dms/image/D5610AQF9GZypHh5TUQ/image-pad_100_100/0/1704791517859?e=1706446800&v=beta&t=-lV93SqkPJCmpl9kfly1VqZwnyzhZIMfQ_kewWbjeVs" alt="" />
                      </div>
                   </div>
                   <p style={{fontSize: "14px", cursor: "pointer", marginTop: "5px"}}> Stand out by marking jobs as your top choice </p>
                   <button className="btn " style={{color: "#0a66c2", border: "1px solid #0a66c2"}}> Try for free </button>
                  </div>
                </Card.Body>
              </Card>

              <div className="last-privacy-box mt-3">
                <ul  className="d-flex gap-3 justify-content-center">
                  <li  > 
                    <a style={{ color: "#000", fontSize: "12px"}} href="#"> About </a>
                  </li>
                  <li> 
                    <a style={{ color: "#000", fontSize: "12px"}} href="#"> Accessibility </a>
                  </li>
                  <li> 
                    <a style={{ color: "#000" , fontSize: "12px"}} href="#"> Help Center </a>
                  </li>
                </ul>
                <ul  className="d-flex gap-3 justify-content-center">
                  <li  > 
                    <a style={{ color: "#000", fontSize: "12px"}} href="#"> Privacy & Terms  </a>
                  </li>
                  <li> 
                    <a style={{ color: "#000", fontSize: "12px"}} href="#"> Ad Choices </a>
                  </li>
                  
                </ul>
                <ul  className="d-flex gap-3 justify-content-center">
                  <li  > 
                    <a style={{ color: "#000", fontSize: "12px"}} href="#"> Advertising </a>
                  </li>
                  <li> 
                    <a style={{ color: "#000", fontSize: "12px"}} href="#"> Business Services  </a>
                  </li>
                </ul>
                <ul  className="d-flex gap-3 justify-content-center">
                  <li  > 
                    <a style={{ color: "#000", fontSize: "12px"}} href="#"> Get the LinkedIn app</a>
                  </li>
                  <li> 
                    <a style={{ color: "#000", fontSize: "12px"}} href="#"> More  </a>
                  </li>
                </ul>
              </div>

              <div className="linkedin-box d-flex justify-content-center mt-3">
                <img src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" alt="" />
                <p style={{ fontSize: "12px", marginLeft: "5px", position: "relative", top: "9px"}}> LinkedIn Corporation © 2024 </p>
              </div>
           
          </div>

              
            
            
     

        </div>
      </div>
    </div>

    <div className="message-box-bottom d-flex gap-2 justify-content-between" style={{ width: "250px", backgroundColor: "#fff"}}>
      <div className="left-message-box d-flex gap-2">
         <img style={{height: "25px", width: "25px", borderRadius: "50%"}} src="https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/92460140_507303053271172_3822400947888324608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=D-ksgHWSn68AX-MdBnr&_nc_ht=scontent.fdac24-4.fna&oh=00_AfCq7HU26mMjiK8kfLXOX2deGS-O_-weAlnlz7QuDqznhg&oe=65D9D7ED"  alt="" />
        <p> Message </p>
      </div>
      <div className="right-message-box mt-2">
         <div className="single-abcd ">
           <span className="d-flex gap-3"> <BsThreeDots /> <FaEdit /> <IoIosArrowUp /> </span>
         </div>
      </div>
    </div>
    </>
  )
}

export default Home









