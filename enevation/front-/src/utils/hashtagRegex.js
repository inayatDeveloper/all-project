export const hashtagRegex = inputText => {
  let regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
  let matches = [];
  let match;

  while ((match = regex.exec(inputText))) {
    matches.push(`#${match[1]}`);
  }

  return matches;
};
