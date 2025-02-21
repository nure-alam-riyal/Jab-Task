import axios from "axios";

const userAxios = axios.create({
    baseURL: '',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
const useAxios = () => {
    
    return userAxios
};

export default useAxios;