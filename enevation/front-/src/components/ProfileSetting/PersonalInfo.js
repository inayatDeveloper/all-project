import React, { useState, useEffect } from 'react';
import { Mutation } from 'react-apollo';
import DatePicker from 'react-datepicker';

import { Field } from 'components/ProfileSetting';
import { formatDate } from 'utils/date';
import { validateFormField } from 'utils';
import { EDIT_ACCOUNT } from 'graphql/user';
import { useStore } from 'store';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
const jQuery = require('jquery');
window.jQuery = jQuery;
require('bootstrap-select');
const PersonalInfo = ({ refetch }) => {
  const [{ auth }] = useStore();
  const [successMessage, setSuccessMessage] = useState('');
  const [values, setValues] = useState({
    firstName: auth.user.firstName,
    lastName: auth.user.lastName,
    username: auth.user.username,
    location: !auth.user.location ? '' : auth.user.location,
    gender: !auth.user.gender ? 'male' : auth.user.gender,
    bio: !auth.user.bio ? '' : auth.user.bio,
    birthday: auth.user.birthday,
    phone: !auth.user.phone ? '' : auth.user.phone,
  });
  const [date, setDate] = useState(auth.user.birthday);
  const [error, setError] = useState({
    username: '',
    firstName: '',
    lastName: '',
    location: '',
    gender: '',
    bio: '',
    phone: '',
  });
  const {
    username,
    firstName,
    lastName,
    bio,
    gender,
    birthday,
    location,
    phone,
  } = values;
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    let fieldError = validateFormField(name, value);
    setError({ ...error, ...fieldError });
  };
  const validate = () => {
    if (!firstName || !lastName || !username) {
      if (!firstName)
        setError({ ...error, firstName: 'First Name is required' });
      else if (!lastName)
        setError({ ...error, lastName: 'Last Name is required' });
      else if (!username)
        setError({ ...error, username: 'User name is required' });
      else return true;
    }
    return false;
  };
  const restoreFields = e => {
    e.preventDefault();
    setValues({
      ...values,
      firstName: auth.user.firstName,
      lastName: auth.user.lastName,
      username: auth.user.username,
      location: auth.user.location,
      gender: auth.user.gender,
      bio: auth.user.bio,
      birthday: auth.user.birthday,
      phone: auth.user.phone,
    });
    setError({
      username: '',
      firstName: '',
      lastName: '',
      location: '',
      gender: '',
      bio: '',
      phone: '',
    });
  };

  const handleBirthdayChange = birthday => {
    setValues({
      ...values,
      birthday: formatDate(birthday),
    });
    setDate(birthday);
  };
  const submitHandler = (e, editAccount) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setError(error);
      return false;
    }
    editAccount().then(async data => {
      await refetch();
      setSuccessMessage('Successfully updated profile information!');
    });
  };
  useEffect(() => {
    if (typeof birthday === 'string') {
      setValues({
        ...values,
        birthday: formatDate(new Date(parseInt(date))),
      });
    }
    jQuery('.selectpicker').selectpicker();

    return () => {};
  }, []);
  const disableButton =
    !firstName ||
    !lastName ||
    !username ||
    error.firstName ||
    error.lastName ||
    error.username;

  return (
    <Mutation
      mutation={EDIT_ACCOUNT}
      variables={{
        id: auth.user.id,
        input: values,
      }}
    >
      {(editAccount, { loading, error: apiError }) => {
        return (
          <>
            <div className='ui-block-title block-title-bg'>
              <h6 className='title'>Personal Information</h6>
            </div>
            <div className='ui-block-content'>
              <div className='result-message text-center font-weight-bolder mb-4 text-success'>
                {successMessage}
              </div>
              <form onSubmit={e => submitHandler(e, editAccount)}>
                <div className='row'>
                  <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <Field
                      placeholder='FirstName'
                      type='text'
                      name='firstName'
                      value={firstName}
                      error={error.firstName}
                      handleChange={handleChange}
                    />
                    <Field
                      placeholder='User Name'
                      type='text'
                      name='username'
                      value={username}
                      handleChange={handleChange}
                      error={error.username}
                    />
                  </div>
                  <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <Field
                      placeholder='Last Name'
                      type='text'
                      name='lastName'
                      value={lastName}
                      handleChange={handleChange}
                      error={error.lastName}
                    />
                    <Field
                      placeholder='Phone Number'
                      type='text'
                      name='phone'
                      value={phone}
                      handleChange={handleChange}
                      error={error.phone}
                    />
                  </div>
                  <div className='col col-lg-6 col-md-4 col-sm-12 col-12'>
                    <div className='form-group label-floating is-select'>
                      <label className='control-label' htmlFor="gender">Your Gender</label>
                      <select
                        name='gender'
                        className='selectpicker form-control'
                        onBlur={handleChange}
                        value={gender}
                      >
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='custom'>
                          Custom (more choices coming soon)
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className='col col-lg-6 col-md-4 col-sm-12 col-12'>
                    <div className='form-group date-time-picker label-floating'>
                      <label className='control-label' htmlFor="birthday">Your Birthday</label>
                      <DatePicker
                        dateFormat='MM/dd/yyyy'
                        selected={
                          typeof date === 'string'
                            ? new Date(parseInt(date))
                            : date
                        }
                        onChange={handleBirthdayChange}
                      />
                    </div>
                  </div>
                  <div className='col col-lg-6 col-md-4 col-sm-12 col-12'>
                    <div className='form-group label-floating is-select'>
                      <label className='control-label' htmlFor="location">Your Location</label>
                      <textarea
                        className='form-control'
                        onChange={handleChange}
                        name='location'
                        value={location}
                      ></textarea>
                    </div>
                  </div>
                  <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className='form-group label-floating'>
                      <label className='control-label' htmlFor="description">
                        Write a little description about you
                      </label>
                      <textarea
                        className='form-control'
                        onChange={handleChange}
                        name='bio'
                        value={bio}
                      ></textarea>
                    </div>
                  </div>
                  <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <button
                      className='btn btn-secondary btn-lg full-width'
                      onClick={e => restoreFields(e)}
                    >
                      Restore all Attributes
                    </button>
                  </div>
                  <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <button
                      className='btn btn-primary btn-lg full-width'
                      disabled={disableButton}
                    >
                      Save all Changes
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
export default PersonalInfo;
