import PropTypes from 'prop-types';

const Event = ({ imageUrl = 'https://picsum.photos/seed/picsum/100/100', altText, event }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <img src={imageUrl} className="card-img-top" alt={event.title} />
            <div className="card-body">
                <h5 className="card-title">{event}</h5>
                <p className="card-text">{altText}</p>
            </div>
        </div>
    );
};

Event.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    event: PropTypes.string.isRequired,
};

export default Event;