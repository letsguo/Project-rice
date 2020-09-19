import React from 'react';
import './ClubContainer.css'


interface ClubContainerProps {
    message: string;
}

const ClubContainer: React.FC<ClubContainerProps> = ({
    message
}) => {
    return (
        <div className={"clubContainer"}>{message}</div>
    );
};

export default ClubContainer
