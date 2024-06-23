import useAuth from '../hook/useAuth';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const { user } = useAuth();
    console.log(user)

    return (
        <div className='container w-11/12 mx-auto mb-10 mt-32'>
            <Helmet>
                <title>Workon | My Profile</title>
            </Helmet>
            <div className='flex flex-col justify-center items-center bg-gray-100 rounded-lg pb-10'>
                <img className='h-60 rounded-full w-60 object-cover -mt-28 border-8' src={user.photoURL} alt="" />
                <div>
                    <h2 className='text-center text-3xl font-poppins mt-5'>{user.displayName}</h2>
                    <h2 className='text-center'>{user.email}</h2>
                </div>
            </div>
        </div>
    );
};

export default Profile;