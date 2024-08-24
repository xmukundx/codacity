

"use client";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ openModal, handleModal, children }) => {
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef(null);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);


  if (!openModal || !mounted) return null;

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
        className="glass fixed place-items-center grid inset-0 z-20"
      >
      <div className="z-30 absolute bg-white">{children}</div>

      </div>
    </div>
  );
};

Modal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
export default Modal;
