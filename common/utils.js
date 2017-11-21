// https://stackoverflow.com/questions/31495239/title-case-a-sentence
export const titleCase = (str) => {
  let newstr = str.split(" ");
  for (let i = 0; i < newstr.length; i++) {
    if (newstr[i] === "") continue;
    let copy = newstr[i].substring(1).toLowerCase();
    newstr[i] = newstr[i][0].toUpperCase() + copy;
  }
  newstr = newstr.join(" ");
  return newstr;
};

// https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};