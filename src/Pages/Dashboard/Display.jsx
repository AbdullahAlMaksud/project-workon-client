import AdminHome from './Admin/HomeAdmin';
import HrHome from './Hr/HrHome';
import EmployeeHome from './Empolyee/EmployeeHome';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosNormal from '../../hook/useAxiosNormal';

const Display = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email
    console.log(email)
    const [role, setRole] = useState();
    const axiosNormal = useAxiosNormal()

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
    }, [email])

    console.log('Role', role)
    console.log(role)

    return (
        <div>
            {
                role === 'admin' && <AdminHome /> ||
                role === 'hr' && <HrHome />

                ||
                role === 'employee' && <EmployeeHome />

            }
        </div>
    );
};

export default Display;