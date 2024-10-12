const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33694347-6ae8de5621b95f7febdf77706';

const getAllPhotos = query => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(res => {
    if (!res.ok) throw new Error(res.message);
    return res.json();
  });
};

export { getAllPhotos };
