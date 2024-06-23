import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

// Function to fetch user data by ID
const fetchUserData = async ({ queryKey }) => {
    const [_, id] = queryKey;
    const response = await axios.get(`${import.meta.env.VITE_SERVER}/all-employees-list/${id}`);
    return response.data;
};

// Function to update user data by ID
const updateUserData = async ({ id, data }) => {
    const response = await axios.patch(`${import.meta.env.VITE_SERVER}/employee-update/${id}`, data);
    return response.data;
};

const useUserData = (id) => {
    return useQuery({
        queryKey: ['userData', id],
        queryFn: fetchUserData,
        enabled: !!id,
    });
};

// Custom hook to use the user update mutation
const useUpdateUserData = (id) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateUserData,
        onSuccess: () => {
            queryClient.invalidateQueries(['userData', id]);
            toast.success('User Information Updated')
        },
    });
};

export { useUserData, useUpdateUserData };