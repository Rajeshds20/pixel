import PixelLogo from '../assets/img/pixellogo.png'

const LogoSection = () => {
    return (
        <div className="logo-section">
            <img src={PixelLogo} alt="PIXEL 2023 logo" className="logo" />
            <p className="description">Description of the tech fest goes here.</p>
        </div>
    );
};

export default LogoSection;
