import { ExperienceProps, PersonalInfo } from "../types/types";

export const personalInfo: PersonalInfo = {
    name: 'Jørgen Hovet',
    contactEmail: 'jorgeho@hiof.no',
    degree: 'Bachelor Informatikk',
    points: '120',
    personalImageLink: 'src/images/profilePicture.png'
};

export const listOfExperiences: ExperienceProps[] = [
    { id: "experience_1", description: 'Figma UI for customer X' },
    { id: "experience_2", description: 'Website for customer Y' }
];