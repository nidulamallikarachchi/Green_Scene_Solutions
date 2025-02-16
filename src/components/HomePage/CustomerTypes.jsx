import 'react';
import { Home, Briefcase, Factory, Settings } from 'lucide-react';

const CustomerTypes = () => {
    return (
        <section className="py-16  justify-items-center">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Customer Types We Serve</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Residential */}
                    <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
                        <Home className="text-blue-500 w-12 h-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Residential</h3>
                        <p className="text-gray-600">Quality home care services for your residence.</p>
                    </div>


                    {/* Commercial & Body Corporate */}
                    <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
                        <Briefcase className="text-blue-500 w-12 h-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Commercial & Body Corporate</h3>
                        <p className="text-gray-600">Tailored cleaning for businesses and corporate bodies.</p>
                    </div>

                    {/* Industrial */}
                    <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
                        <Factory className="text-blue-500 w-12 h-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Industrial</h3>
                        <p className="text-gray-600">Industrial cleaning solutions to meet your needs.</p>
                    </div>

                    {/* Other Specialized Properties */}
                    <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
                        <Settings className="text-blue-500 w-12 h-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Other Specialized Properties</h3>
                        <p className="text-gray-600">Customized services for unique property types.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerTypes;
