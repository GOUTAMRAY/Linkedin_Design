import { SlCalender } from "react-icons/sl";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaRegSadCry,FaRegComment } from "react-icons/fa";
import { RiCheckboxBlankFill, RiShareForwardLine  } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import { FaEarthAmericas } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { AiFillLike,AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillBoxFill } from "react-icons/bs";

import { Modal } from "react-bootstrap";

import "./Home.scss"

import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import axios from "axios";
import Swal from "sweetalert2";




const Home = () => {
     const [modal , setModal ] = useState();
     const [modalEdit , setModaledit ] = useState();
     const [students, setStudents] = useState([]);
   
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
     
     // show modal
     const handleUpdateModalShow = () => {
      setModaledit(true)
     }
     // hide modal
     const handleUpdateModalHide = () => {
      setModaledit(false)
     }

     // handle inut change 
     const handleInputChange = (e) => {
       setInput((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value
       }))
     };

   // get all students 
   const getAllPosts = async () => {
      const response =  await axios.get("http://localhost:5000/students?_sort=id&_order=desc");
      setStudents(response.data);
   };



     // handleCreatePost
     const handleCreatePost = async(e) => {
        e.preventDefault();

        if (!input.name || !input.po_photo || !input.pr_photo || !input.desc) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All Fields Are Required!",
            footer: 'Please fill up all information'
          });
        }else{
          await axios.post("http://localhost:5000/students", input);
          setInput({
            name : "",
            desc : "",
            pr_photo : "",
            po_photo : ""
          })
          getAllPosts()
          handleModalHide();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Post Created Successfull",
            showConfirmButton: false,
            timer: 1500
          });
        }

   
     };
   
     // handleEditPost
     const handleEditPost = (id) => {
      setInput(students.find(data => data.id === id))
      handleUpdateModalShow();
     };

     // handleUpdatePost
     const handleUpdatePost = async (e) => {
        e.preventDefault();

        await axios.patch(`http://localhost:5000/students/${input.id}`, input)
        getAllPosts();
        handleUpdateModalHide();
        Swal.fire("Updated SuccessFull!");

     }

     // handleDeletePost
     const handleDeletePost = async (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
             axios.delete(`http://localhost:5000/students/${id}`)

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          getAllPosts();
        }
      });
     };



     useEffect(() => {
      getAllPosts();

     }, []);

    

  return (
    <>
      <PageHeader title={"Home"}/>

    {/* create post modal  */}
    <Modal show={modal} className="popup-modal" onHide={handleModalHide}> 
      <Modal.Header className="popup-modal-box"> 
          <div className="modal-text">
             <h3> Create post </h3>
             <button onClick={handleModalHide}> <RxCross2 /> </button>
          </div>
      </Modal.Header>
      <Modal.Body> 
           <form onSubmit={handleCreatePost}>
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
              <Button type="submit"> Post </Button>
             </div>
           </form>
      </Modal.Body>
    </Modal>
      
    {/* create Update modal  */}
    <Modal show={modalEdit} className="popup-modal" onHide={handleUpdateModalHide}> 
      <Modal.Header className="popup-modal-box"> 
          <div className="modal-text">
             <h3> Update post </h3>
             <button onClick={handleUpdateModalHide}> <RxCross2 /> </button>
          </div>
      </Modal.Header>
      <Modal.Body> 
           <form onSubmit={handleUpdatePost}>
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
              <Button type="submit"> Update </Button>
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
              <Card>
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
                  </div>
                </div>
                </Card.Body>
              </Card>
           
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
           
            {students.length === 0 ? " Not Post Found ": students.map((item, index) => {
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
                      <button> <HiOutlineDotsHorizontal onClick ={() => handleEditPost(item.id)}/> </button>
                     <button onClick ={() => handleDeletePost(item.id)}> <RxCross2 /> </button>
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

                </Card.Body>
              </Card>
           
          </div>

              
            
            
     

        </div>
      </div>
    </div>
    </>
  )
}

export default Home









