import { BooleanLiteral } from "typescript";

export interface ClubResponse {
    "name": string
    "school": string
    "location": string
    "openToCollaborate"?: boolean
    "applicationNeeded"?: boolean
    "imagePath": string
    "finance"?: boolean
    "business"?: boolean
    "engineering"?: boolean
    "social_good"?: boolean
    "music"?: boolean
    "medical"?: boolean
    "english"?: boolean
    
}

export const clubOne: ClubResponse = {
    name: "Investment Club",
    school: "Camas High School",
    location: "Camas, WA",
    imagePath: "./img/true.png",
    openToCollaborate: false,
    finance: true,
    business: true
};

export const clubTwo: ClubResponse = {
    name: "Robotics Club",
    school: "Union High School",
    location: "Camas, WA",
    imagePath: "./img/true.png",
    openToCollaborate: true,
    engineering: true
};

export const clubThree: ClubResponse = {
    name: "Key Club",
    school: "Camas High School",
    location: "Camas, WA",
    imagePath: "./img/true.png",
    openToCollaborate: true,
    social_good: true
};

export const clubFour: ClubResponse = {
    name: "DECA",
    school: "South Salem High School",
    location: "Salem, OR",
    imagePath: "./img/true.png",
    openToCollaborate: true,
    business: true
};

export const clubFive: ClubResponse = {
    name: "DECA",
    school: "North Salem High School",
    location: "Salem, MA",
    imagePath: "./img/true.png",
    openToCollaborate: true,
    business: true
};

export const clubSix: ClubResponse = {
    name: "Symphony Orchestra",
    school: "California High School",
    location: "San Ramon, CA",
    imagePath: "./img/true.png",
    openToCollaborate: true,
    music: true
};

export const clubSeven: ClubResponse = {
    name: "Health Occupations Students of America",
    school: "West Salem High School",
    location: "West Salem, WI",
    imagePath: "./img/true.png",
    openToCollaborate: true,
    medical: true
};

export const clubEight: ClubResponse = {
    name: "Women in Computer Science",
    school: "Torrence High School",
    location: "San Diego, CA",
    imagePath: "./img/true.png",
    openToCollaborate: true,
    engineering: true
};

export const clubNine: ClubResponse = {
    name: "Investment Club",
    school: "Norwell High School",
    location: "Norwell, MA",
    imagePath: "./img/true.png",
    openToCollaborate: true,
    finance: true,
    business: true
};

export const clubTen: ClubResponse = {
    name: "Speech & Debate",
    school: "Blanchet Catholic School",
    location: "Salem,OR",
    imagePath: "./img/true.png",
    openToCollaborate: true,
    english: true
};

export const clubEleven: ClubResponse = {
    name: "Debate Club",
    school: "Salem Academy Christian Schools",
    location: "Salem,OR",
    imagePath: "./img/true.png",
    openToCollaborate: true,
    english: true
};

