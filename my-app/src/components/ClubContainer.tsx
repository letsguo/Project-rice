import React from 'react';
import './ClubContainer.css'
import  { FirebaseContext } from './Firebase';
import {useHistory} from "react-router-dom";

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

    const history = useHistory();
    const goToClubDetails = () => {
        history.push("/club")
    };

    return (
        <FirebaseContext.Consumer>
            {firebase => {
                return (
                    <div className={"clubContainer"} onClick={goToClubDetails}>
                        <img className={"cardImg"} src={img} alt={name} />
                        {name} - {school}
                    </div>
            );
        }}
      </FirebaseContext.Consumer>
    );
};

export default ClubContainer
