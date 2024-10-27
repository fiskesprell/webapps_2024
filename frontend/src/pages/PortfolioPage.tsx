import type { PropsWithChildren } from "react";
import Layout from "../components/Layout";
import { personalInfo, listOfExperiences } from "../config/testData";
import useProjects from "../hooks/useProjects";
import About from "../components/About";
import Projects from "../components/Projects";
import Contactform from "../components/ContactForm";
import ProjectForm from "../components/ProjectForm";

type LayoutProps = PropsWithChildren;


export default function PortfolioPage(props: LayoutProps) {
  // Henter ut data ved hjelp av custom hook
  const { projectsList, setProjectsList, loading, error } = useProjects();
  const { children } = props; // Unused

  return (
    <Layout>
        {/*Left Aside*/}
        <About personalInfo={personalInfo} listOfExperiences={listOfExperiences}/>

        <Projects listOfProjects={projectsList} setProjectsList={setProjectsList} />
        
        {/*Right Aside*/}
        <section>
          <Contactform />
          <ProjectForm projectsList={projectsList} setProjectsList={setProjectsList}/>
        </section>
    </Layout>
  );
}