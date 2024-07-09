"use client";

import React, { useRef } from "react";

const AddButton = () => {

  // modal logic
  const modalRef = useRef(null);
  const closeModal = () => {
    document.getElementById("ptaNahiModal").close();
  };
  const handleOverlayClick = (e) => {
    if (e.target === modalRef.current) {
      closeModal();
    }
  };


  return (
    <>
      <button
        className="group cursor-pointer outline-none "
        title="Add New"
        onClick={() => modalRef.current.showModal()}
      >
        this is button
      </button>
      <dialog
        id="ptaNahiModal"
        className="glass w-auto"
        ref={modalRef}
        onClick={handleOverlayClick}
      >
        yo boi

        <div className="p-2 cursor-pointer text-blue-600" onClick={closeModal}>
          Close
        </div>
      </dialog>
    </>
  );
};

export default AddButton;
