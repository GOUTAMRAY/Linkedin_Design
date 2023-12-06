
import { CiSquarePlus } from "react-icons/ci";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import "./Auth.scss";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import { Day, Month } from "../../components/faker/Faker";
import { createToast } from "../../helpers/helper";

// get fb years 
const years = Array.from({length : 100}, ( _, i) => new Date().getFullYear() - i

)

// login page facebook
const Auth = () => {
  const [ modal , setModal ] = useState(false);
  const [ input , setInput ] = useState({
    first_name : "",
    sur_name : "",
    moe : "",
    password : "",
    day: "",
    month : "",
    years : "",
    gender : ""

  });

  const [ border , setBorder ] = useState({
    first_name : true,
    sur_name : true,
    moe : true,
    password : true,
    day: true,
    month : true,
    years : true,
    gender : true,

  });

  // handle input change 

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  // handleinputSubmit
  const handleinputSubmit = (e) => {
      e.preventDefault();

     // validation 
     if(!input.first_name || !input.sur_name || !input.password || !input.moe){
      createToast("All fields are required")
     }else{
      createToast("Data stable", "success")    
     }
  }

  // handleInputBlur
  const handleInputBlur = (e) => {
      if(e.target.value === ""){
            setBorder((prevState) => ({
              ...prevState,
              [e.target.name] : false,
            }))
      }else{
        setBorder((prevState) => ({
          ...prevState,
          [e.target.name] : true,
        }))

      }
  }

  return (
    <> 
     <Meta title= "Facebook - log in or sign up" />

        {
          modal &&  <Modal hide={setModal}> 
             <form onSubmit={handleinputSubmit} className="sign-up-form">
               <div className="h-form">
                <input type="text" className={border.first_name ? "" : "red-border"} placeholder="First Name" name="first_name" value={input.first_name}  onChange={handleInputChange} onBlur={handleInputBlur} />
                 <input type="text" className={border.first_name ? "" : "red-border"} placeholder="Surname" name="sur_name" value={input.sur_name} onChange={handleInputChange} onBlur={handleInputBlur} />
               </div>
               <input type="text" className={border.first_name ? "" : "red-border"} placeholder="Mobile Number or Email Address" name="moe" value={input.moe}   onChange={handleInputChange} onBlur={handleInputBlur} />
               <input type="text" className={border.first_name ? "" : "red-border"} placeholder="New Password" name="password" value={input.password}  onChange={handleInputChange} onBlur={handleInputBlur} />

           <div className="reg-extra">
                <span className="reg-extra-title"> Date of birth <FaQuestionCircle /> </span>
                 <div className="reg-extra-option">
                   <select id="" name="day"  value={input.day}  onChange={handleInputChange} >
                    {Day?.map((item , index) =>  <option value={item} key={index} selected={new Date().getDate() === item ? true : false }> {item} </option> )}                    
                   </select>

                   <select id="" name="month"  value={input.month} onChange={handleInputChange} >
                    {Month?.map((item, index) => <option value={item} key={index} selected={new Date().getMonth() === index ? true : false }> {item} </option>)}                   
                   </select>

                   <select id="" name="years" value={input.years} onChange={handleInputChange} >
                    {years?.map((item, index) =>  <option value={item} key={index} selected={new Date().getFullYear() === item ? true : false }>{item} </option>)}                    
                   </select>

                 </div>
              </div>

              <div className="reg-extra">
                <span className="reg-extra-title" > Gender <FaQuestionCircle /> </span>
                 <div className="reg-extra-option">
                   <label >
                    <span> Female </span>
                    <input name="gender" type="radio" value="Female"  onChange={handleInputChange}/>
                   </label>
                   <label >
                    <span> Male </span>
                    <input name="gender"  type="radio" value= "Male"  onChange={handleInputChange} />
                   </label>
                   <label >
                    <span> Custom </span>
                    <input name="gender"  type="radio" value= "Custom"  onChange={handleInputChange} />
                   </label>
                 </div>
              </div>

             <p className="fb-text"> People who use our service may have uploaded your contact information to Facebook. <Link> Learn more.</Link> </p>
             <p className="fb-text">By clicking Sign Up, you agree to our <Link>Terms</Link>, <Link>Privacy Policy</Link> and <Link>Cookies Policy</Link> . You may receive SMS notifications from us and can opt out at any time.</p>
             <button className="sign-btn" type="submit"> Sign Up </button>
             </form>

        </Modal>
        }

  
      
      <div className="fb-auth-area">
        <div className="fb-auth-container">
          <div className="fb-auth-left">
             <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
             <h2>Facebook helps you connect and share with the people in your life.</h2>
          </div>
          <div className="fb-auth-right">
            <div className="fb-auth-box">
              <form action="#">
                <input type="text"  placeholder="Email address or phone number"/>
                <input type="password"  placeholder="Password"/>
                <button className="login-btn">Log in</button>
              </form>
              <Link to=""> Forgotten password? </Link>
              <div className="divider"></div>
              <button onClick={() => setModal(true)} className="create-btn"> Create new account </button>
            </div>
            <div className="fb-author-desc">
               <p> <Link> Create a Page</Link>  for a celebrity, brand or business. </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer-part">
         <div className="footer-container">
            <div className="btn-links">
              <span> English (UK) </span>
              <Link> বাংলা </Link>
              <Link> অসমীয়া </Link>
              <Link> हिन्दी </Link>
              <Link> नेपाली</Link>
              <Link> Bahasa Indonesia </Link>
              <Link> 中文(简体) </Link>
              <Link> Bahasa Melayu </Link>
              <Link> Bahasa Melayu </Link>
              <Link> Español </Link>
              <Link> Português (Brasil) </Link>
            </div>
            <div className="plus-box"> 
               <span> <CiSquarePlus /> </span>
            </div>

         </div>
      </div>

   <div className="extra-footer">
    <div className="extra-container">
      <div className="btn-link">
              <Link> Sign Up </Link>
              <Link> Log in</Link>
              <Link> Messenger</Link>
              <Link> Facebook </Link>
              <Link> LiteVideo </Link>
              <Link> Places </Link>
              <Link> Games </Link>
              <Link> Marketplace  </Link>
              <Link> Meta Pay</Link>
              <Link> Meta Store </Link>
              <Link> Meta Quest  </Link>
              <Link> Instagram </Link>
              <Link> Threads </Link>
              <Link> Fundraisers </Link>
              <Link> Services  </Link>
              <Link> Voting Information Centre </Link>
              <Link> Privacy Policy </Link>
              <Link> Privacy Centre </Link>
              <Link> Groups  </Link>
              <Link> About </Link>
              <Link> Create ad </Link>
              <Link> Create Page </Link>
              <Link> Developers  </Link>
              <Link> Careers </Link>
              <Link> Cookies </Link>
              <Link> Terms </Link>
              <Link> Contact uploading and non-usersSettings </Link>
            </div>
    </div>
   </div>

    </>
  )
}

export default Auth;



