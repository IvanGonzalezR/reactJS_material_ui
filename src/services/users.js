import { urlFetch } from '../constants';

const getGithubUser = async (user) => {
  const response = await fetch(`${urlFetch}${user}`, {
    method: 'GET',
  });

  const payload = await response.json();

  return payload;
}

export { getGithubUser };