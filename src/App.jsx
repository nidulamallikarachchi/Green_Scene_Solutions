import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import FooterNew from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/services/Services.jsx";
import ServiceDetails from "./pages/services/ServiceDetails.jsx";
import ScrollToTop from "./utilities/ScrollToTop.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
                <Route path="/services/:id" element={<PageWrapper><ServiceDetails /></PageWrapper>} />
                <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
}

// eslint-disable-next-line react/prop-types
function PageWrapper({ children }) {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="pt-16"
        >
            {children}
        </motion.div>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <ScrollToTop />
            <AnimatedRoutes />
            <FooterNew />
        </Router>
    );
}

export default App;
