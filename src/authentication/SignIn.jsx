import { GiSeatedMouse } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosNormal from "../hook/useAxiosNormal";
import toast from "react-hot-toast";
import useAuth from "../hook/useAuth";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SignIn = () => {
    const axiosNormal = useAxiosNormal();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state || '/'
    const {
        user,
        logInWithEmailAndPassword,
        signInWithGoogole,
        loading
    } = useAuth();

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])

    const handleGoogleSignUp = async () => {
        try {
            const result = await signInWithGoogole();
            // console.log(result.user)
            if (result.user) {
                const user = result.user;
                const name = user.displayName;
                const photoURL = user.photoURL;
                const phoneNumber = user.phoneNumber;
                const email = user.email;
                const isVerified = false;
                const role = 'employee';
                const designation = "employee";
                const bank_account_no = "";
                const salary = 0;
                const userData = { role, name, email, phoneNumber, photoURL, isVerified, bank_account_no, salary, designation }
                await axiosNormal.post('/users', userData)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => console.log(err))
            }
            toast.success('Log In Successfully')
            navigate(from, { replace: true })
        }
        catch (error) {
            console.log(error)
            toast.error(error?.message)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const result = await logInWithEmailAndPassword(email, password)
                .then(res => console.log(res))
                .then(error => console.log(error))
            console.log(result.user)
            navigate(from, { replace: true })
            toast.success('Login Successful')
        }
        catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }

    if (user || loading) {
        return
    }

    return (
        <section className="bg-gray-100 lg:p-10 dark:bg-gray-900 rounded-2xl">
            <Helmet>
                <title>WorkOn | Login</title>
            </Helmet>
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
                            <form onSubmit={handleLogin} className="w-full px-6 py-8">
                                <div className="flex justify-center mx-auto">
                                    <Link to={'/'} className='relative hover:bg-gray-100/20 dark:hover:bg-gray-800/70 text-black px-2 py-1 rounded-lg active:scale-95'>
                                        <h1 className='text-3xl text-black dark:text-white w-fit font-black font-raleway'><span className='text-red-700'>W</span>ork<span className='text-red-700'>on</span></h1>
                                        <GiSeatedMouse className='absolute -right-2 -top-1 text-red-700' />
                                    </Link>
                                </div>
                                <p className="mb-10 mt-1 text-sm md:text-xl text-center text-gray-600 dark:text-gray-200">
                                    Welcome, buddy! Wanna login to your account?
                                </p>
                                <button
                                    onClick={handleGoogleSignUp}
                                    className="flex w-full items-center justify-center mt-10 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
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
                                </button>
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
                                        name="email"
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
                                        name="password"
                                        id="loggingPassword"
                                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                        type="password"
                                    />
                                </div>
                                <div className="mt-6">
                                    <input type='submit' value="Sign In" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-800 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50 hover:cursor-pointer">
                                    </input>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                                    <Link
                                        to={'/authentication/signup'}
                                        className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                                    >
                                        or sign up
                                    </Link>
                                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;