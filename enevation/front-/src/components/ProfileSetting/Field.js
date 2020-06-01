import React, { useEffect } from 'react';
const Field = props => {
  const { placeholder, type, handleChange, value, name, error } = props;

  const [isFocused, setIsFocused] = React.useState(false);

  let handleOnFocus = event => {
    // if (!value)
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

  return (
    <div
      onBlur={() => handleBlur()}
      onFocus={() => {
        handleOnFocus();
      }}
      className={isFocused ? focused : notFocused}
    >
      <label className='control-label'>{placeholder}</label>
      <input
        defaultValue=''
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

export default Field;
