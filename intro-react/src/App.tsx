import './styles/style.css'
import Header from './components/Header'
import Experiences from './components/Experiences'
import About from './components/About'
import Contact from './components/Contact'
import { ExperienceProps, PersonalInfo, ProjectProps } from './types/types'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useState } from 'react'


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
      id: "project_1",
      title: "Personal Website",
      description: "Personal website made for website week 2020",
      repoLink: "http://www.duckduckgo.com",
    },
    {
      id: "project_2",
      title: "SuperGame",
      description: "Game made for coolmathgames gamejam '24",
      repoLink: "http://www.duckduckgo.com",
    },
    {
      id: "project_3",
      title: "Secret Project",
      description: "Signed an NDA. Can't say. Sorry. But its amazing, huge even. YEAH I LOVE IT SO MUCH I HAVE TO WRITE EVEN MORE TEXT ABOUT IT TO SEE IT!! WOW!!! SO GOOD!!!!!",
      repoLink: "http://www.duckduckgo.com",
    },
    {
      id: "project_4",
      title: "KDA Gragas",
      description: "Man I love KDA Gragas. Bomba! Bomba! Bomba! Bomba! Bomba! Bomba! Bomba! Bomba! Bomba! Bomba!",
      repoLink: "http://www.duckduckgo.com",
    }
  ]

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
    const [nameValid, setNameValid] = useState(false);
    const [nameIsDirty, setNameIsDirty] = useState(false);
    const [nameIsTouched, setNameIsTouched] = useState(false);
    const [textareaValid, setTextareaValid] = useState(false);
    const [textareaIsDirty, setTextareaIsDirty] = useState(false);
    const [textareaIsTouched, setTextareaIsTouched] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      setName('');
      setTextarea('');
    }

    const updateName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const updateTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTextarea(e.target.value);
    
    return (
      <>
        <h2>Send meg melding</h2>
        <form onSubmit={handleSubmit}>

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


  return (
    <>
      <Header name={personalInfo.name}/>
      <main>
        <About personalInfo={personalInfo} listOfExperiences={listOfExperiences} showEmailButton={showEmailButton}/>
        <Projects listOfProjects={listOfProjects} />
        <Contact contactForm={contactForm} />
      </main>
      <Footer showEmailButton={showEmailButton}/>
    </>
  )
}

export default App