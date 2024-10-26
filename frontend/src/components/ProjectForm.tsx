import { useState } from "react";
import { ProjectProps, ProjectFormProps } from "../types/types";

export default function ProjectForm({ projectsList, setProjectsList }: ProjectFormProps){
    const [formError, setFormError] = useState(false);
    const [projectTitle, setProjectTitle] = useState<string>('');
    const [projectDescription, setProjectDescription] = useState<string>('');
    const [projectRepoLink, setProjectRepoLink] = useState<string>('');
    // const [projectImageLink, setProjectImageLink] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();

      if (projectTitle.length > 3 && projectTitle.length > 3 && projectTitle.length > 3 && projectTitle.length > 3) {
        // Create and add object to list
        let projectToAddToList: ProjectProps = {
          id: crypto.randomUUID(),
          title: projectTitle,
          description: projectDescription,
          repoLink: projectRepoLink,
        }

        setProjectsList([...projectsList, projectToAddToList]);

        {/* Then reset fields */}
        setProjectTitle('');
        setProjectDescription('');
        setProjectRepoLink('')
        // setProjectImageLink('')
        setFormError(false);
      } else {
        setFormError(true);
      }
    };

    const updateProjectTitle = (e: React.ChangeEvent<HTMLInputElement>) => setProjectTitle(e.target.value);
    const updateProjectDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => setProjectDescription(e.target.value);
    const updateProjectRepoLink = (e: React.ChangeEvent<HTMLInputElement>) => setProjectRepoLink(e.target.value);
    // const updateProjectImageLink = (e: React.ChangeEvent<HTMLInputElement>) => setProjectImageLink(e.target.value);


    return(
        <section className="createProjectSection">
            <h2>Legg til prosjekt</h2>
            <div id="projectsFormDiv">
            <form id="projectsForm" onSubmit={handleSubmit}>
                {/* Error om felt ikke er fyllt inn */}
                {formError && <p style={{ color: 'yellow' }}>*Alle felt må være fyllt med mer enn 3 tegn.</p>}
                {/* Form starter her */}
                <label htmlFor="projectTitle">Tittel på prosjekt:
                <input id="projectTitle" name="projectTitle" type="text" value={projectTitle} onChange={updateProjectTitle}/>
                </label>

                <label htmlFor="projectDescription">Projektbeskrivelse:
                <textarea id="projectDescription" name="projectDescription" value={projectDescription} onChange={updateProjectDescription}/>
                </label>

                <label htmlFor="projectRepoLink">Repository Lenke:
                <input id="projectRepoLink" name="projectRepoLink" type="text" value={projectRepoLink} onChange={updateProjectRepoLink}/>
                </label>
                <button type="submit">Send melding</button>
            </form>
            <h2>Antall prosjekter: {projectsList.length}</h2>
            </div>
        </section>
    )
}