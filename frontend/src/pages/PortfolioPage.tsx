import type { PropsWithChildren } from "react";
import Layout from "../components/Layout";
import { personalInfo, listOfExperiences } from "../config/testData";
import useProjects from "../hooks/useProjects";
import About from "../components/About";
import Projects from "../components/Projects";
import Contactform from "../components/ContactForm";
import ProjectForm from "../components/ProjectForm";
import { createProject } from "../services/projectsApi";
import { deleteProject } from "../services/projectsApi";

type LayoutProps = PropsWithChildren;


export default function PortfolioPage(props: LayoutProps) {
  // Henter ut data ved hjelp av custom hook
  const { projectsList, setProjectsList, loading, error } = useProjects();
  const { children } = props; // Unused

  return (
    <Layout>
        {/*Left Aside*/}
        <About personalInfo={personalInfo} listOfExperiences={listOfExperiences}/>

        {/*Main content*/}
        <Projects listOfProjects={projectsList} setProjectsList={setProjectsList} deleteProject={deleteProject}/>
        
        {/*Right Aside*/}
        {/*Could be its own component?*/}
        <section>
          <Contactform />
          <ProjectForm projectsList={projectsList} setProjectsList={setProjectsList} addProject={createProject}/>
        </section>
    </Layout>
  );
}