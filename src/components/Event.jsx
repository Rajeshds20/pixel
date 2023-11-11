import React from 'react';
import PropTypes from 'prop-types';
import "../assets/css/EventSection.css";
import { useNavigate } from 'react-router-dom';
const Event = ({ imageUrl = 'https://picsum.photos/seed/picsum/100/100', altText, event }) => {

    const navigate = useNavigate();

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 eventeach"
            style={{ cursor: "pointer" }}
            onClick={() => {
                const ev = event.replace(/\s+/g, '-').toLowerCase();
                navigate(`/events/${ev}`);
            }}
        >
            <img src={imageUrl} className="card-img-top" alt={event.title} />

            <div className="card-body">
                <h5 className="card-title">{event}</h5>
                <p className="card-text">{altText}</p>
                <div className='participate'>
                    <button className='participate-button' /*src={event.Url}*/>Participate</button>
                </div>
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