import React from "react";

const projects = () => {
  const myProjects = [
    {
      name: "Parlay Telecom Application Server",
      Client: "Infravalley Corparation, Korea",
      Company: "Larsen & Tourbo Infotech Ltd.",
      MyRole: "Design and development of Messenger module",
      ProjectbDescription: `Parlay Telecom Application Server provides the execution environment for telecom components and services. 
        Provides the execution environment with various facilities and interfaces. `,
      started: "2005",
      ended: "2006",
    },
    {
      name: "CDMA Femto Base station",
      Client: "Airvana, USA",
      Company: "Larsen & Tourbo Infotech Ltd.",
      MyRole: "Services development at L3-layer",
      ProjectbDescription: `Femto base station is a CDMA base station for feto cell, as per the CDMA200 stack `,
      started: "2006",
      ended: "2008",
    },
  ];
  return (
    <div>
      <h2>Projects:</h2>
      {myProjects.map((eachProject, index) => {
        return (
          <div key={index}>
            <h3>{eachProject.name}</h3>
            <p>
              {eachProject.Client}, {eachProject.Company}
            </p>
            <h5>{eachProject.MyRole}</h5>
            <p> {eachProject.ProjectbDescription}</p>
            <p>
              {eachProject.started} - {eachProject.ended}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default projects;
