import React from 'react';
import './ClubContainer.css'


interface ClubContainerProps {
    name: string,
    school: string,
    location: string,
}

const ClubContainer: React.FC<ClubContainerProps> = ({
    name,
    school,
    location
}) => {
    return (
        <div className={"clubContainer"}>{name} {school} {location}</div>
    );
};

export default ClubContainer
