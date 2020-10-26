import React, { useEffect, useState } from "react";
import "./Qualification.styles.scss";
import QualificationSegment from "../qualification-segment/QualificationSegment";
import SectionTitle from "../section-title/SectionTitle";
import firestore from "../../firebase/firebase.utils";

export default function Qualification({ title }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    firestore
      .collection(`/cv-data/hHIgHPt5Ijb0QiMYFfeV/${title}`)
      .orderBy("year_to", "desc")
      .get()
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(items);
      });
  }, [title]);

  return (
    <div
      className="qualification"
      id={title}
      style={title === "education" ? { flexDirection: "row" } : null}
    >
      <SectionTitle title={title.charAt(0).toUpperCase() + title.slice(1)} />
      {data.map(({ id, ...otherSkillProps }) => (
        <QualificationSegment key={id} {...otherSkillProps} />
      ))}
    </div>
  );
}
