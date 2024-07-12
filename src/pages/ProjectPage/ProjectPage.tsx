import { useState } from "react";
import { useParams } from "react-router-dom";
import { Project, projects } from "../../data/data";
import { useEffect } from "react";

const ProjectPage = () => {
  const [project, setProject] = useState<Project | null>(null);
  const { projectIndex } = useParams();

  useEffect(() => {
    setProject(projects[parseInt(projectIndex!)]);
  }, [projectIndex]);

  return <div>project page: {project?.title}</div>;
};

export default ProjectPage;
