import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy bg-gray-100 text-gray-800 py-10 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                <p className="mb-4">
                    At Green Scene Property Maintenance, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our website or services.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                    We may collect the following types of information:
                    <ul className="list-disc list-inside ml-4">
                        <li>Personal details (e.g., name, phone number, email address) when you contact us or sign up for our services.</li>
                        <li>Usage data (e.g., IP address, browser type, and device information) to enhance your user experience.</li>
                        <li>Any additional information you provide voluntarily.</li>
                    </ul>
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">
                    We use the information collected to:
                    <ul className="list-disc list-inside ml-4">
                        <li>Respond to your inquiries and provide services.</li>
                        <li>Improve our website and services based on user feedback.</li>
                        <li>Comply with legal and regulatory requirements.</li>
                    </ul>
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">3. Sharing Your Information</h2>
                <p className="mb-4">
                    We do not sell, trade, or rent your personal information to others. However, we may share your information with trusted third parties who assist us in operating our business and providing services, as long as they agree to keep your information confidential.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">4. Data Security</h2>
                <p className="mb-4">
                    We implement security measures to protect your personal information. However, please note that no transmission over the Internet is completely secure, and we cannot guarantee the absolute security of your information.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">5. Your Rights</h2>
                <p className="mb-4">
                    You have the right to access, update, or delete the personal information we hold about you. To exercise these rights, please contact us at <a href="mailto:service.greenscene@outlook.com" className="text-blue-500 hover:underline">service.greenscene@outlook.com</a>.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">6. Changes to This Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time. Any changes will be reflected on this page with the revised date.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">7. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:service.greenscene@outlook.com" className="text-blue-500 hover:underline">
                        service.greenscene@outlook.com
                    </a>
                </p>
                <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:045455034" className="text-blue-500 hover:underline">
                        045 455 034
                    </a>
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
