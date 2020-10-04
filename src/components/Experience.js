import React from "react";

const experience = () => {
  const placesWhereIWorked = [
    {
      name: "Juist Dit",
      city: "Tilburg",
      country: "Netherlands",
      jobTitle: "Wep developer",
      jobDescription:
        "Programming and maintenance of websites. Worked in HTML, CSS, JQuery, javascript, PHP",
      jobStarted: "2015",
      jobEnded: "2017",
    },
    {
      name: "Get-Responsive",
      city: "Amsterdam",
      country: "Netherlands",
      jobTitle: "WordPress Developer",
      jobDescription:
        "Supported startups by creating, managing and customising their websites in wordpress. Worked in HTML,CSS,Wordpress",
      jobStarted: "2015",
      jobEnded: "2016",
    },
    {
      name: "Larsen & Toubro Infotech Ltd.",
      city: "Chennai",
      country: "India",
      jobTitle: "Software engineer",
      jobDescription:
        "Developed apps in Javaswings,Java; Worked on the L3 protocol stack of CDMA",
      jobStarted: "2004",
      jobEnded: "2011",
    },
  ];

  const checkJobEnded = (end) => {
    let endYear;
    if (end === "") {
      endYear = "current";
    } else {
      endYear = end;
    }
    return endYear;
  };

  return (
    <div className="">
      <h2>Work Experience:</h2>
      {placesWhereIWorked.map((eachPlace, index) => {
        return (
          <div className="experience-content" key={index}>
            <h3>{eachPlace.name}</h3>
            <p>
              {eachPlace.city}, {eachPlace.country}
            </p>
            <h4>{eachPlace.jobTitle}</h4>
            <p>{eachPlace.jobDescription}</p>
            <p>
              {eachPlace.jobStarted} - {checkJobEnded(eachPlace.jobEnded)}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default experience;
