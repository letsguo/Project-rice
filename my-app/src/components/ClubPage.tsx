import React from 'react';
import './ClubContainer.css'
import ClubContainer from "./ClubContainer";
import {useRecoilState} from "recoil";
import {searchState} from "../recoil/atom";


interface ClubPageProps {
    title: string;
}

interface ClubResponse {
    "name": string
    "school": string
    "location": string
    "tags": any[]
    "imagePath": string
}

const clubOne: ClubResponse = {
    name: "Investment Club",
    school: "Camas High School",
    location: "Camas, WA",
    tags: [
        {
            "Application Needed": false
        },
        {
            "Open to collab": true
        }
    ],
    imagePath: "./img/true.png"
};

const clubTwo: ClubResponse = {
    name: "Robotics Club",
    school: "Union High School",
    location: "Camas, WA",
    tags: [
        {
            "Application Needed": true
        }
    ],
    imagePath: "./img/true.png"
};

const clubThree: ClubResponse = {
    name: "Key Club",
    school: "Camas High School",
    location: "Camas, WA",
    tags: [
        {
            "Application Needed": true
        }
    ],
    imagePath: "./img/true.png"
};
const clubResponses: ClubResponse[] = [clubOne, clubTwo, clubThree] ;

const ClubPage: React.FC<ClubPageProps> = ({
     title
}) => {
    const messages = ["Investment Club", "hello", "gabe", "and", "sabreena", "welcome", "camas", "union", "wel"];

    const firebaseObjs = [clubOne, clubOne, clubOne, clubOne, clubOne, clubOne, clubOne, clubOne, clubOne];

    const [searchQuery] = useRecoilState(searchState);

    // const shownMessages = messages.filter(item => {
    //     return item.toLowerCase().includes(searchQuery.toLowerCase());
    // });

    const showClubs = clubResponses.filter(item => {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const loadClubParts = (messages: ClubResponse[], startIdx: number) => (
        <div className={"row"}>
            {messages.map((item, index) => (
                <ClubContainer key={startIdx + index} name={item.name} location={item.location} school={item.school}/>
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
