import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Install Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useAxiosNormal from '../../hook/useAxiosNormal';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const TestimonialSection = () => {
    const queryClient = useQueryClient()
    const axiosNormal = useAxiosNormal();
    const getTestimonial = async () => {
        const res = await axiosNormal.get('/testimonial');
        return res.data;
    };
    const { data: testimonialsData, isLoading, error } = useQuery({
        queryKey: ['testimonial'],
        queryFn: getTestimonial,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error fetching carousel data: {error.message}</div>;
    }


    return (
        <div>
            <div className="pb-12">
                <div className="container w-11/12 mx-auto">
                    <div className="flex flex-col justify-center items-center mb-6">
                        <h2 className="text-white dark:text-slate-950 bg-red-700 px-5 py-1 mb-2 -rotate-2 font-bold text-3xl text-center">What Our Client Say?</h2>
                        <p className="md:w-2/3 text-center text-sm pt-3 opacity-70">At WorkOn, we’re committed to delivering exceptional solutions that meet your unique needs.</p>
                    </div>

                    <div className='md:hidden shadow-md shadow-black/20 rounded-sm'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={25}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {testimonialsData.map((testimonial) => (
                                <SwiperSlide key={testimonial.id} className='rounded-xl'>
                                    <div className="bg-white p-6 h-60 rounded-xl">
                                        <div className="flex items-center mb-4">
                                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-20 rounded-full mr-4 object-cover" />
                                            <div>
                                                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                                <p className="text-gray-600">{testimonial.position}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700">{testimonial.testimonial}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>


                    <div className='hidden md:flex lg:hidden'>
                        <Swiper
                            slidesPerView={1.5}
                            spaceBetween={25}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                // clickable: true,
                                dynamicBullets: true,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {testimonialsData.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className=" p-6 mb-10 h-60 rounded-lg bg-white dark:bg-gray-700/60">
                                        <div className="flex items-center mb-4">
                                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-20 rounded-full mr-4 object-cover" />
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                                                <p className="text-gray-600 dark:text-gray-300">{testimonial.position}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-400">{testimonial.testimonial}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className='hidden lg:flex'>
                        <Swiper
                            // slidesPerView={'auto'}
                            // centeredSlides={true}
                            // spaceBetween={30}
                            slidesPerView={2.5}
                            spaceBetween={25}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                // clickable: true,
                                dynamicBullets: true,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {testimonialsData.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="bg-white p-6 h-60 rounded-lg shadow-lg mb-10">
                                        <div className="flex items-center mb-4">
                                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-20 rounded-full mr-4 object-cover" />
                                            <div>
                                                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                                <p className="text-gray-600">{testimonial.position}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700">{testimonial.testimonial}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;