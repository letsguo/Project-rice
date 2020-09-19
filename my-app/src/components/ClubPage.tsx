import React from 'react';
import './ClubContainer.css'
import ClubContainer from "./ClubContainer";
import {useRecoilState} from "recoil";
import {searchState} from "../recoil/atom";


interface ClubPageProps {
    title: string;
}

const ClubPage: React.FC<ClubPageProps> = ({
     title
}) => {
    const messages = ["JJ", "hello", "gabe", "and", "sabreena", "welcome", "camas", "union", "wel"];

    const [searchQuery] = useRecoilState(searchState);

    const shownMessages = messages.filter(item => {
        return item.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const loadClubParts = (messages: string[], startIdx: number) => (
        <div className={"row"}>
            {messages.map((item, index) => (
                <ClubContainer key={startIdx + index} message={item}/>
                ))}
        </div>
    );

    const renderedClubs = () => {
        const row1 = shownMessages.slice(0, 3);
        const row2 = shownMessages.slice(3);
        return (
            <div className={"col"}>
                {loadClubParts(row1, 1)}
                {loadClubParts(row2, 4)}
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
