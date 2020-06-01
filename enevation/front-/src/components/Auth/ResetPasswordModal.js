import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'react-bootstrap';

import { Mutation } from 'react-apollo';
import { REQUEST_PASSWORD_RESET } from 'graphql/user';

let ResetPassword = ({ show, handleReset }) => {
  const [isOpen, setisOpen] = useState(show);

  const handleClose = () => {
    handleReset();
    setisOpen(false);
  };

  const [email, setEmail] = useState('');

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e, requestPasswordReset) => {
    e.preventDefault();
    requestPasswordReset().then(async ({ data }) => {
      setisOpen(false);
    });
  };

  return (
    <Mutation
      mutation={REQUEST_PASSWORD_RESET}
      variables={{
        input: { email },
      }}
    >
      {(requestPasswordReset, { loading, error: apiError }) => {
        return (
          <Modal show={isOpen} onHide={handleClose}>
            <Modal.Body>
              <div role='document'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h6 className='title'>Restore your Password</h6>
                  </div>

                  <div className='modal-body'>
                    <form onSubmit={e => handleSubmit(e, requestPasswordReset)}>
                      <p>
                        Enter your email and click the send code button. You’ll
                        receive a code in your email. Please use that code below
                        to change the old password for a new one.
                      </p>
                      <div className='form-group label-floating'>
                        <label className='control-label' htmlFor='email'>
                          Your Email
                        </label>
                        <input
                          className='form-control'
                          placeholder='james-spiegel@yourmail.com'
                          type='email'
                          value={email}
                          onChange={e => handleChange(e)}
                        />
                        {apiError && (
                          <span className='material-input-error'>
                            {apiError.graphQLErrors[0].message}
                          </span>
                        )}
                      </div>
                      <button className='btn btn-green btn-lg full-width'>
                        Send me the Code
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        );
      }}
    </Mutation>
  );
};

ResetPassword.propTypes = {
  show: PropTypes.bool.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default ResetPassword;
