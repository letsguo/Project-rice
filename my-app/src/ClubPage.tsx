import React from 'react';
import './ClubContainer.css'
import ClubContainer from "./ClubContainer";


interface ClubPageProps {
    title: string;
}

const ClubPage: React.FC<ClubPageProps> = ({
     title
}) => {
    const messages = ["hello", "gabe", "and", "sabreena", "welcome", "new one"];

    const clubs = messages.map((item, index) => (
        <ClubContainer message={item}/>
    ));

    return (
        <div>
            <h1>{title}</h1>
            {clubs}
        </div>
    );
};

export default ClubPage
