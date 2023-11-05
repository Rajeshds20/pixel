import '../assets/css/Homepage.css';
import LogoSection from '../components/LogoSection';
import EventsSection from '../components/EventSection';
import GallerySection from '../components/GallerySection';
import SponsorsSection from '../components/SponsorSection';
import ContactSection from '../components/ContactSection';
import CoordinatorsSection from '../components/CoordinatorsSection';
// import Footer from '../components/Footer';

function Homepage() {
    return (
        <div className="homepage" data-spy="scroll" data-target="#navbar-example2" data-offset="0">
            <LogoSection />
            <EventsSection />
            <GallerySection />
            <div style={{ marginTop: '-400px' }}>
                <SponsorsSection />
                <CoordinatorsSection />
                <ContactSection />
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default Homepage;
