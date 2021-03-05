const optimizeImage = (url, optimization) => {
  const splitedUrl = url.split('/');
  const newUrl = `https://res.cloudinary.com/hs8bxfui6/image/upload/${optimization}/${splitedUrl[6]}/${splitedUrl[7]}`
  return newUrl;
}

export default optimizeImage;