export const isValidUserName = username => {
  const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

  if (!username) {
    return 'User Name is Required';
  } else if (username.length > 20) {
    return 'User name must be less than 20 characters';
  } else if (!usernameRegex.test(username)) {
    return 'Usernames can only use letters, numbers, underscores and periods';
  }

  return '';
};
