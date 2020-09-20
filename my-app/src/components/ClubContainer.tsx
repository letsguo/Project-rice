import React from 'react';
import './ClubContainer.css'
import  { FirebaseContext } from './Firebase';

interface ClubContainerProps {
    message: string;
}

const ClubContainer: React.FC<ClubContainerProps> = ({
    message
}) => {
    return (
        <FirebaseContext.Consumer>
        {firebase => {
            return <div className={"clubContainer"}>{message}</div>
        }}
      </FirebaseContext.Consumer>
    );
};

export default ClubContainer
