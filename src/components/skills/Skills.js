import React, { useState, useEffect } from "react";
import "./Skills.styles.scss";
import Skill from "../skill/Skill";
import SectionTitle from "../section-title/SectionTitle";
import firestore from "../../firebase/firebase.utils";

export default function Skills() {
  const [data, setData] = useState([]);

  useEffect(() => {
    firestore
      .collection(`/cv-data/hHIgHPt5Ijb0QiMYFfeV/skills`)
      .orderBy("order", "asc")
      .get()
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(items);
      });
  }, []);

  return (
    <div className="skills">
      <SectionTitle letterNumber={2} title="Skills" />
      {data.map(({ id, ...otherSkillProps }) => (
        <Skill key={id} {...otherSkillProps} />
      ))}
    </div>
  );
}
