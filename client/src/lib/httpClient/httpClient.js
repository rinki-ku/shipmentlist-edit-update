const redirectUrls = require('../../config');
const {
  default: {
    redirect: { unauthorized, externalUrl, pageNotFound, serverError },
  },
} = redirectUrls;

async function get(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const body = await response.json();
      return body;
    } else {
      throw response;
    }
  } catch (error) {
    if (error.status) {
      switch (error.status) {
        case 403:
          window.location = unauthorized;
          break;
        case 401:
          window.location = externalUrl;
          break;
        case 404:
          window.location = pageNotFound;
          break;
        default:
          window.location = serverError;
          break;
      }
    }
  }
}

async function put(url, payload) {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const body = await response.json();
      return body;
    } else {
      throw response;
    }
  } catch (error) {
    if (error.status) {
      switch (error.status) {
        case 403:
          window.location = unauthorized;
          break;
        case 401:
          window.location = externalUrl;
          break;
        case 404:
          window.location = pageNotFound;
          break;
        default:
          window.location = serverError;
          break;
      }
    }
  }
}

export default { get, put };
