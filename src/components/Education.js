import React from "react";

const education = () => {
  const myEducation = [
    {
      schoolName: "Ironhack",
      city: "Remote",
      country: "NEtherlands",
      degree: "Full-Stack Web Developer",
      schoolStarted: "2020",
      schoolEnded: "2020",
    },
    {
      schoolName: "JNTU University",
      city: "Hyderabad",
      country: "India",
      degree: "Btech. Computer Science",
      schoolStarted: "2001",
      schoolEnded: "2004",
    },
    {
      schoolName: "GPTW",
      city: "Bheemili",
      country: "India",
      degree: "Diploma in computer science",
      schoolStarted: "2000",
      schoolEnded: "1997",
    },
  ];

  return (
    <div>
      <h2>Education:</h2>
      {myEducation.map((eachSchool, index) => {
        return (
          <div key={index}>
            <h3>{eachSchool.schoolName}</h3>
            <p>
              {eachSchool.city}, {eachSchool.country}
            </p>
            <h4>{eachSchool.degree}</h4>
            <p>
              {eachSchool.schoolStarted} - {eachSchool.schoolEnded}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default education;
