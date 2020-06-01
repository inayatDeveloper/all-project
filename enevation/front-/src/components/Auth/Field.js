import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
const Field = props => {
  const {
    fieldContainerClass,
    placeholder,
    type,
    handleChange,
    value,
    name,
    error,
  } = props;

  const [isFocused, setIsFocused] = React.useState(false);

  let handleOnFocus = event => {
    setIsFocused(true);
  };

  let handleBlur = event => {
    if (!value) setIsFocused(false);
  };

  useEffect(() => {
    if (props.value) setIsFocused(true);
  }, [props.value]);

  let focused = 'form-group label-floating is-empty is-focused';
  let notFocused = 'form-group label-floating is-empty';

  return fieldContainerClass === 'sm' ? (
    <div className='col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
      <div
        onBlur={() => handleBlur()}
        onFocus={() => {
          handleOnFocus();
        }}
        className={isFocused ? focused : notFocused}
      >
        <label className='control-label'>{placeholder}</label>
        <input
          autoComplete='off'
          className='form-control'
          placeholder=''
          type={type}
          onChange={handleChange}
          value={value}
          name={name}
        />
        {error && <span className='material-input-error'>{error}</span>}
      </div>
    </div>
  ) : (
    <div
      onBlur={() => handleBlur()}
      onFocus={() => {
        handleOnFocus();
      }}
      className={isFocused ? focused : notFocused}
    >
      <label className='control-label'>{placeholder}</label>
      <input
        autoComplete='off'
        className='form-control'
        placeholder=''
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
      />
      {error && <span className='material-input-error'>{error}</span>}
    </div>
  );
};

Field.propTypes = {
  fieldContainerClass: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default Field;
