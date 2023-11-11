// import React from 'react';
// import './CoordinatorsSection.css'; // Assuming you have a CSS file for styling
import "../assets/css/CoordinatorsSection.css";
import { Tilt } from 'react-tilt'


const CoordinatorsSection = () => {

    const facultyCoordinators = [
        {
            name: 'K Bharati, HOD CSE',
            designation: 'Faculty Coordinator,',
            image: 'https://picsum.photos/seed/picsum/400/400'
        },
        {
            name: 'Prof.P. Shobha Bindu, Professor',
            designation: 'Faculty Coordinator',
            image: 'https://picsum.photos/seed/picsum/400/400'
        },
        {
            name: 'Prof. A.P.Siva Kumar, Professor',
            designation: 'Faculty Coordinator',
            image: 'https://picsum.photos/seed/picsum/400/400'
        }
    ];

    const studentCoordinators = [
        {
            name: 'Madhu Bandaru',
            designation: 'Students Coordinator',
            email: "madhubandaru@gmail.com",
            phoneNumber: 9392056482
        },
        {
            name: 'Dummy',
            designation: 'Student Coordinator',
            image: 'https://picsum.photos/seed/picsum/400/400'
        },
        {
            name: 'Dummy',
            designation: 'Student Coordinator',
            image: 'https://picsum.photos/seed/picsum/400/400'
        },
        {
            name: 'Dummy',
            designation: 'Student Coordinator',
            image: 'https://picsum.photos/seed/picsum/400/400'
        },
        {
            name: 'Dummy',
            designation: 'Student Coordinator',
            image: 'https://picsum.photos/seed/picsum/400/400'
        },
        {
            name: 'Dummy',
            designation: 'Student Coordinator',
            image: 'https://picsum.photos/seed/picsum/400/400'
        }

    ];

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <>
            <h1 style={{ color: 'white' }}>Pixel Coordinators :</h1>
            <div className="coordinators-section">
                <div className="faculty-coordinators">
                    {facultyCoordinators.map(coordinator => (
                        <Tilt options={defaultOptions} key={coordinator.name} style={{ backgroundColor: '#482239', borderRadius: '20px' }}>
                            <div className="coordinator-card" key={coordinator.name}>
                                <img src={coordinator.image} alt={coordinator.name} className="coordinator-image" />
                                <center><h2 className="coordinator-name">{coordinator.name}</h2></center>
                                <center><p className="coordinator-designation">{coordinator.designation}</p></center>
                            </div>
                        </Tilt>
                    ))}
                </div>
                {/* <div className="student-coordinators">
                    {studentCoordinators.map(coordinator => (
                        <Tilt options={defaultOptions} key={coordinator.name} style={{backgroundColor:'#482239', borderRadius:'20px'}}>
                        <div className="coordinator-card" key={coordinator.name}>
                            <img src={coordinator.image} alt={coordinator.name} className="coordinator-image" />
                            <h2 className="coordinator-name">{coordinator.name}</h2>
                            <center><p className="coordinator-designation">{coordinator.designation}</p></center>
                        </div>
                        </Tilt>
                        
                    ))}
                </div> */}
                <div className="student-coordinators">
                    <h2>Student Coordinators</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Mail ID</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentCoordinators.map((coordinator, index) => (
                                <tr key={index}>
                                    <td>{coordinator.name}</td>
                                    <td>{coordinator.designation}</td>
                                    <td>{coordinator.email}</td>
                                    <td>{coordinator.phoneNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CoordinatorsSection;