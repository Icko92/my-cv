import React from "react";
import "./Info.styles.scss";
import InfoPhoto from "../info-photo/InfoPhoto";
import InfoContent from "../info-content/InfoContent";
import { useSpring, animated } from "react-spring";
import { Parallax } from "react-parallax";

export default function Info() {
  const props = useSpring({
    from: { backgroundSize: "16px 0%, 0% 16px " },
    to: { backgroundSize: "16px 19%, 12% 16px " },
    config: { duration: 200 },
    delay: 1000,
  });
  return (
    <Parallax
      bgImage={require("../../images/background1.jpeg")}
      bgImageAlt="alt"
      strength={600}
      blur={{ min: 0, max: 10 }}
    >
      <div className="info">
        <animated.div style={props} className="info-wrap">
          <InfoPhoto />
          <InfoContent />
        </animated.div>
      </div>
    </Parallax>
  );
}
