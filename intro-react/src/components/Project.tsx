// Importer Style
// import './styles/grid.css';
import { ProjectProps } from '../types/types'
import type { PropsWithChildren } from "react";

export default function Student(props: Readonly<PropsWithChildren<ProjectProps>>) {
    const { children, title="title", description="description", repoLink="repoLink" } = props;

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
                    {children}
                </div>
            </div>
        </article>
    );
}