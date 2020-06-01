import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';

import { VERIFY_TOKEN, RESET_PASSWORD } from 'graphql/user';

import * as Routes from 'routes';

/**
 * Reset password page
 */
const ResetPassword = ({ history, location, refetch }) => {
  const [values, setValues] = useState({ password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e, resetPassword) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError('Enter password and Confirm password.');
      return;
    } else if (password.length < 6) {
      setError('Password min 6 characters');
      return;
    } else if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setError('');
    resetPassword()
      .then(async ({ data }) => {
        localStorage.setItem('token', data.resetPassword.token);
        await refetch();
        history.push(Routes.HOME);
      })
      .catch(err => {
        setError(err);
      });
  };

  const { password, confirmPassword } = values;

  const url = new URLSearchParams(location.search);
  const email = url.get('email');
  const token = url.get('token');

  return (
    <div className='col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12'>
      <div>
        <Query query={VERIFY_TOKEN} variables={{ email, token }}>
          {({ loading, error: apiError }) => {
            if (apiError)
              return <h1>This token is either invalid or expired!</h1>;

            return (
              <Mutation
                mutation={RESET_PASSWORD}
                variables={{
                  input: { email, password, token },
                }}
              >
                {(resetPassword, { loading, error: apiError }) => {
                  if (apiError) return <h1>{apiError}</h1>;

                  return (
                    <div>
                      <div className='registration-login-form'>
                        <div className='tab-content'>
                          <div
                            className='tab-pane active'
                            id='home'
                            role='tabpanel'
                            data-mh='log-tab'
                          >
                            <div className='title h6'>Reset Password</div>

                            <form
                              className='content'
                              onSubmit={e => handleSubmit(e, resetPassword)}
                            >
                              <div className='row'>
                                <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                                  <input
                                    type='password'
                                    name='password'
                                    values={password}
                                    onChange={handleChange}
                                    placeholder='Password'
                                    className='form-control'
                                  />
                                </div>
                                <br />
                                <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                                  <input
                                    type='password'
                                    name='confirmPassword'
                                    values={confirmPassword}
                                    onChange={handleChange}
                                    placeholder='Confirm Password'
                                    className='form-control'
                                  />
                                </div>
                              </div>
                              <br />
                              <div className='row'>
                                <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                                  {error && (
                                    <div bottom='sm' top='sm'>
                                      <span>{error}</span>
                                    </div>
                                  )}

                                  <button className='btn btn-lg btn-primary full-width'>
                                    Reset Password
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }}
              </Mutation>
            );
          }}
        </Query>
      </div>
    </div>
  );
};

export default withRouter(ResetPassword);
