import { IoMdSad } from "react-icons/io";
import { MdAddPhotoAlternate, MdOutlineArrowDropDown  } from "react-icons/md";
import { FaVideoSlash,FaRegSadCry,FaRegComment } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FaEarthAmericas } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { AiFillLike,AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { RiShareForwardLine } from "react-icons/ri";

import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import "./Home.scss"

import { friendImgbox, leftImgbox, storyBox } from "../../components/faker/Faker";
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

    const response =  await axios.get("http://localhost:5000/students");
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

            {/* profile box start */}
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
                   <input type="text"  placeholder="What's on your mind, Goutam?" className="form-control" onClick={handleModalShow}/>
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
                    <li> <img style={{width:"30px", height: "30px", borderRadius:"50%"}} src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/412697090_10163332975443574_1837286943140103346_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=c42490&_nc_ohc=l-sfSwmBH_sAX_GAETC&_nc_ht=scontent.fdac24-3.fna&oh=00_AfAKQFnfNcpXTNDgCNH23azciRqVDrrgGDcETXFs0jMTrA&oe=658AE37F" alt="" /> <span> <MdOutlineArrowDropDown /> </span> </li>
                  </ul>
                </div>


              </div>
              </div>
              </Card>
            })}
              
            
           

          </div>

          {/* right sideber */}
          <div className="col-md-3 fb-right-sideBar "> 
              <div className="pages-profile">
                <h5> Your Pages and profiles </h5>
                <span>  <HiOutlineDotsHorizontal /> </span>
               
              </div>
              <hr />
              <div className="friend-request">
                <h6> Friend requests </h6>
                <h6> <Link> See all </Link>  </h6>
              </div>
              <div className="confirm-box">
                <div className="confirm-box-left">
                  <img style={{width:"60px", height:"60px", borderRadius: "50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWz-jIOefjn7FdX6GKDGk3q_xprYS9EOBY_2O8xd9jg&s" alt="" />
                </div>
                <div className="confirm-box-right">
                  <div className="right-box-a">
                    <div className="confirm-abc">
                      <h6> Rahim ray </h6>
                      <div className="name-box">
                      <img style={{width:"20px", height:"20px", borderRadius: "50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWz-jIOefjn7FdX6GKDGk3q_xprYS9EOBY_2O8xd9jg&s" alt="" />
                      <p> 2 matual friends</p>
                      </div>
                    </div>
                    <div className="confirm-def">
                       <p> 3d </p>
                    </div>
                  </div>
                  <div className="right-box-b">
                     <Button variant="primary"> Confirm </Button>
                     <Button  className="delete-btn"> Delete </Button>
                  </div>

                </div>
              </div>
              <hr />  
              <div className="pages-profile">
                <h5> Contacts </h5>
                <span className="contact-abc-search"> <IoSearch /> <HiOutlineDotsHorizontal /> </span>
              </div>
              <div className="contact-box-fri">
                { friendImgbox.map((item, index) => {
                  return  <div className="img-view" key={index}>
                  <img style={{height:"35px", width: "35px" , borderRadius: "50%"}} src={item.photo} alt="" />
                 <div className="dot-ab"></div>
                  <p> {item.content} </p>
                </div>
                })}
               
              </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Home









