import React from "react";
import "./ProjectCard.styles.scss";

export default function ProjectCard({ title, img_url, git_url, web_url }) {
  return (
    <div className="project-card">
      <img src={require(`../../images/${img_url}`)} alt="icko" />
      <div className="card-title">{title}</div>
      <a
        className="visit"
        target={web_url === "" ? null : "_blank"}
        href={web_url}
        rel="noopener noreferrer"
        style={web_url === "" ? { color: "#ff7575", cursor: "default" } : null}
      >
        Webpage
      </a>
      <a
        className="visit"
        target="_blank"
        href={git_url}
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div>
  );
}
