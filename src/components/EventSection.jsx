import Event from './Event';

const EventsSection = () => {
    return (
        <div className="events-section">
            <h2 className="section-title">Events</h2>
            <div className="events">
                <Event imageUrl="event1.png" altText="Event 1" link="/event1" />
                <Event imageUrl="event2.png" altText="Event 2" link="/event2" />
                <Event imageUrl="event3.png" altText="Event 3" link="/event3" />
            </div>
        </div>
    );
};

export default EventsSection;
