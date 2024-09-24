// Importer Style
// import './styles/grid.css';

import { PersonalInfo } from "../types/types";

interface HeaderProps {
    name: string,
  }

export default function Student(props: HeaderProps) {
    const { name = "name" } = props;
    return(
        <header>
            <nav>
                <ul>
                    <li><a href="#">Add Project</a></li>
                    <li><h1>{name}'s Portfolio</h1></li>
                    <li><a href="#">My Projects</a></li>
                </ul>
            </nav>
        </header>
    );
}