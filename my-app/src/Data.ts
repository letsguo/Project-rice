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
    imagePath: "https://passivecashsystems.com/wp-content/uploads/2019/10/1-88.jpg",
    openToCollaborate: false,
    finance: true,
    business: true
};

export const clubTwo: ClubResponse = {
    name: "Robotics Club",
    school: "Union High School",
    location: "Camas, WA",
    imagePath: "https://d3b8hk1o42ev08.cloudfront.net/wp-content/uploads/2018/07/club-752x440.jpg",
    openToCollaborate: true,
    engineering: true
};

export const clubThree: ClubResponse = {
    name: "Key Club",
    school: "Sunset High School",
    location: "Austin, TX",
    imagePath: "https://www.mths.us/files/2016/02/Key-Club-Logo-188vzm4.jpg",
    openToCollaborate: true,
    social_good: true
};

export const clubFour: ClubResponse = {
    name: "Black Girls in Tech",
    school: "South Salem High School",
    location: "Salem, OR",
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8r8eL3gzU9y_eEv6RONSb0bdHw_RAjwTfYw&usqp=CAU",
    openToCollaborate: true,
    business: true,
    engineering: true
};

export const clubFive: ClubResponse = {
    name: "DECA",
    school: "North Salem High School",
    location: "Salem, MA",
    imagePath: "https://media-exp1.licdn.com/dms/image/C561BAQEWrF3juxY0Ng/company-background_10000/0?e=2159024400&v=beta&t=n7DYPRgwTQjGhzlBWcSaQdhQ8jGHANi0VlYMQcVNopw",
    openToCollaborate: true,
    business: true
};

export const clubSix: ClubResponse = {
    name: "Symphony Orchestra",
    school: "California High School",
    location: "San Ramon, CA",
    imagePath: "https://lh3.googleusercontent.com/proxy/Yn6GHE_hCgSMbtkuumVJ67lw2bJ-55ZsvbIvRGJyzmLO4rmtgO4aOSvL-z6gkvIoy8RpQRxeRXpBc3n8H0aLkpzcdVjiFpTi5HVj8aI4UKkpGASitTUsL1UmKBnPeJh6Du5bAPl9J6Go",
    openToCollaborate: true,
    music: true
};

export const clubSeven: ClubResponse = {
    name: "Health Occupations Students of America",
    school: "West Salem High School",
    location: "West Salem, WI",
    imagePath: "https://www.stuorg.iastate.edu/uploads/org-site/ckuploads/385/legacy-header.jpg",
    openToCollaborate: true,
    medical: true
};

export const clubEight: ClubResponse = {
    name: "Women in Tech",
    school: "Torrence High School",
    location: "San Diego, CA",
    imagePath: "https://www.exasol.com/app/uploads/2020/06/women-in-tech.jpg",
    openToCollaborate: true,
    engineering: true
};

export const clubNine: ClubResponse = {
    name: "Investment Club",
    school: "Norwell High School",
    location: "Norwell, MA",
    imagePath: "https://www.gllholdings.com/wp-content/uploads/2019/07/close-up-of-investors-around-savings-deciding-C72WJM9-1080x675.jpg",
    openToCollaborate: true,
    finance: true,
    business: true
};

export const clubTen: ClubResponse = {
    name: "Speech & Debate",
    school: "Blanchet Catholic School",
    location: "Salem,OR",
    imagePath: "https://www.sbpsb.org/cms/lib/LA01907342/Centricity/Domain/2263/shutterstock_260135678.jpg",
    openToCollaborate: true,
    english: true
};

export const clubEleven: ClubResponse = {
    name: "Debate Club",
    school: "Salem Academy Christian Schools",
    location: "Salem,OR",
    imagePath: "https://school.fultonschools.org/hs/riverwood/PublishingImages/Club%20-%20OLAS/Debate%20gavel.png",
    openToCollaborate: true,
    english: true
};

export const clubTwelve: ClubResponse = {
    name: "Cooking Club",
    school: "Beaverton High School",
    location: "Beaverton,OR",
    imagePath: "https://wohsclubs.weebly.com/uploads/2/1/1/3/21131982/header_images/1448894573.jpg",
    openToCollaborate: true
};

export const clubThirteen: ClubResponse = {
    name: "Health Services",
    school: "Sunshine High School",
    location: "Las Vegas, NV",
    imagePath: "https://www.kindpng.com/picc/m/265-2650637_health-and-wellness-fair-logos-hd-png-download.png",
    openToCollaborate: true
};

export const clubFourteen: ClubResponse = {
    name: "Tennis",
    school: "Dallas High School",
    location: "Dallas, TX",
    imagePath: "https://image-cdn.essentiallysports.com/wp-content/uploads/20200316205830/Tennis-4.jpg",
    openToCollaborate: false
};

export const clubFifteen: ClubResponse = {
    name: "Asian Club",
    school: "Northview High School",
    location: "Tuscon, Arizona",
    imagePath: "https://www.lschs.org/data/news/thumbs/6504.full.jpg",
    openToCollaborate: false
};