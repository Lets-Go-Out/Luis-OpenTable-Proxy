import React from 'react';
import ReactModal from 'react-modal';
// ReactModal.setAppElement('#gallery-container');
//
const modalStyle = {
  content: {
    position: 'fixed',
    left: '46%',
    bottom: '100px',
    background: '#fff',
    borderRadius: '4px',
    outline: 'none',
    padding: '5px',
    width: '350px',
    height: '280px',
  },
};

const Report = (props) => {
  const { showModal, handleCloseModal } = props;
  return (
    <div>
      <div width="200" position="relative">
        <ReactModal
          isOpen={showModal}
          contentLabel="Report"
          onRequestClose={handleCloseModal}
          className="modal1"
          overlayClassName="overlay"
          style={modalStyle}
        >
          <div className="ReportDiv">
            <h4 align="left">Report a photo problem</h4>
            <hr />
            <button className="lana-btn lana-btn-primary" type="button" onClick={() => props.handleCloseModal()}>
              Unrelated to restaurant
            </button>
            &nbsp;
            <button className="lana-btn lana-btn-primary" type="button" onClick={() => props.handleCloseModal()}>
              Inappropriate content
            </button>
            &nbsp;
            <button className="lana-btn lana-btn-primary" type="button" onClick={() => props.handleCloseModal()}>
              I do not like this photo
            </button>
            &nbsp;
            <button className="lana-btn lana-btn-default" type="button" onClick={() => props.handleCloseModal()}>
              Cancel
            </button>
            &nbsp;
          </div>
        </ReactModal>
      </div>
    </div>
  );
}

export default Report;
