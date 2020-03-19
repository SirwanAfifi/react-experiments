const fetchAsBlob = url => fetch(url).then(response => response.blob());

const convertBlobToBase64 = blob =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

fetchAsBlob(
  `https://fonts.gstatic.com/s/roboto/v16/d-6IYplOFocCacKzxwXSOJBw1xU1rKptJj_0jans920.woff2`
)
  .then(convertBlobToBase64)
  .then(console.log);
