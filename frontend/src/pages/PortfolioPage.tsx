import type { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Layout from "./Layout";
import { personalInfo } from "../config/testData";

type LayoutProps = PropsWithChildren;

export default function PortfolioPage(props: LayoutProps) {
  const { children } = props;

  return (
    <Layout>
        <About personalInfo={personalInfo} listOfExperiences={listOfExperiences}/>
        <Projects listOfProjects={projectsList} setProjectsList={setProjectsList} />
        <div>
          <Contactform />
          <ProjectForm projectsList={projectsList} setProjectsList={setProjectsList}/>
        </div>
    </Layout>
  );
}