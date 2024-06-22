import { useQuery, useQueryClient } from '@tanstack/react-query';
// import useAxiosNormal from './useAxiosNormal';
import useAuth from './useAuth';
import useAxiosNormal from './useAxiosNormal';

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

    // Use queryClient for any additional query-related operations
    // For example, you might want to prefetch some other queries or invalidate some queries
    // queryClient.prefetchQuery('someOtherQueryKey', someOtherQueryFn);
    // queryClient.invalidateQueries('someOtherQueryKey');

    // You can handle loading and error states if needed
    if (isLoading) return null; // or some loading component
    if (error) return 'An error occurred'; // or an error component

    return role;
};

export default useRole;
