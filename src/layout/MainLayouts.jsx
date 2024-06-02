import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const MainLayouts = () => {
    return (
        <div>
            <div className='min-h-16'>
                <Navbar />
            </div>

            <div className='min-h-[calc(100vh-304px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayouts;