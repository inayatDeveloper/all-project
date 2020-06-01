import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import ReCAPTCHA from 'react-google-recaptcha';

import { Field } from 'components/Auth';
import { SIGN_UP } from 'graphql/user';
import { validateFormField } from 'utils';
import { formatDate } from 'utils/date';
import { MainLayout } from 'pages/Auth';

import { useStore } from 'store';
import { CLEAR_AUTH_USER } from 'store/auth';

import { RE_CAPTCHA_SCERET_API } from 'constants/ApiKeys';

import * as Routes from 'routes';

import 'react-datepicker/dist/react-datepicker.css';

const SignUp = ({ refetch, history }) => {
  let location = useLocation();
  let invitedById = location.state ? location.state.invitedById : null;

  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    invitedById: invitedById,
    username: '',
    email: '',
    password: '',
    birthday: '',
    gender: 'male',
    captcha: false,
  });

  const [date, setDate] = useState(new Date('06/06/1986'));

  const [, dispatch] = useStore();

  const {
    firstName,
    lastName,
    username,
    email,
    password,
    birthday,
    captcha,
  } = values;

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    let fieldError = validateFormField(name, value);
    setError({ ...error, ...fieldError });
  };

  const validate = () => {
    if (!firstName || !lastName || !email || !username || !password) {
      if (!firstName)
        setError({ ...error, firstName: 'First Name is required' });
      else if (!lastName)
        setError({ ...error, lastName: 'Last Name is required' });
      else if (!email) setError({ ...error, email: 'Email is required' });
      else if (!username)
        setError({ ...error, username: 'User name  required' });
      else if (!password)
        setError({ ...error, password: 'Password is required' });
      else return true;
    }
    return false;
  };
  let handleCaptcha = () => {
    setValues({ ...values, captcha: true });
  };

  const handleSubmit = async (e, signup) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setError(error);
      return false;
    }

    try {
      await signup();
      await refetch();
      dispatch({ type: CLEAR_AUTH_USER });
      localStorage.removeItem('token');

      setValues({
        firstName: '',
        lastName: '',
        invitedById: invitedById,
        username: '',
        email: '',
        password: '',
        birthday: '',
        gender: 'male',
        captcha: false,
      });

      let emailVerificationModal = document.getElementById('emailVerification');
      emailVerificationModal.classList.add('email-verification-modal-visible');
    } catch (error) {
      console.log('The following error occurred while handling signup form');
      console.log(error);
    }
  };

  const disableButton =
    !firstName ||
    !lastName ||
    !username ||
    !email ||
    !password ||
    error.firstName ||
    error.lastName ||
    error.username ||
    error.email ||
    error.password ||
    !captcha;

  const handleBirthdayChange = birthday => {
    setValues({
      ...values,
      birthday: formatDate(birthday),
    });
    setDate(birthday);
  };

  return (
    <Mutation
      mutation={SIGN_UP}
      variables={{
        input: { firstName, lastName, email, password, username, invitedById },
      }}
    >
      {(signup, { loading, error: apiError }) => {
        return (
          <MainLayout>
            <div className='col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12'>
              <div className='registration-login-form'>
                <div className='tab-content'>
                  <div
                    className='tab-pane active'
                    id='home'
                    role='tabpanel'
                    data-mh='log-tab'
                  >
                    <div className='title h6'>Join the Community Today!</div>
                    <form
                      className='content'
                      onSubmit={e => handleSubmit(e, signup)}
                    >
                      {apiError && (
                        <p className='field-error'>
                          {apiError.graphQLErrors[0].message}
                        </p>
                      )}
                      <div className='row'>
                        <div className='col col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                          <Field
                            fieldContainerclassName='sm'
                            className='test'
                            placeholder='First Name'
                            type='text'
                            value={firstName}
                            handleChange={handleChange}
                            name='firstName'
                            error={error.firstName}
                          />
                        </div>
                        <div className='d-none'>
                          <Field
                            fieldContainerclassName='sm'
                            className='test'
                            placeholder='Invited By ID'
                            type='text'
                            value={invitedById}
                            name='invitedById'
                            error={error.invitedById}
                          />
                        </div>
                        <div className='col col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                          <Field
                            fieldContainerclassName='sm'
                            className='test'
                            placeholder='Last Name'
                            type='text'
                            value={lastName}
                            handleChange={handleChange}
                            name='lastName'
                            error={error.lastName}
                          />
                        </div>
                        <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                          <Field
                            fieldContainerclassName='lg'
                            placeholder='Username'
                            type='text'
                            value={username}
                            handleChange={handleChange}
                            name='username'
                            error={error.username}
                          />
                          <Field
                            fieldContainerclassName='lg'
                            placeholder='Your Email'
                            type='email'
                            value={email}
                            handleChange={handleChange}
                            name='email'
                            error={error.email}
                          />

                          <Field
                            fieldContainerclassName='lg'
                            placeholder='Your Password'
                            type='password'
                            value={password}
                            handleChange={handleChange}
                            name='password'
                            error={error.password}
                          />
                        </div>
                        <div className='col col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                          <div className='form-group date-time-picker label-floating'>
                            <label className='control-label'>
                              Your Birthday
                            </label>
                            <DatePicker
                              dateFormat='MM/dd/yyyy'
                              selected={date}
                              onChange={handleBirthdayChange}
                            />
                          </div>
                        </div>
                        <div className='col col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                          <div className='form-group label-floating is-select'>
                            <label className='control-label'>Your Gender</label>
                            <select
                              className='select picker form-control'
                              onBlur={handleChange}
                              name='gender'
                            >
                              <option value='male'>Male</option>
                              <option value='female'>Female</option>
                              <option value='custom'>Custom</option>
                            </select>
                          </div>
                        </div>
                        <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                          <div className='remember'>
                            <div className='checkbox'>
                              <label>
                                <input
                                  name='optionsCheckboxes'
                                  type='checkbox'
                                />
                                <span className='checkbox-material'>
                                  <span className='check' />
                                </span>
                                I accept the{' '}
                                <a href={Routes.TERM_AND_CONDITIONS}>
                                  Terms and Condition
                                </a>{' '}
                                of the website
                              </label>
                            </div>
                          </div>
                          <ReCAPTCHA
                            sitekey={RE_CAPTCHA_SCERET_API}
                            onChange={() => handleCaptcha()}
                            size='normal'
                          />
                          <button
                            className='btn btn-green btn-lg full-width'
                            type='submit'
                            disabled={disableButton}
                          >
                            Complete Registration!
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </MainLayout>
        );
      }}
    </Mutation>
  );
};

export default withRouter(SignUp);
