import '../assets/css/Homepage.css';
import LogoSection from '../components/LogoSection';
import EventsSection from '../components/EventSection';
import GallerySection from '../components/GallerySection';
import SponsorsSection from '../components/SponsorSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function Homepage() {
    return (
        <div className="homepage">
            <LogoSection />
            <EventsSection />
            <GallerySection />
            <SponsorsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default Homepage;
