// import React from 'react';
// import './CoordinatorsSection.css'; // Assuming you have a CSS file for styling

const CoordinatorsSection = () => {

    const facultyCoordinators = [
        {
            name: 'Dummy',
            designation: 'Faculty Coordinator',
            image: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            name: 'Dummy',
            designation: 'Faculty Coordinator',
            image: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            name: 'Dummy',
            designation: 'Faculty Coordinator',
            image: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            name: 'Dummy',
            designation: 'Faculty Coordinator',
            image: 'https://picsum.photos/seed/picsum/200/300'
        },
    ];

    const studentCoordinators = [
        {
            name: 'Dummy',
            designation: 'Faculty Coordinator',
            image: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            name: 'Dummy',
            designation: 'Faculty Coordinator',
            image: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            name: 'Dummy',
            designation: 'Faculty Coordinator',
            image: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            name: 'Dummy',
            designation: 'Faculty Coordinator',
            image: 'https://picsum.photos/seed/picsum/200/300'
        },
    ];


    return (
        <><h1>Coordinators Team</h1>
            <div className="coordinators-section">
                <div className="faculty-coordinators">
                    {facultyCoordinators.map(coordinator => (
                        <div className="coordinator-card" key={coordinator.name}>
                            <img src={coordinator.image} alt={coordinator.name} className="coordinator-image" />
                            <h2 className="coordinator-name">{coordinator.name}</h2>
                            <p className="coordinator-designation">{coordinator.designation}</p>
                        </div>
                    ))}
                </div>
                <div className="student-coordinators">
                    {studentCoordinators.map(coordinator => (
                        <div className="coordinator-card" key={coordinator.name}>
                            <img src={coordinator.image} alt={coordinator.name} className="coordinator-image" />
                            <h2 className="coordinator-name">{coordinator.name}</h2>
                            <p className="coordinator-designation">{coordinator.designation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CoordinatorsSection;