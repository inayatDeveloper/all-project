import React, { useState } from 'react';
import { Field } from 'components/ProfileSetting';
import { RESET_PASSWORD } from 'graphql/user';
import { Mutation } from 'react-apollo';

import { useStore } from 'store';
const PasswordSetting = () => {
  const [{ auth }] = useStore();
  const [values, setValues] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
    token: localStorage.getItem('token'),
  });
  const { password, newPassword, confirmPassword, token } = values;
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  let onSubmitHandler = (e, resetPassword) => {
    e.preventDefault();
    resetPassword().then(async data => {});
  };
  return (
    <Mutation
      mutation={RESET_PASSWORD}
      variables={{
        input: {
          email: auth.user.email,
          token: token,
          password: newPassword,
        },
      }}
    >
      {(resetPassword, { loading, error: apiError }) => {
        return (
          <>
            <div className='ui-block-title block-title-bg'>
              <h6 className='title'>Change Password</h6>
            </div>
            <div className='ui-block-content'>
              <form onSubmit={e => onSubmitHandler(e, resetPassword)}>
                <div className='row'>
                  <div className='col-12'>
                    <Field
                      placeholder='Confirm Current Password'
                      type='password'
                      name='password'
                      value={password}
                      handleChange={handleChange}
                    />
                  </div>

                  <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <Field
                      placeholder='your New Password'
                      type='password'
                      name='newPassword'
                      value={newPassword}
                      handleChange={handleChange}
                    />
                  </div>
                  <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <Field
                      placeholder='Confirm New Password'
                      type='password'
                      name='confirmPassword'
                      value={confirmPassword}
                      handleChange={handleChange}
                    />
                  </div>

                  <div className='col col-lg-12 col-sm-12 col-sm-12 col-12'>
                    <div className='remember'>
                      <div className='checkbox'>
                        <label>
                          <input name='optionsCheckboxes' type='checkbox' />
                          Remember Me
                        </label>
                      </div>

                      <a
                        href
                        className='forgot'
                        data-toggle='modal'
                        data-target='#restore-password'
                      >
                        Forgot my Password
                      </a>
                    </div>
                  </div>

                  <div className='col-12'>
                    <button className='btn btn-primary btn-lg full-width'>
                      Change Password Now!
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        );
      }}
    </Mutation>
  );
};
export default PasswordSetting;
