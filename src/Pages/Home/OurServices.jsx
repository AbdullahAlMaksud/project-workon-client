import { useQuery, useQueryClient } from '@tanstack/react-query';
import * as Icons from 'react-icons/fa';
import useAxiosNormal from '../../hook/useAxiosNormal';


const OurServices = () => {
    const queryClient = useQueryClient()
    const axiosNormal = useAxiosNormal();
    const getService = async () => {
        const res = await axiosNormal.get('/service');
        return res.data;
    };
    const { data: servicesData, isLoading, error } = useQuery({
        queryKey: ['service'],
        queryFn: getService,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error fetching carousel data: {error.message}</div>;
    }
    return (
        <div className="w-11/12 container mx-auto">
            <div className="flex flex-col justify-center items-center mb-6">
                <h2 className="text-white bg-red-700 px-5 py-1 mb-2 -rotate-2 font-bold text-3xl text-center dark:text-slate-950">Our Services</h2>
                <p className="md:w-2/3 text-center text-sm pt-3 opacity-70">Crafting digital solutions tailored to your needs! From web development to SEO optimization, we’ve got you covered. Let’s transform your vision into reality!</p>
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