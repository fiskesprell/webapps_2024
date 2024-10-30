const baseUrl = "http://localhost:3000";

const endpointsV1 = {
  projects: `${baseUrl}/projects`,
  experiences: `${baseUrl}/experiences`, // Not used yet, but I thought it would be nice to have
  projectsById: `${baseUrl}/projects/`
};

export { baseUrl, endpointsV1 as endpoints };