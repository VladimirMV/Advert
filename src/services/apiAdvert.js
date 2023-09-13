import axios from 'axios';

const advertsInstance = axios.create({
  baseURL: 'https://648a1d425fa58521cab0d768.mockapi.io/advert',
});

//export const getAllAdverts = () => advertsInstance.get('/');
export const getAllAdverts = async () => {
    const res = await advertsInstance.get('/');
    return res.data;
  };
export const deleteAdverts = id => {
  return advertsInstance.delete(`/${id}`);
};

export const addAdvert = data => {
  console.log('data from API', data);
  return advertsInstance.post('/', data);
};

const apiAdverts = {
    getAllAdverts,
    deleteAdverts,
    addAdvert

  };
  export default apiAdverts;