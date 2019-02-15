// this is a polyfill for fetch
// import 'whatwg-fetch';

import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(url) {
  return fetch(`${baseUrl}${url}`).then(onSuccess, onError);
}

function del(url) {
  return fetch(`${baseUrl}${url}`, {
    method: 'DELETE'
  }).then(onSuccess, onError);
}

// would also want to add support for put/post/delete

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  // eslint-disable-next-line no-console
  console.log(error);
}
