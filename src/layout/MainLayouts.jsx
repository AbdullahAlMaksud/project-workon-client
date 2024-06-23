import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import TitleText from '../components/TitleText';

const MainLayouts = () => {
    return (
        <div>
            <TitleText props={'Where Work Meets Efficiency'}></TitleText>
            <div className='min-h-16'>
                <Navbar />
            </div>
            <div className='min-h-[calc(100vh-324px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayouts;