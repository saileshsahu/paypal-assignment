export default (url) => {
  const image = new Image();

  return new Promise((resolve, reject) => {
    const loaded = (event) => {
      removeListener(image);
      resolve(event.target || event.srcElement);
    };

    // Error
    const errored = (error) => {
      removeListener(image);
      reject(error);
    };

    image.onload = loaded;
    image.onerror = errored;
    image.onabort = errored;

    // Ready
    image.src = url;
  });
};

function removeListener(image) {
  // Reset
  image.onload = null;
  image.onerror = null;
  image.onabort = null;
}
