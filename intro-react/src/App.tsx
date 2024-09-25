import './styles/style.css'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import { ExperienceProps, PersonalInfo, ProjectProps } from './types/types'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useState } from 'react'
import CreateProject from './components/CreateProject'


function App() {
  // Test data

  let personalInfo: PersonalInfo = {
      name: 'Jørgen Hovet',
      contactEmail: 'jorgeho@hiof.no',
      degree: 'Bachelor Informatikk',
      points: '120',
      personalImageLink: 'src/images/profilePicture.png'
  }

  let listOfExperiences: ExperienceProps[] = [
    {
      id: "experience_1",
      description: 'Figma UI for customer X'
    },
    {
      id: "experience_2",
      description: 'Website for customer Y'
    }
  ]
  
  let listOfProjects: ProjectProps[] = [
    {
      id: crypto.randomUUID(),
      title: "Personal Website",
      description: "Personal website made for website week 2020",
      repoLink: "http://www.duckduckgo.com",
    },
    {
      id: crypto.randomUUID(),
      title: "SuperGame",
      description: "Game made for coolmathgames gamejam '24",
      repoLink: "http://www.duckduckgo.com",
    },
    {
      id: crypto.randomUUID(),
      title: "Secret Project",
      description: "Signed an NDA. Can't say. Sorry. But its amazing, huge even. YEAH I LOVE IT SO MUCH I HAVE TO WRITE EVEN MORE TEXT ABOUT IT TO SEE IT!! WOW!!! SO GOOD!!!!!",
      repoLink: "http://www.duckduckgo.com",
    },
  ]

  const [projectsList, setProjectsList] = useState<ProjectProps[]>(listOfProjects);

  // Functions
  function showEmailButton(){
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
      alert("Kontakt meg på: " + personalInfo.contactEmail);
    }
    return <button className="showEmailButton" onClick={handleClick}>Vis e-post?</button>
  }

  function contactForm(){
    const [name, setName] = useState<string>('');
    const [textarea, setTextarea] = useState<string>('');
    const [formError, setFormError] = useState(false); 

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (name.length > 2 && textarea.length > 2) {
      setName('');
      setTextarea('');
      setFormError(false);
    } else {
      setFormError(true);
    }
  };

    const updateName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const updateTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTextarea(e.target.value);
    
    return (
      <>
        <h2>Send meg melding</h2>
        <form onSubmit={handleSubmit}>
          {formError && <p style={{ color: 'yellow' }}>*Både navn og text må være mer enn 2 tegn langt.</p>}
            <label htmlFor="name"> Ditt Navn:
            <input id="name" name="name" type="text" value={name} onChange={updateName}/>
          </label>
          <label htmlFor="textarea"> Din melding:
            <textarea id="textarea" name="textarea" value={textarea} onChange={updateTextarea}/>
          </label>
          <button type="submit">Send melding</button>
        </form>
        <h2>Forhåndsvis din melding</h2>
        <pre>
          {JSON.stringify({ name })}
        </pre>
        <pre>
          {JSON.stringify({ textarea })}
        </pre>
      </>
    );
  };

  function projectForm(){
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
      <>
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
        </div>
      </>
    )
  }

  return (
    <>
      <Header name={personalInfo.name}/>
      <main>
        <About personalInfo={personalInfo} listOfExperiences={listOfExperiences} showEmailButton={showEmailButton}/>
        <Projects listOfProjects={projectsList} setProjectsList={setProjectsList} />
        <div>
          <Contact contactForm={contactForm} />
          <CreateProject projectForm={projectForm} />
        </div>
      </main>
      <Footer showEmailButton={showEmailButton}/>
    </>
  )
}

export default App