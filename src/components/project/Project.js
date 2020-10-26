import React, { useEffect, useState } from "react";
import "./Project.styles.scss";
import Slider from "react-slick";
import SectionTitle from "../section-title/SectionTitle";
import ProjectCard from "../project-card/ProjectCard";
import firestore from "../../firebase/firebase.utils";

export default function Project() {
  const [data, setData] = useState([]);

  useEffect(() => {
    firestore
      .collection(`/cv-data/hHIgHPt5Ijb0QiMYFfeV/projects`)
      .get()
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(items);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  console.log(data);

  return (
    <div className="project">
      <SectionTitle title="Projects" />
      <div className="slider-wrap">
        <Slider {...settings}>
          {data.map(({ id, ...otherSkillProps }) => (
            <ProjectCard key={id} {...otherSkillProps} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
