// Importer Style
// import './styles/grid.css';

type ExperienceProps = {
    description : string,
};

export default function Student(props: ExperienceProps) {
    const { description = "description" } = props;

    return(
        <div className="singleExperience">
            <p>{description}</p>
        </div>
    );
}