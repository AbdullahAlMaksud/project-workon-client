import * as Icons from 'react-icons/fa';
const servicesData = [
    {
        id: 1,
        title: "Web Development",
        description: "Creating responsive and robust websites tailored to your needs.",
        icon: "FaLaptopCode"
    },
    {
        id: 2,
        title: "Mobile App Development",
        description: "Designing user-friendly mobile applications for both Android and iOS platforms.",
        icon: "FaMobileAlt"
    },
    {
        id: 3,
        title: "UI/UX Design",
        description: "Crafting intuitive and engaging user interfaces and experiences.",
        icon: "FaPalette"
    },
    {
        id: 4,
        title: "Digital Marketing",
        description: "Implementing effective marketing strategies to boost your online presence.",
        icon: "FaChartLine"
    },
    {
        id: 5,
        title: "SEO Optimization",
        description: "Improving your website's visibility on search engines to attract more visitors.",
        icon: "FaSearch"
    },
    {
        id: 6,
        title: "Content Creation",
        description: "Producing high-quality content to engage and inform your audience.",
        icon: "FaPenNib"
    },
    {
        id: 7,
        title: "E-commerce Solutions",
        description: "Developing custom e-commerce platforms to grow your online business.",
        icon: "FaShoppingCart"
    },
    {
        id: 8,
        title: "Cloud Services",
        description: "Providing scalable cloud solutions to enhance your business operations.",
        icon: "FaCloud"
    },
    {
        id: 9,
        title: "Cybersecurity",
        description: "Protecting your digital assets with advanced security measures.",
        icon: "FaShieldAlt"
    },
    {
        id: 10,
        title: "IT Consulting",
        description: "Offering expert advice to optimize your IT infrastructure and processes.",
        icon: "FaLightbulb"
    },
    {
        id: 11,
        title: "Blockchain Development",
        description: "Creating secure and transparent blockchain solutions for your business.",
        icon: "FaLock"
    },
    {
        id: 12,
        title: "Artificial Intelligence",
        description: "Leveraging AI technologies to drive innovation and efficiency.",
        icon: "FaRobot"
    }
];


const OurServices = () => {
    return (
        <div className="w-11/12 container mx-auto">
            <div className="flex flex-col justify-center items-center mb-6">
                <h2 className="text-white bg-red-700 px-5 py-1 mb-2 -rotate-2 font-bold text-3xl text-center dark:text-slate-950">Our Services</h2>
                <p className="md:w-2/3 text-center text-sm pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque vitae quasi, possimus veniam aut.</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-3 md:gap-0">

                {servicesData.map(service => {
                    // Dynamically select the icon component based on the icon name in the service data
                    const IconComponent = Icons[service.icon];

                    // Return a card for each service
                    return (
                        <div key={service.id} className="flex flex-col items-center p-4 border-b border-r border-red-700">
                            <div className="text-4xl mb-4 text-red-700">
                                <IconComponent /> {/* Render the icon component */}
                            </div>
                            <h3 className="text-xl font-bold mb-2 dark:text-white">{service.title}</h3>
                            <p className="text-center dark:text-gray-300">{service.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OurServices;