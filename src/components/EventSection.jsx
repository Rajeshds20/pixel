
import { useEffect, useState } from 'react';
import Event from './Event';
import "../assets/css/EventSection.css";
const EventsSection = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:5000/events')
        //     .then(res => res.json())
        //     .then(data => setEvents(data));
        setEvents(['Coding Clash', 'Paper Presentation', 'Photography', 'Memegram'])
    }, []);

    return (
        <div className="events-section" id='events' >
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section-title">Pixel Events</h2>
                    </div>
                </div>

                <div className="events-list row">
                    {events?.map((event, index) => (
                        <Event key={index} event={event} />
                    ))}

                </div>


            </div>
        </div>
    );
};

export default EventsSection;