import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Install Swiper modules
import { Autoplay, Pagination, Navigation, EffectCards } from 'swiper/modules';
import { Link } from 'react-router-dom';

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

const cerouselData =
    [
        {
            "id": 1,
            "title": "Welcome to Our App",
            "description": "Discover a new way to manage your tasks and increase productivity.",
            "imageUrl": "https://i.postimg.cc/h4Lt03zB/asasdsddsd-Asset-1-3x.png",
            "link": "https://example.com/features",
            "linkText": "Learn More"
        },
        {
            "id": 2,
            "title": "Track Your Progress",
            "description": "Monitor your progress with our intuitive dashboards and reports.",
            "imageUrl": "https://i.postimg.cc/sD3DH97Z/asasdsd-Asset-1-3x.png",
            "link": "https://example.com/progress",
            "linkText": "View Progress"
        },
        {
            "id": 3,
            "title": "Collaborate with Team",
            "description": "Work together with your team in real-time and achieve more.",
            "imageUrl": "https://i.postimg.cc/T1J2YpMw/asas-Asset-1-3x.png",
            "link": "https://example.com/team",
            "linkText": "Get Started"
        },
        {
            "id": 4,
            "title": "Get Insights",
            "description": "Gain valuable insights from your data to make better decisions.",
            "imageUrl": "https://i.postimg.cc/3J2mmB74/Asset-1-3x.png",
            "link": "https://example.com/insights",
            "linkText": "Explore Insights"
        }
    ]

// className="-mt-16 border-t-[484px] lg:border-t-[584px] border-t-transparent border-r-[70vw] lg:rounded-b-3xl border-r-red-700 border-b-20 border-b-black mb-10"

const HeroSection = () => {
    return (

        <div className=' bg-[url(./wave.svg)] bg-cover  -mt-16  pt-16'>

            <div >
                <Swiper
                    // effect={'cards'}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    pagination={{
                        // clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={false}
                    className="mySwiper"

                >
                    {/* <Swiper
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
                > */}
                    {cerouselData.map((slide) => (
                        <SwiperSlide key={slide.id} className='rounded-xl min-h-[500px] pb-20 pt-28'>
                            <div className='flex items-center'>
                                <div className='w-2/6'>
                                    <img src={slide.imageUrl} alt={slide.title} className="object-cover ml-10" />
                                </div>

                                <div className="w-2/3 rounded-xl text-right px-10 lg:px-20 font-poppins flex flex-col items-end">
                                    <h3 className="text-5xl font-bold text-white">{slide.title}</h3>
                                    <p className="text-white text-2xl pt-4 mb-10 w-3/5 text-right">{slide.description}</p>
                                    <Link className="bg-white text-red-700 px-5 py-2 text-xl font-bold">{slide.linkText}</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
};

export default HeroSection;