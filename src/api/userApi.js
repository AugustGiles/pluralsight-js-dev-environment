// this is a polyfill for fetch
// import 'whatwg-fetch';

export function getUsers() {
  return get('users');
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

// would also want to add support for put/post/delete

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  // eslint-disable-next-line no-console
  console.log(error);
}
