// Importer Style
// import './styles/grid.css';
import { ProjectProps } from '../types/types'

export default function Student(props: ProjectProps) {
    const { title="title", description="description", repoLink="repoLink" } = props;

    return(
        <article className="projectArticle">
            <div className="articleDiv">
                <div className="articleImageDiv">
                    <img src="src/images/placeholder.png" alt="Crossed out text that says the word placeholder."/>
                </div>
                <div className="articleDataDiv">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a href={repoLink}>Link to Repository</a>
                </div>
            </div>
        </article>
    );
}