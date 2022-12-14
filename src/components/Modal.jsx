import Modal from "react-modal";
import { useState, useEffect } from "react";
/*
This is a generic modal that can be created on the fly
*/
const GalleryModal = ({ openGalleryModal, modalInfo }) => {
  useEffect(() => {
    openGalleryModal.current = openModal;
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      contentLabel="Modal"
      className="bg-stone-800 bg-opacity-75 h-screen"
    >
      <div onClick={closeModal} className="h-screen flex flex-col ">
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            onClick={(e) => e.stopPropagation()}
            className="p-12 w-full md:w-1/2
            px-6 py-10 sm:px-10 sm:py-6 
            bg-slate-400 rounded-lg shadow-md lg:shadow-lg"
          >
            <div className="text-center  font-semibold text-3xl lg:text-4xl text-black">
              {modalInfo.title}
            </div>
            <p className="text-center">{modalInfo.description}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default GalleryModal;
