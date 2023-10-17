import { BASE_URL } from './apiClient';

const apiURL = (path: string) => {
  return new URL(path, BASE_URL).toString();
};

export default apiURL;
