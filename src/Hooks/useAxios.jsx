import axios from "axios";

const userAxios = axios.create({
    baseURL: 'http://localhost:1506/',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
const useAxios = () => {
    
    return userAxios
};

export default useAxios;