import React from 'react';
import AdminHome from './HomeAdmin';
import HrHome from './HomeHr';
import EmployeeHome from './HomeEmployee';

const Display = () => {
    // const role = 'employee'
    const role = 'hr'
    // const role = 'admin'
    return (
        <div>
            {
                role === 'admin' && <AdminHome />
            }
            {
                role === 'hr' && <HrHome />
            }
            {
                role === 'employee' && <EmployeeHome />
            }
        </div>
    );
};

export default Display;