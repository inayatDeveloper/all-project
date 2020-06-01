import { isValidUserName, isValidEmail } from './index';
export const validateFormField = (name, value) => {
  switch (name) {
    case 'password':
      if (value.length < 5) return { password: 'Password min 6 characters' };
      else return { password: '' };

    case 'firstName':
      if (value.length > 20)
        return { firstName: 'First name no more than 20 characters' };
      else if (value.length < 2) return { firstName: 'First name is Required' };
      else return { firstName: '' };

    case 'lastName':
      if (value.length > 20)
        return { lastName: 'Last name no more than 20 characters' };
      else if (value.length < 2) return { lastName: 'Last name is Required' };
      else return { lastName: '' };

    case 'username':
      // eslint-disable-next-line no-case-declarations
      let usernameError = isValidUserName(value);
      if (usernameError.length > 1) return { username: usernameError };
      else return { username: '' };

    case 'email':
      if (!isValidEmail(value)) return { email: 'Email is Not valid' };
      else return { email: '' };

    default:
      break;
  }
};
