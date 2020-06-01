import React from 'react';

const hideModal = () => {
  let emailVerificationModal = document.getElementById('emailVerification');
  if (emailVerificationModal) {
    emailVerificationModal.classList.remove('email-verification-modal-visible');
  }
};

const EmailVerificationModal = () => {
  return (
    <div className='modal' id='emailVerification' tabIndex='-1' role='dialog'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Welcome!</h5>
            <button
              onClick={hideModal}
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <p>
              A link to verify your account has been sent to your email address.
            </p>
          </div>
          <div className='modal-footer'>
            <button
              onClick={hideModal}
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmailVerificationModal;
