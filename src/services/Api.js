import axios from 'axios';

export default () => axios.create({
  baseURL: `https://api.${process.env.VUE_APP_BASE_API}`,
  headers: {
    Authorization: 'Client-ID 83752be933cc3b6fc1f0e5773c949aa4c08a293e6cd0289cded5528ea4f5778c',
  },
});
