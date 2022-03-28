import React from "react";
import user from "../data/user";
import {v4 as uuid} from "uuid"

function ProjectItem({ name, about, technologies}) {

const spanTech = technologies.map((technology) =>{
  return <span key={uuid()}>{technology}</span>
})
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {spanTech}
      </div>
    </div>
  );
}

export default ProjectItem;
