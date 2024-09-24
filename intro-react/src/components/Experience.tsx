// Importer Style
// import './styles/grid.css';

import type { PropsWithChildren } from "react";

type ExperienceProps = {
    description : string,
};

export default function Student(props: Readonly<PropsWithChildren<ExperienceProps>>) {
    const { children, description = "description" } = props;

    return(
        <div className="singleExperience">
            <p>{description}</p>
            {children}
        </div>
    );
}