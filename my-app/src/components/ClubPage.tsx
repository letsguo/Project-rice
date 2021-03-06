import React from 'react';
import './ClubContainer.css'
import ClubContainer from "./ClubContainer";
import {useRecoilState} from "recoil";
import {acceptMembersState, openToCollabState, searchState} from "../recoil/atom";
import {clubOne, clubTwo, clubThree, clubFour, clubFive, clubSix, clubSeven, clubEight, clubNine, clubTen, clubEleven, clubTwelve, clubThirteen, clubFourteen, clubFifteen, ClubResponse} from "../Data";


interface ClubPageProps {
    title: string;
}

const ClubPage: React.FC<ClubPageProps> = ({
     title
}) => {
    const clubResponses: ClubResponse[] = [clubOne, clubTwo, clubThree, clubFour, clubFive, clubSix, clubSeven, clubEight, clubNine, clubTen, clubEleven, clubTwelve, clubThirteen, clubFourteen, clubFifteen];

    const [searchQuery] = useRecoilState(searchState);
    const [isOpenToCollab] = useRecoilState(openToCollabState);
    const [isAcceptMember] = useRecoilState(acceptMembersState);

    const showClubs = clubResponses.filter(item => {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (isOpenToCollab == item.openToCollaborate || isAcceptMember == item.business)
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
        const row4 = showClubs.slice(9, 12);
        return (
            <div className={"col"}>
                {loadClubParts(row1, 1)}
                {loadClubParts(row2, 4)}
                {loadClubParts(row3, 7)}
                {loadClubParts(row4, 10)}
            </div>
        )
    };

    // <a href="https://imgbb.com/"><img src="https://i.ibb.co/ySM6bWc/Screen-Shot-2020-09-20-at-2-20-46-AM.png" alt="Screen-Shot-2020-09-20-at-2-20-46-AM" border="0" /></a>
    const logo = "https://i.ibb.co/ySM6bWc/Screen-Shot-2020-09-20-at-2-20-46-AM.png";

    return (
        <div className={"col-10"}>
            <img className={"logo"} src={logo} alt={"logo"} />
            <h1>{title}</h1>
            {renderedClubs()}
        </div>
    );
};

export default ClubPage
