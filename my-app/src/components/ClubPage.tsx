import React from 'react';
import './ClubContainer.css'
import ClubContainer from "./ClubContainer";
import {useRecoilState} from "recoil";
import {openToCollabState, searchState} from "../recoil/atom";
import {clubOne, clubTwo, clubThree, clubFour, clubFive, clubSix, clubSeven, clubEight, clubNine, clubTen, clubEleven, ClubResponse} from "../Data";


interface ClubPageProps {
    title: string;
}

const ClubPage: React.FC<ClubPageProps> = ({
     title
}) => {
    const clubResponses: ClubResponse[] = [clubOne, clubTwo, clubThree, clubFour, clubFive, clubSix, clubSeven, clubEight, clubNine, clubTen, clubEleven];

    const [searchQuery] = useRecoilState(searchState);
    const [isOpenToCollab] = useRecoilState(openToCollabState);

    const showClubs = clubResponses.filter(item => {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            isOpenToCollab && item.openToCollaborate
    });

    const loadClubParts = (messages: ClubResponse[], startIdx: number) => (
        <div className={"row"}>
            {messages.map((item, index) => (
                <ClubContainer
                    key={startIdx + index}
                    name={item.name}
                    location={item.location}
                    school={item.school}
                    img={item.imagePath}
                />
                ))}
        </div>
    );

    const renderedClubs = () => {
        const row1 = showClubs.slice(0, 3);
        const row2 = showClubs.slice(3, 6);
        const row3 = showClubs.slice(6, 9);
        return (
            <div className={"col"}>
                {loadClubParts(row1, 1)}
                {loadClubParts(row2, 4)}
                {loadClubParts(row3, 7)}
            </div>
        )
    };

    return (
        <div className={"col-10"}>
            <h1>{title}</h1>
            {renderedClubs()}
        </div>
    );
};

export default ClubPage
