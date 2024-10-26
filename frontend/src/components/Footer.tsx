// Importer Style
// import './styles/grid.css';

import { personalInfo } from "../config/testData";
import { showEmailAlert } from "../helpers/alerts";

export default function Footer() {

    return(
        <footer>
            <ul>
                <li><p>Copyright: Jørgen Hovet 2024-2024</p></li>
                <li><button className="showEmailButton" onClick={() => {showEmailAlert(personalInfo.contactEmail)}}>Vis e-post?</button></li>
            </ul>
        </footer>
    );
}