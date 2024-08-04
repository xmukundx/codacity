// "use client"
// import React, { Children, useRef } from 'react'

// const Modal = ({ isModalOpen, onClose, children }) => {
//     const modalRef = useRef(null);

//     const handleClose = (e) => {
//       if (e.target === modalRef.current) {
//         onClose();
//       }
//     };

// return (

//     <div className='h-screen w-full z-20 relative flex justify-center items-center '>
//         <div ref={modalRef} onClick={handleClose} className='glass fixed inset-0 w-full h-screen z-20'/>
//         <div className='bg-white z-30 '>
//             {children}
//         </div>
//     </div>

// )
// }

// export default Modal

"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ isModalOpen, handleModal, children }) => {
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef(null);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);


  if (!isModalOpen || !mounted) return null;

  const handleClose = (e) => {
    if (e.target === modalRef.current) {
      handleModal()
      };
    }

  return (
    <div className="relative flex w-full items-center justify-center ">
      <div
      ref={modalRef}
        onClick={handleClose}
        className="glass fixed place-items-center grid  inset-0 z-20"
      >
      <div className="z-30 absolute bg-white">{children}</div>

      </div>
    </div>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Modal;
