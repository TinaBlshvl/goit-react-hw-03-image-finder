const API_KEY = '35212411-f1d06a82a911fb35f1e71b9dd';
const BASE_URL = 'https://pixabay.com/api/';

export function getImages(searchText) {
  fetch(`${BASE_URL}?q=${searchText}`, {
    headers: {
      'X-API-KEY': API_KEY,
    },
  }).then(res => res.json());
}
