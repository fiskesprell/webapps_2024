// Importer Style
// import './styles/grid.css';

import type { PropsWithChildren } from "react";
import type { ExperienceProps } from "../types/types";

export default function Experience(props: Readonly<PropsWithChildren<ExperienceProps>[]>) {
    const { children, description = "description", id="id" } = props;

    return(
        <>
            <p>{description}</p>
            {children}
        </>
    );
}