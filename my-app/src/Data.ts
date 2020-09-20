export interface ClubResponse {
    "name": string
    "school": string
    "location": string
    "tags": any[]
    "imagePath": string
}

export const clubOne: ClubResponse = {
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

export const clubTwo: ClubResponse = {
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

export const clubThree: ClubResponse = {
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
