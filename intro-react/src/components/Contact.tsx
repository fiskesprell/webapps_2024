// Importer Style
// import './styles/grid.css';

type ContactProps = {
    email: string,
};

export default function Student(props: ContactProps) {
    const { email = "email" } = props;

    return(
        <div className="contactClass">
            <p>{email}</p>
        </div>
    );
}