import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiSeatedMouse } from 'react-icons/gi';
import { Helmet } from 'react-helmet-async';

const Authentication = () => {
    const [photo, setPhoto] = useState();
    const handleGetPhoto = (e) => {
        e.preventDefault();
        // const photoFile = e.target.photoUrl.files;
        const photoView = URL.createObjectURL(e.target.files[0]);
        setPhoto(photoView)
        console.log(photo)
    }

    const [selectedButton, setSelectedButton] = useState('Employee');
    const handleButtonClick = (buttonValue) => {
        setSelectedButton(buttonValue);
        console.log('Button clicked:', buttonValue);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        const role = selectedButton;
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photoUpload = form.photoUpload.files;

        console.log({ typeOfaccount: role, firstName, lastName, email, phoneNumber, password, confirmPassword, photoUpload })
    }

    return (
        <div className='container w-11/12 mx-auto my-10'>
            <Helmet>
                <title>Workon | Authentication</title>
            </Helmet>
            <div className='flex items-center justify-center'>
                <TabGroup className={'w-full flex flex-col items-center'}>
                    <TabList className={'bg-gray-300 lg:w-fit px-2 py-2 rounded-full flex gap-2'}>
                        <Tab className="data-[selected]:bg-red-500 data-[selected]:text-white rounded-full px-4 py-1">Sign In</Tab>
                        <Tab className="data-[selected]:bg-black data-[selected]:text-white rounded-full px-4 py-1">Sign Up</Tab>
                    </TabList>

                    <TabPanels className={'w-full mt-10'}>
                        <TabPanel>
                            <section className="bg-gray-100 lg:p-10 dark:bg-gray-900 rounded-2xl">
                                <div className="flex justify-center">
                                    <div
                                        className="hidden bg-cover lg:block lg:w-2/5 rounded-xl shadow-md shadow-black/50"
                                        style={{
                                            backgroundImage:
                                                'url("https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                                        }}
                                    ></div>

                                    <div className="flex items-center w-full lg:max-w-3xl lg:p-8 mx-auto  lg:w-3/5">
                                        <div className="w-full">


                                            <div className="flex w-full max-w-2xl mx-auto overflow-hidden   lg:max-w-4xl">
                                                <form className="w-full px-6 py-8">
                                                    <div className="flex justify-center mx-auto">
                                                        <Link to={'/'} className='relative hover:bg-gray-100/20 dark:hover:bg-gray-800/70 text-black px-2 py-1 rounded-lg active:scale-95'>
                                                            <h1 className='text-3xl text-black dark:text-white w-fit font-black font-raleway'><span className='text-red-700'>W</span>ork<span className='text-red-700'>on</span></h1>
                                                            <GiSeatedMouse className='absolute -right-2 -top-1 text-red-700' />
                                                        </Link>
                                                    </div>
                                                    <p className="mb-10 mt-1 text-sm md:text-xl text-center text-gray-600 dark:text-gray-200">
                                                        Welcome, buddy! Wanna login to your account?
                                                    </p>
                                                    <a
                                                        href="#"
                                                        className="flex items-center justify-center mt-10 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                                                    >
                                                        <div className="px-4 py-2">
                                                            <svg className="w-6 h-6" viewBox="0 0 40 40">
                                                                <path
                                                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                                                    fill="#FFC107"
                                                                />
                                                                <path
                                                                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                                                    fill="#FF3D00"
                                                                />
                                                                <path
                                                                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                                                    fill="#4CAF50"
                                                                />
                                                                <path
                                                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                                                    fill="#1976D2"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <span className="w-5/6 md:px-4 py-3 font-bold text-center">
                                                            Sign in with Google
                                                        </span>
                                                    </a>
                                                    <div className="flex items-center justify-between mt-4">
                                                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
                                                        <a
                                                            href="#"
                                                            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
                                                        >
                                                            or login with email
                                                        </a>
                                                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
                                                    </div>
                                                    <div className="mt-4">
                                                        <label
                                                            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                                                            htmlFor="LoggingEmailAddress"
                                                        >
                                                            Email Address
                                                        </label>
                                                        <input
                                                            id="LoggingEmailAddress"
                                                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                                            type="email"
                                                        />
                                                    </div>
                                                    <div className="mt-4">
                                                        <div className="flex justify-between">
                                                            <label
                                                                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                                                                htmlFor="loggingPassword"
                                                            >
                                                                Password
                                                            </label>
                                                            <a
                                                                href="#"
                                                                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                                                            >
                                                                Forget Password?
                                                            </a>
                                                        </div>
                                                        <input
                                                            id="loggingPassword"
                                                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                                            type="password"
                                                        />
                                                    </div>
                                                    <div className="mt-6">
                                                        <input type='submit' value="Sign In" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-800 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50 hover:cursor-pointer">
                                                        </input>
                                                    </div>
                                                    {/* <div className="flex items-center justify-between mt-4">
                                                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                                                        <Link
                                                            to={'/signup'}
                                                            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                                                        >
                                                            or sign up
                                                        </Link>
                                                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                                                    </div> */}
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>
                        </TabPanel>

                        <TabPanel>
                            <section className="bg-gray-100 lg:p-10 dark:bg-gray-900 rounded-2xl">
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
                                                    <button onClick={() => handleButtonClick('Employee')} className={selectedButton === 'Employee' ? "flex justify-center w-full px-6 py-3 text-white bg-red-700 rounded-lg md:w-auto md:mx-2 focus:outline-none mb-2 md:mb-0" : "flex justify-center w-full px-6 py-3 text-white bg-gray-500 rounded-lg md:w-auto md:mx-2 focus:outline-none mb-2 md:mb-0"}>
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
                                                    <button onClick={() => handleButtonClick('HR Officer')} className={selectedButton === 'HR Officer' ? "flex justify-center w-full px-6 py-3 text-white bg-red-700 rounded-lg md:w-auto md:mx-2 focus:outline-none" : "flex justify-center w-full px-6 py-3 text-white bg-gray-500 rounded-lg md:w-auto md:mx-2 focus:outline-none"}>
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
                                                            <div className='flex gap-1'>
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

                                                                    </p>
                                                                    <input id="dropzone-file" onChange={handleGetPhoto} name="photoUpload" type="file" className="hidden" />
                                                                </label>
                                                                <div className="flex flex-col items-center min-w-32 h-32 mx-auto mt-2 text-center bg-white border-2 p-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                                                                    <img className='h-28 object-cover w-full rounded-lg' src={photo || "./user.svg"} alt="" />
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
                                                        type="password"
                                                        placeholder="Enter your password" name="password"
                                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                                    />
                                                </div>
                                                <div>
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
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div >
    );
};

export default Authentication;Upload or darg & amp; drop your file SVG, PNG, JPG or GIF.{ " " }