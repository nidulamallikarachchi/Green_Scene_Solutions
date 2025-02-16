import { CheckCircle, DollarSign, Clock } from 'lucide-react';

const CommitmentSection = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4 text-center">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 relative">
                    Our Commitment to Excellence
                    <span className="block w-24 h-1 bg-green-500 mx-auto mt-2 rounded-full"></span>
                </h1>

                <p className="text-xl text-gray-600 mb-10">
                    At Green Scene, we blend quality with affordability. Our expert team uses advanced techniques and eco-friendly products to deliver spotless results you can rely on.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Quality Card */}
                    <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-4 text-blue-600">
                            <CheckCircle className="w-8 h-8 mx-auto" />
                        </div>
                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Quality</h3>
                        <p className="text-gray-600">
                            Premium products for a pristine finish. We only use top-tier eco-friendly cleaning supplies to ensure your spaces shine.
                        </p>
                    </div>

                    {/* Affordability Card */}
                    <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-4 text-green-500">
                            <DollarSign className="w-8 h-8 mx-auto" />
                        </div>
                        <h3 className="text-2xl font-semibold text-green-500 mb-4">Affordability</h3>
                        <p className="text-gray-600">
                            Competitive pricing without compromise. We aim to make our top-quality services accessible to everyone.
                        </p>
                    </div>

                    {/* Reliability Card */}
                    <div className="bg-yellow-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-4 text-yellow-500">
                            <Clock className="w-8 h-8 mx-auto" />
                        </div>
                        <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Reliability</h3>
                        <p className="text-gray-600">
                            Consistent and prompt service. We value your time and always ensure timely and dependable results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommitmentSection;
