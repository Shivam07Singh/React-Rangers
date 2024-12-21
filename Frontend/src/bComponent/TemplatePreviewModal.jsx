import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

const TemplatePreviewModal = ({ isOpen, onRequestClose, templateComponent: TemplateComponent }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={modalStyles}
    contentLabel="Template Preview"
  >
    <button onClick={onRequestClose} style={modalStyles.closeButton}>Close</button>
    <div style={modalStyles.templateContainer}>
      <TemplateComponent />
    </div>
  </Modal>
);

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    padding: '20px',
    overflow: 'auto',
  },
  templateContainer: {
    height: '100%',
    overflow: 'auto',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    padding: '10px',
    background: '#ff5f5f',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default TemplatePreviewModal;
