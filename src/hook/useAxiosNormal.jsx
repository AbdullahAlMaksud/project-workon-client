import axios from "axios";

export const axiosNormal = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosNormal = () => {
    return axiosNormal;
};

export default useAxiosNormal;