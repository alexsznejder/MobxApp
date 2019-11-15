import axios from 'axios';

export default axios.create({
  baseURL: 'https://sef-dev.hubub.com/api/getNewsFeed',
  headers: {
    'Content-Type': 'application/json',
  },
});
