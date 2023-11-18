import axios from "axios";

const axiosSecure = axios.create({
    baseURL: `http://localhost:5000`
})
const useAxiosSecure = () => {
    axios.interceptors.request.use(function (config) {
        console.log(config)
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    return axiosSecure
};

export default useAxiosSecure;