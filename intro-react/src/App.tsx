import Header from './components/Header'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import { ExperienceProps, ProjectProps } from './types/types'
import Projects from './components/Projects'


function App() {
  // Test data
  const student = 'Halgeir Geirson'
  const degree = 'Bachelor IT'
  const points = 180
  const email = 'student@hiof.no'

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
      description: "Signed an NDA. Can't say. Sorry. But its amazing, huge even.",
      repoLink: "http://www.duckduckgo.com",
    }
  ]

  return (
    <div>
      <Header student={student} degree={degree} points={points} />
      <Experiences listOfExperiences={listOfExperiences} />
      <Contact email={email} />
      <Projects listOfProjects={listOfProjects} />
    </div>
  )
}

export default App