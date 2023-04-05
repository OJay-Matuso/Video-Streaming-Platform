import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '827cfd78e7msh6abab7b20070d90p1267e7jsn9360fa1ab593',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

   return data;
};