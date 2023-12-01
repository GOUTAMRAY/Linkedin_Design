

import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import "./Auth.scss";
import Modal from "../../components/modal/Modal";
import { useState } from "react";

// login page facebook
const Auth = () => {
  const [ modal , setModal ] = useState(false);

  return (
    <> 
     <Meta title= "Facebook - log in or sign up" />

        {
          modal &&  <Modal hide={setModal}> 
             <form action="#" className="sign-up-form">
               <div className="h-form">
                 <input type="text" placeholder="First Name" />
                 <input type="text" placeholder="Surname" />
               </div>
               <input type="text" placeholder="Mobile Number or Email Address"/>
               <input type="text" placeholder="New Password"/>

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
    </>
  )
}

export default Auth;



