// Function that returns a resolved promise with this object
function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}

export default signUpUser;
