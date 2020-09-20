import React from 'react';
import './ClubContainer.css'
import  { FirebaseContext } from './Firebase';

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
        <FirebaseContext.Consumer>
        {firebase => {
            return <div className={"clubContainer"}>{name} {school} {location} </div>
        }}
      </FirebaseContext.Consumer>
    );
};

export default ClubContainer
