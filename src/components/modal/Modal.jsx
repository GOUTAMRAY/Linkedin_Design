
import { LiaTimesSolid } from "react-icons/lia";
import "./Modal.scss";

const Modal = ({ children, hide }) => {
  return (
    <>
      <div className="modal-blur-area">
        <div className="modal-container">
          <div className="modal-header">
            <div className="header-content">
              <h2>Sign up</h2>
              <p>Its quick and easy</p>
            </div>
            <button onClick={() => hide(false)}> <LiaTimesSolid /></button>
          </div>
          <div className="modal-body">{ children }</div>
        </div>
      </div>
    </>
  )
}

export default Modal














