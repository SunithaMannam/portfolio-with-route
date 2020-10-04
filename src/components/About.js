import React from "react";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";

const about = () => {
  return (
    <div>
      <div>
        <div style={{ width: "40%", float: "left" }}>
          <Education />
        </div>
        <div style={{ width: "60%", float: "right" }}>
          <Experience />
        </div>
        <div style={{ width: "60%", float: "right" }}>
          <Projects />
        </div>
      </div>
    </div>
  );
};
export default about;
