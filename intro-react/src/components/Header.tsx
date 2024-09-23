// Importer Style
// import './styles/grid.css';

type HeaderProps = {
    student: string,
    degree: string,
    points: number
};

export default function Student(props: AvatarProps) {
    const { student = "student", degree = "degree", points = "points" } = props;

    return(
        <div className="headerClass">
            <h1>{student}</h1>
            <p>{degree} {points} studiepoeng </p>
        </div>
    );
}