// Importer Style
// import './styles/grid.css';

type FooterProps = {
    contactEmail: string
}

export default function Footer(props: FooterProps) {
    const { contactEmail = "contactEmail" } = props;
    return(
        <footer>
            <ul>
                <li><p>Copyright: Jørgen Hovet 2024-2024</p></li>
                <li><p>Contact: {contactEmail}</p></li>
            </ul>
        </footer>
    );
}