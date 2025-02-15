import 'react';
import CountUp from 'react-countup';
import { Star, Leaf, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Experienced Professionals */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
                        <Star className="text-blue-500 w-12 h-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Experienced & Trained Professionals</h3>
                        <p className="text-gray-600">Our team consists of highly trained and experienced professionals.</p>
                    </div>

                    {/* Eco-Friendly Solutions */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
                        <Leaf className="text-green-500 w-12 h-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Eco-Friendly Cleaning Solutions</h3>
                        <p className="text-gray-600">We use environmentally safe products to protect your space and the planet.</p>
                    </div>

                    {/* Affordable Pricing */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
                        <DollarSign className="text-yellow-500 w-12 h-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Affordable & Transparent Pricing</h3>
                        <p className="text-gray-600">We offer competitive prices with no hidden fees.</p>
                    </div>

                    {/* Years in Business */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
                        <div className="text-blue-500 text-4xl font-semibold mb-4">
                            <CountUp end={10} duration={3} />+
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Years in Business</h3>
                        <p className="text-gray-600">We’ve been providing exceptional cleaning services for over 10 years.</p>
                    </div>

                    {/* Customer Satisfaction */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
                        <div className="text-green-500 text-4xl font-semibold mb-4">
                            <CountUp end={100} duration={3} />
                            <span className="text-xl">%</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                        <p className="text-gray-600">Our clients are 100% satisfied with our cleaning services.</p>
                    </div>

                    {/* Number of Contracts */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
                        <div className="text-yellow-500 text-4xl font-semibold mb-4">
                            <CountUp end={400} duration={3} />+
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Contracts Completed</h3>
                        <p className="text-gray-600">We’ve successfully completed over 400 contracts, serving a wide range of clients.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
