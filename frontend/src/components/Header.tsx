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
                    <li><h1>{name}'s Portfolio</h1></li>
                </ul>
            </nav>
        </header>
    );
}