import 'react';
import CountUp from 'react-countup';

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-blue-500 text-4xl font-semibold mb-4">
                            <CountUp end={100} duration={3} />
                            <span className="text-xl">%</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                        <p className="text-gray-600">Our clients are 100% satisfied with our cleaning services.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-blue-500 text-4xl font-semibold mb-4">
                            <CountUp end={10} duration={3} />+
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Years in Business</h3>
                        <p className="text-gray-600">We’ve been providing exceptional cleaning services for over 10 years.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-blue-500 text-4xl font-semibold mb-4">
                            <CountUp end={400} duration={3} />+
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Number of Contracts Taken</h3>
                        <p className="text-gray-600">We’ve successfully completed over 400 contracts, serving a wide range of clients.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
