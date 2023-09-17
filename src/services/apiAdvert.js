import axios from 'axios';


  axios.defaults.baseURL =  'https://648a1d425fa58521cab0d768.mockapi.io'


export const limit = 8;
// export const getAllAdverts = async query => {
export const getAllAdverts = async (page = 1) => {
  const { data } = await axios.get(`/advert?limit=${limit}&page=${page}`);
  // console.log("query  api",query);
  // const { data } = await axios.get('/search', {
  //   params: query,
  // });
  // console.log("data  api",data);
  return data;
  };



  export const updateAdvert = async (id, updates) => {
    const { data } = await axios.put(`/advert/${id}`, updates);

    return data;
};
const apiAdverts = {
    getAllAdverts,
    updateAdvert,

  };
  export default apiAdverts;