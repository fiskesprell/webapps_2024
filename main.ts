import type { Project } from "./types";

const projectForm = document.getElementById("projectsForm") as HTMLFormElement;
const projectsDiv = document.getElementById("projectsDiv") as HTMLUListElement;
const projects: Project[] = [];

// # Oppgave 7

function updateProjectsDiv() {

  if (!projectsDiv) return;
  projectsDiv.innerHTML = "";

  // Dette ble fort veldig repetetivt å legge til,
  // derfor spurte jeg chatGPT om å fullføre det for meg.
  // https://chatgpt.com/share/02af7e4b-421a-41f2-a12f-6ee790147cc5

  for (const project of projects) {
    const newArticle = document.createElement("article");
    const articleDiv = document.createElement("div");
    articleDiv.setAttribute("class", "articleDiv");
    const articleImageDiv = document.createElement("article")
    articleImageDiv.setAttribute("class", "articleImage");
    const articleImage = document.createElement("img")
    articleImage.setAttribute("src", "../images/placeholder.png")
    articleImage.setAttribute("alt", "White cross with the text Placeholder above it.")
    articleImageDiv.appendChild(articleImage);
    const articleDataDiv = document.createElement("div");
    articleDataDiv.setAttribute("class", "articleData");
    const articleTitle = document.createElement("h2");
    articleTitle.textContent = project.title;
    const articleDescription = document.createElement("p");
    articleDescription.textContent = project.description;
    const articleLink = document.createElement("a");
    articleLink.setAttribute("href", project.repositoryLink);
    articleLink.textContent = "Link to repository";
    articleDataDiv.appendChild(articleTitle);
    articleDataDiv.appendChild(articleDescription);
    articleDataDiv.appendChild(articleLink);
    articleDiv.appendChild(articleImageDiv);
    articleDiv.appendChild(articleDataDiv);
    newArticle.appendChild(articleDiv);
    projectsDiv.appendChild(newArticle);
  }
}

function loadFromApi() {
  fetch("http://localhost:5173/json/oppgave_3.json")
    .then((response) => response.json())
    .then((data: Project[]) => {
      projects.push(...data);
      updateProjectsDiv();
    })
    .catch((error) => {
      console.error("Feil ved henting av data fra serveren:", error);
    });
}

// # Oppgave 8
projectForm.addEventListener("submit", async (event: SubmitEvent) => {
  event.preventDefault();

  const newProject = {
    title: (
      (event.target as HTMLFormElement).elements.namedItem(
        "projectTitle"
      ) as HTMLInputElement
    )?.value,
    description: (
      (event.target as HTMLFormElement).elements.namedItem(
        "projectDescription"
      ) as HTMLInputElement
    )?.value,
    repositoryLink: (
      (event.target as HTMLFormElement).elements.namedItem(
        "projectRepoLink"
      ) as HTMLInputElement
    )?.value,
    imageLink: (
      (event.target as HTMLFormElement).elements.namedItem(
        "projectImageLink"
      ) as HTMLInputElement
    )?.value,
    
  };

  // Oppgave 10
  projects.push(newProject);
  updateProjectsDiv();

  try {
    const response = await fetch("http://localhost:3999/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    });

    if (response.status === 201) {
      console.log("Vane lagret på serveren");
    } else {
      console.error("Feil ved lagring av vane på serveren");
    }
  } catch (error) {
    console.error("Feil ved sending av data til serveren:", error);
  }
});





loadFromApi();