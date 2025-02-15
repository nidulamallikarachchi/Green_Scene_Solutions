import 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images from the new directory
import Alliance from '../../assets/our_clients/Alliance.png';
import BCS from '../../assets/our_clients/BCS.png';
import BlueStone from '../../assets/our_clients/BlueStone.png';
import BodyCorporate from '../../assets/our_clients/BodyCorporate.png';
import MBCM from '../../assets/our_clients/MBCM.png';
import OCVM from '../../assets/our_clients/OCVM.png';
import Select from '../../assets/our_clients/Select.png';
import TheKnight from '../../assets/our_clients/TheKnight.png';
import Tideways from '../../assets/our_clients/Tideway.jpg';
import VictoriaBody from '../../assets/our_clients/VictoriaBody.png';

const clientLogos = [
    { src: Alliance, alt: 'Alliance' },
    { src: BCS, alt: 'BCS' },
    { src: BlueStone, alt: 'BlueStone' },
    { src: BodyCorporate, alt: 'Body Corporate' },
    { src: MBCM, alt: 'MBCM' },
    { src: OCVM, alt: 'OCVM' },
    { src: Select, alt: 'Select' },
    { src: TheKnight, alt: 'The Knight' },
    { src: Tideways, alt: 'Tideways' },
    { src: VictoriaBody, alt: 'Victoria Body' },
];

const OurClients = () => {
    return (
        <section className="py-6 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Our Valued Clients</h2>

                <div className="relative overflow-visible h-[250px]">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={2} // Default for small screens
                        breakpoints={{
                            640: { slidesPerView: 2 }, // For medium screens
                            1024: { slidesPerView: 4 }, // For large screens
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2200, disableOnInteraction: false }}
                        loop={true}
                        className="h-full pb-14"
                        style={{ paddingBottom: '40px' }}
                    >
                        {clientLogos.map((logo, index) => (
                            <SwiperSlide key={index} className="relative flex items-center justify-center">
                                <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-center text-center">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="max-h-full object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default OurClients;
