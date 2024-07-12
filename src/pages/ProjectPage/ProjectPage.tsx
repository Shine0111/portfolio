import { useState } from "react";
import { useParams } from "react-router-dom";
import { Project, projects } from "../../data/data";
import { useEffect } from "react";
import ProjectOverview from "../../components/ProjectOverview/ProjectOverview";
import NavBar from "../../components/NavBar/NavBar";

const ProjectPage = () => {
  const [project, setProject] = useState<Project | null>(null);
  const { projectIndex } = useParams();

  useEffect(() => {
    setProject(projects[parseInt(projectIndex!)]);
  }, [projectIndex]);

  return (
    <div>
      <NavBar />
      <ProjectOverview project={project!} />
    </div>
  );
};

export default ProjectPage;
