// Function appending handlers to a promise
export default function handleResponseFromAPI(promise) {
  promise
    .then(response => {
      console.log("Got a response from the API");
      return { status: 200, body: response }; // Use response instead of success
    })
    .catch(error => {
      console.error(error.message); // Log the error message 
      return new Error(''); // Reject with an empty Error object
    });
}
