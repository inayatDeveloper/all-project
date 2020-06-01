import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SIGN_IN } from 'graphql/user';
import { MainLayout } from 'pages/Auth';

import { Field, ResetPasswordModal } from 'components/Auth';
import { validateFormField } from 'utils';
import * as Routes from 'routes';
const SignIn = ({ refetch, history }) => {
  const [reset, setReset] = useState(false);

  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    email: '',
    password: '',
  });
  const { email, password, captcha } = values;

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    let fieldError = validateFormField(name, value);
    setError({ ...error, ...fieldError });
  };

  const validate = () => {
    if (!email || !password) {
      if (!email)
        setError({
          ...error,
          email: 'email is required',
        });
      else if (!password)
        setError({ ...error, password: 'password is required' });
      else return true;
    }
    return false;
  };
  const handleReset = () => {
    setReset(false);
  };
  const handleSubmit = (e, signin) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      console.log(error);
      return false;
    }
    signin().then(async ({ data }) => {
      localStorage.setItem('token', data.signin.token);
      await refetch();
      history.push(Routes.HOME);
    });
  };
  return (
    <Mutation
      mutation={SIGN_IN}
      variables={{
        input: { email, password },
      }}
    >
      {(signin, { loading, error: apiError }) => {
        return (
          <MainLayout>
            <div className='col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12'>
              {reset && (
                <ResetPasswordModal handleReset={handleReset} show={true} />
              )}
              <div className='registration-login-form'>
                <div className='tab-content'>
                  <div
                    className='tab-pane active'
                    id='profile'
                    role='tabpanel'
                    data-mh='log-tab'
                  >
                    <div className='title h'>Login to your Account</div>
                    <form
                      className='content'
                      onSubmit={e => handleSubmit(e, signin)}
                    >
                      {apiError && (
                        <p className='field-error'>
                          {apiError.graphQLErrors[0].message}
                        </p>
                      )}

                      <div className='row'>
                        <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                          <Field
                            fieldContainerclassName='lg'
                            placeholder='Your Email'
                            type='text'
                            name='email'
                            value={email}
                            handleChange={handleChange}
                            error={error.email}
                          />
                          <Field
                            fieldContainerclassName='lg'
                            placeholder='Your Password'
                            type='password'
                            name='password'
                            value={password}
                            handleChange={handleChange}
                            error={error.password}
                          />

                          <div className='remember'>
                            {/* <div className='checkbox'>
                              <label>
                                <input
                                  name='optionsCheckboxes'
                                  type='checkbox'
                                />
                                Remember Me
                              </label>
                            </div> */}

                            <a
                              onClick={e => (
                                setReset(true), e.preventDefault()
                              )}
                              href='#'
                              className='forgot'
                              data-toggle='modal'
                              data-target='#restore-password'
                            >
                              Forgot my Password
                            </a>
                          </div>

                          <button
                            type='submit'
                            value='Login'
                            className='btn btn-lg btn-primary full-width'
                            disabled={
                              !email ||
                              !password ||
                              error.email ||
                              error.password
                            }
                          >
                            Login
                          </button>
                          <p>
                            Don’t you have an account? &nbsp;
                            <Link to={Routes.SIGN_UP} className='btn-register'>
                              Register Now!
                            </Link>
                            &nbsp; It’s really simple and you can start enjoying
                            all the benefits!
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <ResetPasswordModal show={reset} /> */}
            </div>
          </MainLayout>
        );
      }}
    </Mutation>
  );
};
SignIn.propTypes = {
  history: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};
export default withRouter(SignIn);
