import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import TestimonialSection from "./TestimonialSection";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <OurServices />
            <FeatureSection />
            <TestimonialSection />
            <section className="flex flex-col container w-11/12 mb-10 mx-auto overflow-hidden bg-white rounded  dark:bg-gray-800 md:flex-row md:h-48 border border-red-700">
                <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-red-700 md:dark:bg-gray-800">
                    <div className="px-6 py-6 md:px-8 md:py-0">
                        <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
                            Sign Up For{" "}
                            <span className="text-red-600 dark:text-red-300 md:text-red-300">
                                Project
                            </span>{" "}
                            Updates
                        </h2>
                        <p className="mt-2 text-sm md:text-red-100 dark:text-gray-400 ">
                            Be the first to know about our latest projects, updates, and innovations.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                    <form>
                        <div className="flex flex-col p-1.5 overflow-hidden border rounded dark:border-red-600 lg:flex-row dark:focus-within:border-red-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-red-400 focus-within:ring-red-300">
                            <input
                                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                aria-label="Enter your email"
                            />
                            <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-red-700 rounded hover:bg-red-600 focus:bg-red-600 focus:outline-none">
                                subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Home;