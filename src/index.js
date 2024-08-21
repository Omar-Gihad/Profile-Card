import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "HTML + CSS", level: "advanced", bgColor: "#2662EA" },
  { skill: "JavaScript", level: "advanced", bgColor: "#EFD81D" },
  { skill: "Web Design", level: "advanced", bgColor: "#C3DCAF" },
  { skill: "Git and GitHub", level: "intermediate", bgColor: "#E84F33" },
  { skill: "React", level: "Beginner", bgColor: "#60DAFB" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Avatar() {
  return <img className="avatar" src="./me.jpeg" alt="Omar Gihad"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Omar Gihad Ibrahim</h1>
      <p>
        Computer and Information Sciences graduate with a strong background in
        web development, specializing in React, Node.Js, and JavaScript.
        Currently interning as a React Developer at the Digital Egypt Pioneers
        Initiative (DEPI), with experience in creating dynamic web applications.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((element) => {
        return <Skill skillObj={element} />;
      })}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.bgColor }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "advanced" && "💪"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "Beginner" && "👶"}
      </span>
    </div>
  );
}
