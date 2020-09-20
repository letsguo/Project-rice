import React from 'react';
import './ClubDetails.css'
import ClubPreview from "./ClubPreview";

interface ClubDetailsProps {
    name: string,
}

const ClubDetails: React.FC<ClubDetailsProps> = ({
     name,
}) => {
    return (
        <ClubPreview/>
    );
};

export default ClubDetails
