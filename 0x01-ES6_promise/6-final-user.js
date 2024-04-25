// Function that handles multiple promises
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Call signUpUser and uploadPhoto with the appropriate arguments
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  // Wait for all promises to settle
  const results = await Promise.allSettled([signUpPromise, uploadPromise, ]);

  // Returns an array after all promise is settled
  const transformedResults = results.map(result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason
  }));
  return transformedResults;
}
