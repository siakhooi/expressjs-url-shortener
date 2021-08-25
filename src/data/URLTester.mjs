const urlRegex = /^(https?:\/\/)?[\d\w]+\.[\w]+(\/.*)*/;

const URLTester = {
  isValid: (url) => urlRegex.test(url),
};

export default URLTester;
