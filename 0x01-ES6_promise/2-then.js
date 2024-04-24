// Function appending handlers to a promise
export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => new Error('')); // Reject with an empty Error object
}
