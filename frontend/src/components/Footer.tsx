// Importer Style
// import './styles/grid.css';

type FooterProps = {
    contactEmail: string
}



export default function Footer({showEmailButton}) {

    return(
        <footer>
            <ul>
                <li><p>Copyright: Jørgen Hovet 2024-2024</p></li>
                <li>{showEmailButton()}</li>
            </ul>
        </footer>
    );
}