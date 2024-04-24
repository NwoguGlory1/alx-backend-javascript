// Function returning a promise
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'Async operation completed successfully!';
      resolve(data);
    }, 2000);
  });
}
