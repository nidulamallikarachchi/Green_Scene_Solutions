import 'react';

const WhatsAppButton = () => {
    const phoneNumber = '61425373343'; // Replace with the actual phone number
    const message = 'Hello! I’m interested in your cleaning services. Could you please provide more information on your offerings?';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <div className="fixed bottom-5 right-5 z-50 p-4 bg-green-500 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition duration-300">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    loading="lazy"
                    className="w-12 h-12"
                />
            </div>
        </a>
    );
};

export default WhatsAppButton;
