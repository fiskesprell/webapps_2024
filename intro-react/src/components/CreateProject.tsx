type ProjectFormProps = {
    projectForm: () => JSX.Element,
};

export default function CreateProject( { projectForm } : ProjectFormProps ) {
    
    return (
        <section className="createProjectSection">
                {projectForm()}
        </section>
    )
}