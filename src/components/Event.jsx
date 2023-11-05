import PropTypes from 'prop-types';

const Event = ({ imageUrl, altText, link }) => {
    return (
        <a href={link} className="event">
            <img src={imageUrl} alt={altText} className="event-img" />
        </a>
    );
};

Event.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Event;