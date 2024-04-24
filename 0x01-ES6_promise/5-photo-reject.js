export default function uploadPhoto(filename) {
// Return a Promise that rejects with an Error
  return new Promise((reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}
