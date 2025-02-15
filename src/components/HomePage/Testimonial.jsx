import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';

// Sample testimonials data
const testimonials = [
    {
        name: "John Doe",
        review: "Absolutely fantastic service! Highly professional and efficient.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "Sarah Smith",
        review: "The team was very punctual and exceeded my expectations!",
        rating: 4,
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        name: "Michael Brown",
        review: "Great attention to detail. Will definitely use their services again!",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        name: "Emma Wilson",
        review: "Affordable and high-quality service. Highly recommend!",
        rating: 4,
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">What Our Clients Say About Us</h2>

                <div className="relative overflow-visible "> {/* Allows hover effect to expand properly */}
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
                        className="pb-14"
                        style={{ paddingBottom: '40px' }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="relative flex items-center justify-center">
                                <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 min-h-[250px] relative">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
                                    <p className="text-gray-600 italic mb-3">"{testimonial.review}"</p>

                                    {/* Star Rating with No Outline */}
                                    <div className="flex mb-3">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5"
                                                fill={i < testimonial.rating ? "#facc15" : "#d1d5db"}
                                                stroke="none" // Removes the outline
                                            />
                                        ))}
                                    </div>

                                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
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
