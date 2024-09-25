import './styles/style.css'
import Header from './components/Header'
import Experiences from './components/Experiences'
import About from './components/About'
import Contact from './components/Contact'
import { ExperienceProps, PersonalInfo, ProjectProps } from './types/types'
import Projects from './components/Projects'
import Footer from './components/Footer'


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
      title: "Personal Website",
      description: "Personal website made for website week 2020",
      repoLink: "http://www.duckduckgo.com",
    },
    {
      title: "SuperGame",
      description: "Game made for coolmathgames gamejam '24",
      repoLink: "http://www.duckduckgo.com",
    },
    {
      title: "Secret Project",
      description: "Signed an NDA. Can't say. Sorry. But its amazing, huge even. YEAH I LOVE IT SO MUCH I HAVE TO WRITE EVEN MORE TEXT ABOUT IT TO SEE IT!! WOW!!! SO GOOD!!!!!",
      repoLink: "http://www.duckduckgo.com",
    },
    {
      title: "KDA Gragas",
      description: "Man I love KDA Gragas. Bomba! Bomba! Bomba! Bomba! Bomba! Bomba! Bomba! Bomba! Bomba! Bomba!",
      repoLink: "http://www.duckduckgo.com",
    }
  ]

  return (
    <>
      <Header name={personalInfo.name}/>
      <main>
        <About personalInfo={personalInfo} listOfExperiences={listOfExperiences}/>
        {/*<Contact email={personalInfo.contactEmail} /> */}
        <Projects listOfProjects={listOfProjects} />
      </main>
      <Footer contactEmail={personalInfo.contactEmail}/>
    </>
  )
}

export default App