import { useContext, useEffect, useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
import { GiSeatedMouse } from 'react-icons/gi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosNormal from '../hook/useAxiosNormal'; import { AuthContext } from '../provider/AuthProvider';
import userImg from '../../public/user.svg'
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const {
        registerWithEmailAndPassword,
        setUser,
        updateUserInfo,
        user,
        loading,
    } = useContext(AuthContext)
    const [photo, setPhoto] = useState('');
    const [photoName, setPhotoName] = useState();
    const [photoUrl, setPhotoUrl] = useState();
    const [alerts, setAlerts] = useState();
    const [isChecked, setIsChecked] = useState(false);
    const [selectedButton, setSelectedButton] = useState('employee');
    const axiosNormal = useAxiosNormal();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state || '/'

    const showPassword = (e) => {
        setIsChecked(e.target.checked);
    };
    const handleGetPhoto = async (e) => {
        e.preventDefault();

        const photoView = URL.createObjectURL(e.target.files[0]);
        setPhoto(photoView)
        // console.log(photoView)
        const photo = e.target.files[0].name;
        setPhotoName(photo)
        // console.log(photoName)
        const photoFileRaw = e.target.files[0];
        //ImgBB
        const formData = new FormData();
        formData.append('image', photoFileRaw);
        // console.log(photoFileRaw)
        // console.log(formData)
        try {
            const { data } = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData
            )
            console.log(data)
            setPhotoUrl(data.data.display_url)
            console.log(photoUrl)
        } catch (error) {
            console.error('Error uploading file:', error);
        }

    }

    const handleUserRole = (buttonValue) => {
        setSelectedButton(buttonValue);
        console.log('Button clicked:', buttonValue);
    };

    const handlePasswordCheck = (e) => {
        const password = e.target.value;
        if (password.length < 8
            || (!/[a-z]/.test(password))
            || (!/[A-Z]/.test(password))
            || (!/[@$!%*?&^#]/.test(password))
            || (!/\d/.test(password))) {
            setAlerts('Password must contain one UPPERCASE, one LOWERCASE, one Number, one Special Charechter (@$!%*?&^#) and it have to be at least 8 characters long.');
        }
        else {
            setAlerts('')
        }
    };

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const name = `${firstName} ${lastName}`;

        const photoURL = photoUrl;
        const phoneNumber = form.phoneNumber.value;
        const email = form.email.value;
        const isVerified = false;
        const role = selectedButton;
        const designation = selectedButton;
        const bank_account_no = "";
        const salary = 0;

        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name)

        const userData = { role, name, email, phoneNumber, photoURL, isVerified, bank_account_no, salary, designation }

        if (password !== confirmPassword) {
            const abd = () => toast.error('Password does not match!')
            return abd()
        }

        try {
            const result = await registerWithEmailAndPassword(email, password)
            await updateUserInfo(name, photoURL)
            setUser({ ...result?.user, photoURL: photoURL, displayName: name })
            await axiosNormal.post('/users', userData)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            navigate(from, { replace: true })
            toast.success('Your Profie Created SuccessFully!')
        }
        catch (error) {
            console.log(error);
            toast.error(error.messege);
        }
    }

    if (user || loading) {
        return
    }

    return (
        <section className="bg-gray-100 lg:p-10 dark:bg-gray-900 rounded-2xl">
            <Helmet>
                <title>WorkOn | Registration</title>
            </Helmet>
            <div className="flex justify-center ">
                <div
                    className="hidden bg-cover lg:block lg:w-2/5 rounded-xl shadow-md shadow-black/50"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")'
                    }}
                ></div>
                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <div className="flex justify-start -ml-2">
                            <Link to={'/'} className='relative hover:bg-gray-100/20 dark:hover:bg-gray-800/70 text-black px-2 py-1 rounded-lg active:scale-95 -z-0'>
                                <h1 className='text-3xl text-black dark:text-white w-fit font-black font-raleway'><span className='text-red-700'>W</span>ork<span className='text-red-700'>on</span></h1>
                                <GiSeatedMouse className='absolute -right-2 -top-1 text-red-700' />
                            </Link>
                        </div>
                        <p className="mb-10 mt-1 text-sm md:text-xl text-gray-600 dark:text-gray-200">
                            Let’s get you all set up so you can verify your personal account and
                            begin setting up your profile.
                        </p>

                        <div className="mt-6">
                            <h1 className="text-gray-500 dark:text-gray-300">
                                Select type of account
                            </h1>
                            <div className="mt-3 md:flex md:items-center md:-mx-2">
                                <button onClick={() => handleUserRole('Employee')} className={selectedButton === 'employee' ? "flex justify-center w-full px-6 py-3 text-white bg-red-700 rounded-lg md:w-auto md:mx-2 focus:outline-none mb-2 md:mb-0" : "flex justify-center w-full px-6 py-3 text-white bg-gray-500 rounded-lg md:w-auto md:mx-2 focus:outline-none mb-2 md:mb-0"}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="mx-2">Employee</span>
                                </button>
                                <button onClick={() => handleUserRole('hr')} className={selectedButton === 'hr' ? "flex justify-center w-full px-6 py-3 text-white bg-red-700 rounded-lg md:w-auto md:mx-2 focus:outline-none" : "flex justify-center w-full px-6 py-3 text-white bg-gray-500 rounded-lg md:w-auto md:mx-2 focus:outline-none"}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                    <span className="mx-2">HR Officer</span>
                                </button>
                            </div>
                        </div>


                        <form onSubmit={handleSignUp} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                            <div className='col-span-2 md:col-span-1'>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John" name='firstName'
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Snow" name="lastName"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Phone number
                                </label>
                                <input
                                    type="text"
                                    placeholder="XXX-XX-XXXX-XXX" name="phoneNumber"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    placeholder="johnsnow@example.com" name="email"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className='col-span-2'>
                                <div className=''>
                                    <div >
                                        <label
                                            className="block text-sm text-gray-500 dark:text-gray-300"
                                        >
                                            Profile Photo
                                        </label>
                                        <div className='flex gap-1 flex-col-reverse md:flex-row'>
                                            <label
                                                className="flex flex-col items-center w-full max-w-lg p-5 h-32 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-8 h-8 text-gray-500 dark:text-gray-400"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                                    />
                                                </svg>
                                                <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                                                    Upload Images
                                                </h2>
                                                <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                                                    {
                                                        photoName ? photoName : `Upload or darg &amp; drop your file SVG, PNG, JPG or GIF.{" "}`
                                                    }
                                                </p>
                                                <input id="dropzone-file" onChange={handleGetPhoto} name="photoUpload" type="file" className="hidden" />
                                            </label>
                                            <div className={photo ? "flex flex-col items-center min-w-32 h-32 mx-auto mt-2 text-center bg-white border-2 p-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl" : "hidden md:flex flex-col items-center min-w-32 h-32 mx-auto mt-2 text-center bg-white border-2 p-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"}>
                                                <img className='h-28 object-cover w-full rounded-lg' src={photo ? photo : userImg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Password
                                </label>
                                <input
                                    type={isChecked ? "text" : "password"} onKeyUp={handlePasswordCheck}
                                    placeholder="Enter your password" name="password"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                <p className='text-[.7rem] text-red-500'>{alerts}</p>
                                <div className='flex gap-2 mt-3 items-center ml-1'>
                                    <input type="checkbox" name="showPass"
                                        checked={isChecked}
                                        onChange={showPassword}

                                        className="form-checkbox h-4 w-4 rounded-xl bg-red-700 text-blue-600" id="" />
                                    <p className='text-sm'>Show Password</p>
                                </div>
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password" name="confirmPassword"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <input type="submit" value={'Sign up'} className="w-full col-span-2 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-800 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50 hover:cursor-pointer" />
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;