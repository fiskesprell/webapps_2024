import { personalInfo } from "../config/testData";


export default function Navigation() {
    const name = personalInfo.name;
    
    return(
        <>
            <nav>
                <ul>
                    <li><h1>{name}'s Portfolio</h1></li>
                </ul>
            </nav>
        </>
    );
}