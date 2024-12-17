import React from "react";
import { format } from "date-fns";

type Props = {
  project: ProjectType;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="rounded border p-4 shadow">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>
        Start Date:{" "}
        {format(new Date(project.startDate as string), "dd-MM-yyyy")}
      </p>
      <p>
        End Date: {format(new Date(project.endDate as string), "dd-MM-yyyy")}
      </p>
    </div>
  );
};

export default ProjectCard;
