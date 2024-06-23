import { useQuery, useQueryClient } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosNormal from './useAxiosNormal';
import Loading from '../components/Loading';

const fetchUserRole = async ({ queryKey }) => {
    const [, email, axiosNormal] = queryKey;
    const response = await axiosNormal.get('/user/role', {
        params: { email },
    });
    return response.data.role;
};

const useRole = () => {
    const { user } = useAuth();
    const email = user?.email;
    const axiosNormal = useAxiosNormal();
    const queryClient = useQueryClient();
    const { data: role, error, isLoading } = useQuery({
        queryKey: ['userRole', email, axiosNormal],
        queryFn: fetchUserRole,
        enabled: !!email, // Only run the query if email is not null
        onError: (error) => {
            console.error('Error fetching user role:', error);
        },
    });
    if (isLoading) return <Loading />
    if (error) return 'An error occurred';
    return role;
};

export default useRole;
