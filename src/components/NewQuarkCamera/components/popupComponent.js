import React from 'react'
import ReactDOM from 'react-dom'
import "./popupComponent.scss"
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button style={{
              width: "100%",
              bottom: "10px",
              position: "absolute",
              border: "0px",
              backgroundColor: "#dd3b3b",
              height: "50px",
              color: "white"
          }} onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };
  export default Modal;