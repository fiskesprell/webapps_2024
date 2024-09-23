import Header from './components/Header'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import { ProjectProps } from './types/types'
import Projects from './components/Projects'

function App() {
  // Test data
  const student = 'Halgeir Geirson'
  const degree = 'Bachelor IT'
  const points = 180
  const experienceOne = 'Figma UI for customer X'
  const experienceTwo = 'Website for customer Y'
  const email = 'student@hiof.no'
  let demoProjectOne: ProjectProps
  demoProjectOne = {
    title: "Personal Website",
    description: "Personal website made for website week 2020",
    repoLink: "http://www.duckduckgo.com",
  }
  let demoProjectTwo: ProjectProps
  demoProjectTwo = {
    title: "SuperGame",
    description: "Game made for coolmathgames gamejam '24",
    repoLink: "http://www.duckduckgo.com",
  }


  return (
    <div>
      <Header student={student} degree={degree} points={points} />
      <Experiences experienceOne={experienceOne} experienceTwo={experienceTwo} />
      <Contact email={email} />
      <Projects projectOne={demoProjectOne} projectTwo={demoProjectTwo} />
    </div>
  )
}

export default App