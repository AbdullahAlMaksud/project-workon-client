import { useQuery, useQueryClient } from '@tanstack/react-query';
import * as Icons from 'react-icons/md';
import useAxiosNormal from '../../hook/useAxiosNormal';
import Loading from '../../components/Loading';


const FeatureSection = () => {
    const queryClient = useQueryClient()
    const axiosNormal = useAxiosNormal();
    const getFeature = async () => {
        const res = await axiosNormal.get('/feature');
        return res.data;
    };
    const { data: featuresData, isLoading, error } = useQuery({
        queryKey: ['feature'],
        queryFn: getFeature,
    });

    if (isLoading) {
        return <Loading />;
    }
    if (error) {
        return <div>Error fetching carousel data: {error.message}</div>;
    }

    console.log(featuresData)
    return (
        <div>

            <div className="py-12">
                <div className="container w-11/12 mx-auto">
                    <div className="flex flex-col justify-center items-center mb-6">
                        <h2 className="text-white dark:text-slate-950 bg-red-700 px-5 py-1 mb-2 -rotate-2 font-bold text-3xl text-center">Our Feature</h2>
                        <p className="md:w-2/3 text-center text-sm pt-3 opacity-70">At WorkOn, we’ve curated a set of powerful features designed to enhance your experience. Dive in and discover what sets us apart!</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


                        {featuresData.map((feature) => {
                            const IconComponent = Icons[feature.icon];
                            return (
                                <div key={feature.id} className="bg-gray-100 dark:bg-gray-800/50 p-6 text-center">
                                    <IconComponent className="text-purple-500 dark:text-orange-700 text-4xl mb-4 mx-auto" />
                                    <h3 className="text-xl dark:text-white font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
