import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const options = {
  params: {
    key: '34774253-d36109085483ad06eaf8205ea',
    q: ``,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: 1,
  },
};

export async function getDataFromAPI(queryName) {
  options.params.q = queryName;
  options.params.page = 1;
  const data = await axios
    .get(BASE_URL, options)
    .then(response => response.data);
  return data;
}

export async function loadMoreDataFromAPI() {
  options.params.page += 1;
  const data = await axios
    .get(BASE_URL, options)
    .then(response => response.data);
  return data;
}
