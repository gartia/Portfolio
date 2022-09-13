import Modal from "react-modal";
import { useState, useEffect } from "react";

const GalleryModal = ({ openGalleryModal, modalInfo }) => {
  useEffect(() => {
    openGalleryModal.current = openModal;
  }, []);

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
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-slate-400 rounded-lg shadow-md lg:shadow-lg"
          >
            <div className="text-center  font-semibold text-3xl lg:text-4xl text-black">
              {modalInfo.title}
            </div>
            <p>{modalInfo.description}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default GalleryModal;
