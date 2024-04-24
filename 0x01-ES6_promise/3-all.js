// Function that handles multiple promises
import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  // Use Promise.all to collectively resolve all promises
  return Promise.all([promise1, promise2]);
}

// Usage
handleProfileSignup()
  .then((results) => {
    //  Use object destructuring to access properties
    const { body } = results[0];
    const { firstName, lastName } = results[1];

    console.log(`${body} ${firstName} ${lastName}`);
  })
  .catch(() => {
    // Handle any errors
    console.log('Signup system offline');
  });
export default handleProfileSignup;
