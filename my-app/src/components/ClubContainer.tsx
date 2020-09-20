import React from 'react';
import './ClubContainer.css'
import  { FirebaseContext } from './Firebase';

interface ClubContainerProps {
    name: string,
    school: string,
    location: string,
    img: string,
}

const ClubContainer: React.FC<ClubContainerProps> = ({
    name,
    school,
    location,
    img,
}) => {
    return (
        <FirebaseContext.Consumer>
        {firebase => {
            return (
                <div className={"clubContainer"}>
                    <img className={"cardImg"} src={img} alt={name} />
                    {name}
                </div>
            );
        }}
      </FirebaseContext.Consumer>
    );
};

export default ClubContainer
