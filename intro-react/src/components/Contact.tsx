// Importer Style
// import './styles/grid.css';

type ContactProps = {
    contactForm: () => JSX.Element,
};

export default function Student( {contactForm } : ContactProps ) {

    return(
        <section className="contactClass">
                {contactForm()}
        </section>
    );
}