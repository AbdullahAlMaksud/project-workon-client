import * as Icons from 'react-icons/md';
// import { MdWorkspacePremium, MdCheckBox, MdHelpCenter, MdOutlineAttachMoney } from 'react-icons/md';


const featuresData = [
    {
        id: 1,
        title: "High Quality",
        description: "We ensure the highest quality in all our services.",
        icon: "MdWorkspacePremium",
    },
    {
        id: 2,
        title: "Reliability",
        description: "Our services are reliable and trusted by numerous clients.",
        icon: "MdCheckBox",
    },
    {
        id: 3,
        title: "24/7 Support",
        description: "We provide round-the-clock support for all our clients.",
        icon: "MdHelpCenter",
    },
    {
        id: 4,
        title: "Cost Effective",
        description: "Our services are priced competitively to offer great value.",
        icon: "MdOutlineAttachMoney",
    },
];

const FeatureSection = () => {
    return (
        <div>

            <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col justify-center items-center mb-6">
                        <h2 className="text-white bg-red-700 px-5 py-1 mb-2 -rotate-2 font-bold text-3xl text-center">Our Feature</h2>
                        <p className="md:w-2/3 text-center text-sm pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque vitae quasi, possimus veniam aut.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


                        {featuresData.map((feature) => {
                            const IconComponent = Icons[feature.icon];
                            return (
                                <div key={feature.id} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                                    <IconComponent className="text-purple-500 text-4xl mb-4 mx-auto" />
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-700">{feature.description}</p>
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
