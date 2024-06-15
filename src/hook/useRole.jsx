import { useEffect, useState } from 'react';
import useAxiosNormal from './useAxiosNormal';
import useAuth from './useAuth';
// import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const { user } = useAuth()
    const email = user?.email;
    const axiosNormal = useAxiosNormal();
    const [role, setRole] = useState();

    useEffect(() => {
        const userRole = async () => {
            try {
                const response = await axiosNormal.get(`/user/role`, {
                    params: { email }
                });
                setRole(response.data.role);
                // setError('');
            } catch (error) {
                setRole('');
                console.log(error)
                // setError(error.response ? error.response.data.message : error.message);
            }
        }
        userRole()
    }, [email, axiosNormal])

    console.log(role)
    // const { data: role } = useQuery({
    //     queryKey: [user?.email, 'role'],
    //     queryFn: async () => {
    //         const res = await axiosNormal.get(`/user/${user.email}`)
    //         console.log(res.data)
    //         return res.data
    //     }
    // })
    return [role]
};

export default useRole;


// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
// import useAxiosNormal from './useAxiosNormal';

// const useAdmin = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure()
//     const { data: isAdmin, isPending: isAdminLoading } = useQuery({
//         queryKey: [user?.email, 'isAdmin'],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user.email}`)
//             console.log(res.data)
//             return res.data?.admin
//         }
//     })
//     return [isAdmin]
// };

// export default useAdmin;


//     const email = user.email;
//     console.log(email)
//     const [role, setRole] = useState();

//     useEffect(() => {
//         const userRole = async () => {
//             try {
//                 const response = await axiosNormal.get(`/user/role`, {
//                     params: { email }
//                 });
//                 setRole(response.data.role);
//                 // setError('');
//             } catch (error) {
//                 setRole('');
//                 console.log(error)
//                 // setError(error.response ? error.response.data.message : error.message);
//             }
//         }
//         userRole()
//     }, [email])

//     console.log(role)