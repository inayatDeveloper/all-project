import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody } from 'react-bootstrap';

import { MAX_POST_IMAGE_SIZE } from 'constants/ImageSize';
import Avatar from '../Avatar';
import { BeatLoader } from 'react-spinners';

const UploadImageModal = ({
  isShowing,
  hide,
  handleImageUpload,
  status,
  handleStatusChange,
  imagePreview,
  handleSubmitForm,
  createPost,
  auth,
  override,
  loading,
  apiError,
  onImageDelete,
}) => {
  const [error, setError] = useState('');
  let handlePostImageSize = e => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size >= MAX_POST_IMAGE_SIZE) {
      setError(
        `File size should be less then ${MAX_POST_IMAGE_SIZE / 1000000}MB`
      );
      return;
    }
    handleImageUpload(e);
  };

  return (
    <Modal
      show={isShowing}
      onHide={() => hide()}
      dialogClassName='window-popup update-header-photo'
      aria-labelledby='contained-modal-title-vcenter'
    >
      <Modal.Header closeButton>
        <h6 className='title'>Add Photos</h6>
      </Modal.Header>
      <ModalBody>
        <div
          className=''
          id='update-header-photo'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='update-header-photo'
          aria-hidden='true'
        >
          <div className='' role='document'>
            <div className='modal-content'>
              <div className='modal-body'>
                <form className='d-flex p-3'>
                  <div className='author-thumb'>
                    <Avatar image={auth.user.image} />
                  </div>
                  <div className='form-group label-floating is-empty w-100 ml-3 mb-0'>
                    <BeatLoader
                      css={override}
                      sizeUnit={'px'}
                      size={20}
                      color={'#123abc'}
                      loading={loading}
                    />
                    <label className='control-label' htmlFor='share post'>
                      Share what you are thinking here...
                    </label>
                    <textarea
                      className='form-control'
                      name='status'
                      value={status}
                      onChange={e => handleStatusChange(e)}
                    />
                  </div>
                </form>

                {imagePreview && (
                  <div className='thumbnail-gallery-items'>
                    <ul className='d-flex p-0 m-3 list-unstyled'>
                      <li>
                        <img
                          className='video-bnr'
                          src={imagePreview}
                          alt='images'
                        />

                        <button
                          type='button'
                          className='btn p-0 m-0'
                          onClick={() => onImageDelete()}
                        >
                          x
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
                {apiError && (
                  <span className='text-center d-block text-danger mt-1'>
                    {apiError && apiError}
                    {error && <span> error </span>}
                  </span>
                )}
                <div className='upload-content'>
                  <ul className='d-flex p-3 m-0 list-unstyled justify-content-between align-items-center flex-wrap'>
                    <li>
                      <button type='button' className='btn px-3 py-2 m-0'>
                        <input
                          type='file'
                          name='image'
                          id='multi'
                          onChange={e => handlePostImageSize(e)}
                        />
                        <svg
                          height='24'
                          viewBox='0 0 24 24'
                          width='24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            className='heroicon-ui'
                            d='M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 8.59V6H4v6.59l4.3-4.3a1 1 0 0 1 1.4 0l5.3 5.3 2.3-2.3a1 1 0 0 1 1.4 0l1.3 1.3zm0 2.82l-2-2-2.3 2.3a1 1 0 0 1-1.4 0L9 10.4l-5 5V18h16v-2.59zM15 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'
                          />
                        </svg>
                        Photo
                      </button>
                    </li>
                    <li>
                      <button
                        type='button'
                        className='btn btn-saved px-3 py-2 m-0'
                        onClick={e => handleSubmitForm(e, createPost)}
                      >
                        Save
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};
UploadImageModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  handleImageUpload: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  handleStatusChange: PropTypes.func.isRequired,
  imagePreview: PropTypes.string.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  override: PropTypes.any,
  loading: PropTypes.any,
  apiError: PropTypes.any,
  onImageDelete: PropTypes.func.isRequired,
};

export default UploadImageModal;
