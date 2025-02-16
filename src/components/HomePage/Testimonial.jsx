import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';

// Sample testimonials data with company names (without images)
const testimonials = [
    {
        name: "John Doe",
        company: "ABC Cleaning Services",
        review: "Absolutely fantastic service! Highly professional and efficient.",
        rating: 5
    },
    {
        name: "Sarah Smith",
        company: "Green Home Solutions",
        review: "The team was very punctual and exceeded my expectations!",
        rating: 4
    },
    {
        name: "Michael Brown",
        company: "Sparkle Commercial Cleaners",
        review: "Great attention to detail. Will definitely use their services again!",
        rating: 5
    },
    {
        name: "Emma Wilson",
        company: "Eco-Friendly Cleaning Co.",
        review: "Affordable and high-quality service. Highly recommend!",
        rating: 4
    }
];

const Testimonials = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4 text-center">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 relative">
                    What Our Clients Say About Us
                    <span className="block w-24 h-1 bg-green-500 mx-auto mt-2 rounded-full"></span>
                </h1>

                <div className="relative overflow-visible h-[250px]"> {/* Adjusts Swiper height */}
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        className="h-full pb-14"
                        style={{ paddingBottom: '40px' }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="relative flex items-center justify-center">
                                <div className="bg-amber-50 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center min-h-[200px] relative">
                                    <p className="text-gray-600 italic mb-3">"{testimonial.review}"</p>

                                    {/* Star Rating */}
                                    <div className="flex mb-3">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5"
                                                fill={i < testimonial.rating ? "#facc15" : "#d1d5db"}
                                                stroke="none"
                                            />
                                        ))}
                                    </div>

                                    {/* Name and Company */}
                                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
