/**
 * Creates a base url depending on whether we're in the dev environment or
 * in the production environment. Then retuns that base url. This allows seamless
 * transition between dev and production environments.
 */

export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? 'http://localhost:3001/' : '/'
}
