import Api from '@/services/Api';

export default {
  getGallery(page) {
    return Api().get('/photos/', {
      params: {
        page,
      },
    });
  },
};
