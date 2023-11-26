import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const defaultOptions = {
  params: {
    key: '35267773-ba37c4c128e4d05a4427261b0',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 18,
    page: 1,
  },
};

export async function getDataFromAPI(queryName) {
  const options = { ...defaultOptions };
  options.params.q = queryName;
  options.params.page = 1;
  const data = await axios.get(BASE_URL, options).then(response => response.data);
  return data;
}

export async function loadMoreDataFromAPI(page) {
  const options = { ...defaultOptions };
  options.params.page = page;
  const data = await axios.get(BASE_URL, options).then(response => response.data);
  return data;
}
