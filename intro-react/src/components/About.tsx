import { ExperienceProps, PersonalInfo } from "../types/types";
import '../styles/style.css'
import Experiences from "./Experiences";

type AboutProps = {
    personalInfo: PersonalInfo,
    listOfExperiences: ExperienceProps[],
    showEmailButton: () => JSX.Element,
};

export default function About({ personalInfo, listOfExperiences, showEmailButton }: AboutProps) {

    return(
        <aside className="aboutAside">
            <h2>Om meg</h2>
            <img src={personalInfo.personalImageLink} alt={personalInfo.name} id="aboutProfilePicture"/>

            <ul>
                <li><b>Navn:</b> {personalInfo.name}</li>
                <li><b>Utdanning:</b> {personalInfo.degree}.</li>
                <li><b>Studiepoeng:</b> {personalInfo.points}</li>
                <li>{showEmailButton()}</li>
            </ul>
            <h2>Erfaring</h2>
            <Experiences listOfExperiences={listOfExperiences} />
        </aside>
    );
}
