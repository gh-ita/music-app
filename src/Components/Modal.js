import React from 'react';
import Modal from 'react-modal';
import { FaTimes } from "react-icons/fa";
import '../Style/Modale.css'

const NewModal = ({ isOpen, closeModal, content }) => {
  return (
    <Modal style={{
      content: {
        width: '50%',
        margin: 'auto', 
        height:'60%',
      },
    }}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <div className = "Modal">
          <a onClick={closeModal}><FaTimes className='icon'/></a>
        {content}
      </div>
    </Modal>
  );
};

export default NewModal;
