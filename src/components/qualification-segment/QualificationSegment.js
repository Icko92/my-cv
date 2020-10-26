import React from "react";
import "./QualificationSegment.styles.scss";
import { useInView } from "react-intersection-observer";

export default function QualificationSegment({
  name,
  year_from,
  year_to,
  title,
  description,
}) {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  return (
    <div ref={ref} className="qualification-segment">
      <div
        className="qualification-name-year"
        style={inView ? { opacity: "1", padding: "20px 0px" } : null}
      >
        <div className="name">{name}</div>
        <div className="year">{`${year_from} - ${year_to}`}</div>
      </div>
      <div className="qualification-divider">
        <div className="top" style={inView ? { height: "0%" } : null}></div>
        <div
          className="circle"
          style={inView ? { height: "7px", width: "7px", opacity: 1 } : null}
        ></div>
        <div
          className="bottom"
          style={inView ? { height: "100%", opacity: "1" } : null}
        ></div>
      </div>
      <div
        className="qualification-title-description"
        style={inView ? { opacity: "1", padding: "20px 0px" } : null}
      >
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}
