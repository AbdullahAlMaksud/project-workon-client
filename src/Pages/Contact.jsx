import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa6';
import { HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
    return (
        <div className='container w-11/12 mx-auto my-10 '>
            <section className="bg-[url('https://images.unsplash.com/photo-1521747116042-5a810fda9664')] bg-cover dark:bg-[url('https://images.unsplash.com/photo-1521747116042-5a810fda9664')] rounded-2xl">
                <div className='bg-black/70 rounded-2xl p-5 md:p-10 '>
                    <div className="flex justify-center flex-col min-h-screen bg-gray-100/95 dark:bg-gray-900/90 rounded-2xl px-5 md:px-20 py-20">
                        <div>
                            <div className="flex flex-col justify-center items-center mb-6">
                                <h2 className="text-white dark:text-gray-950 bg-red-700 px-5 py-1 -rotate-2 font-bold text-3xl text-center">Contact Info</h2>
                                <p className="md:w-2/3 text-center text-sm pt-3 dark:text-gray-100">Feel free get in touch with us!</p>
                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                                <a href="https://maps.app.goo.gl/9UYdnVfmf2so5brQ8">
                                    <div className='rounded-xl bg-gray-50/50 dark:bg-gray-900/90 flex flex-col items-center gap-2 justify-center py-10 px-10 lg:min-h-40'>
                                        <div>
                                            <HiLocationMarker className='text-3xl dark:text-white' />
                                        </div>
                                        <div>
                                            <h4 className='text-center dark:text-gray-200'>51, West Tejturi Bazar, Dhaka-1216</h4>
                                        </div>
                                    </div>
                                </a>
                                <a href="tel:+8801767211795">
                                    <div className='rounded-xl dark:bg-gray-900/90 bg-gray-50/50 flex flex-col items-center gap-2 justify-center py-10 px-10 lg:min-h-40'>
                                        <div>
                                            <FaPhoneAlt className='text-2xl dark:text-white' />
                                        </div>
                                        <div>
                                            <h4 className='text-center dark:text-gray-200'>+880 (1767) 211795</h4>
                                        </div>
                                    </div>
                                </a>
                                <a href="mailto:maksud.workspace@gmail.com">
                                    <div className='rounded-xl dark:bg-gray-900/90 bg-gray-50/50 flex flex-col items-center gap-2 justify-center py-10 px-10 lg:min-h-40'>
                                        <div>
                                            <FaEnvelope className='text-2xl dark:text-white' />
                                        </div>
                                        <div>
                                            <h4 className='text-center overflow-auto dark:text-gray-200'>maksud.workspace@gmail.com</h4>
                                        </div>
                                    </div>
                                </a>
                                <div>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col justify-center items-center mb-6 mt-10">
                                <h2 className="text-white dark:text-gray-950 bg-red-700 px-5 py-1 -rotate-2 font-bold text-2xl md:text-3xl text-center">Where we are?</h2>
                                <p className="md:w-2/3 text-center text-sm pt-3 dark:text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque vitae quasi, possimus veniam aut.</p>
                            </div>
                            <div className="mb-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3651.741089422109!2d90.3890932267051!3d23.756610500456592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1717497144976!5m2!1sen!2sbd"
                                    width="100%"
                                    height="300"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center mb-6 mt-10">
                            <h2 className="text-white bg-red-700 px-5 py-1 -rotate-2 font-bold text-2xl md:text-3xl text-center dark:text-gray-950">Anything to say?</h2>
                            <p className="md:w-2/3 text-center text-sm pt-3 dark:text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque vitae quasi, possimus veniam aut.</p>
                        </div>
                        <form className='border rounded-xl lg:p-10'>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-700"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-700"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-700"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Contact;