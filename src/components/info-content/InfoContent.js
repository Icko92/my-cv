import React, { useEffect, useState } from "react";
import "./InfoContent.styles.scss";
import { useSpring, animated } from "react-spring";
import firestore from "../../firebase/firebase.utils";

export default function InfoContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    firestore
      .collection("/cv-data/hHIgHPt5Ijb0QiMYFfeV/info")
      .get()
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        setData(items[0]);
      });
  }, []);

  const props = useSpring({
    from: { opacity: "0", right: "120px" },
    to: { opacity: "1", right: "100px" },
    config: { duration: 500 },
    delay: 1000,
  });
  return (
    <animated.div style={props} className="info-content">
      <h1>{data.name}</h1>
      <h2>{data.title}</h2>
      <h3>Phone:</h3>
      <p>{data.phone}</p>
      <h3>Email:</h3>
      <p>{data.email}</p>
      <h3>Location:</h3>
      <p>{`${data.city}, ${data.state}`}</p>
    </animated.div>
  );
}
