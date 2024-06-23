import axios from "axios";

const axiosNormal = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER}/`
})
const useAxiosNormal = () => {
    return axiosNormal;
};

export default useAxiosNormal;

