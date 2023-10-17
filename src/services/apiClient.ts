import axios from 'axios';

export const BASE_URL = 'https://api.prcl.dev/';

export default axios.create({
  baseURL: BASE_URL,
});
