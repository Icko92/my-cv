import React from "react";
import "./Skill.styles.scss";
import { useInView } from "react-intersection-observer";

export default function Skill({ name, value }) {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <div ref={ref} className={inView ? "skill active" : "skill"}>
      <div className="skill-name-wrap">
        <img src={require(`../../images/${name}.png`)} alt="img" />
        <div className="skill-name">{name}</div>
      </div>

      <div className="skill-value-wrap">
        <div
          className="skill-value"
          style={inView ? { width: `${value}%` } : null}
        ></div>
      </div>
    </div>
  );
}
