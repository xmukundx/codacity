"use client"
import React, { Children, useRef } from 'react'

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);
  
    const handleClose = (e) => {
      if (e.target === modalRef.current) {
        onClose();
      }
    };

return (
    
    <div className='h-screen w-full z-20 relative flex justify-center items-center '>
        <div ref={modalRef} onClick={handleClose} className='glass fixed inset-0 w-full h-screen z-20'/>
        <div className='bg-white z-30 '>
            {children}
        </div>
    </div>
  
)
}

export default Modal