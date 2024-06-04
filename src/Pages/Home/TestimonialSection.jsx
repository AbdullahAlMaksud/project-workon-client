import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Install Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const testimonialsData = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO, Company A",
        testimonial: "This service has transformed our business. The team is amazing and the results speak for themselves.",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Marketing Director, Company B",
        testimonial: "The expertise and dedication of the team exceeded our expectations. Highly recommend!",
        image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
    },
    {
        id: 3,
        name: "Mike Johnson",
        position: "Product Manager, Company C",
        testimonial: "Excellent service and support. Our project was completed on time and within budget.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
    },
    {
        id: 4,
        name: "Emily Davis",
        position: "CTO, Company D",
        testimonial: "Their attention to detail and quality is unparalleled. We are very satisfied with the results.",
        image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
    },
    {
        id: 5,
        name: "Chris Brown",
        position: "COO, Company E",
        testimonial: "Professional, reliable, and outstanding results. I couldn't ask for more.",
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61"
    },
    {
        id: 6,
        name: "Anna Wilson",
        position: "HR Manager, Company F",
        testimonial: "The team was very responsive and accommodating to our needs. Great experience!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
        id: 7,
        name: "David Lee",
        position: "Sales Manager, Company G",
        testimonial: "Innovative solutions and exceptional service. Our sales have increased significantly.",
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
    },
    {
        id: 8,
        name: "Sophia Martinez",
        position: "Finance Director, Company H",
        testimonial: "Very professional and easy to work with. The results were beyond our expectations.",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
        id: 9,
        name: "James Taylor",
        position: "Operations Manager, Company I",
        testimonial: "High-quality service and outstanding results. We are very happy with the outcome.",
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
    },
    {
        id: 10,
        name: "Olivia Anderson",
        position: "Chief Designer, Company J",
        testimonial: "Creative and professional team. They delivered exactly what we needed.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    }
];

const TestimonialSection = () => {
    return (
        <div>
            <div className="pb-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col justify-center items-center mb-6">
                        <h2 className="text-white bg-red-700 px-5 py-1 mb-2 -rotate-2 font-bold text-3xl text-center">What Our Client Say?</h2>
                        <p className="md:w-2/3 text-center text-sm pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque vitae quasi, possimus veniam aut.</p>
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
                                    <div className="bg-white p-6 h-60 rounded-lg shadow-lg border">
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
                    <div className='md:hidden'>
                        <Swiper
                            // slidesPerView={'auto'}
                            // centeredSlides={true}
                            // spaceBetween={30}
                            slidesPerView={1}
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
                                    <div className="bg-white p-6 h-60 rounded-lg shadow-lg border">
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
                                    <div className="bg-white p-6 h-60 rounded-lg shadow-lg border">
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