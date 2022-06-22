import React, { useRef } from "react";
import { useEffect } from "react";
import "./animatedTitle.scss";
const AnimatedTitle = ({ titleText }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    animateTitle();
  }, []);

  function animateTitle() {
    const gsap = window.gsap;
    let k = 0;
    const ptags = containerRef.current.children;

    for (var i = 0; i < ptags.length; i++) {
      for (var j = 0; j < ptags[i].children.length; j++) {
        k++;
        gsap.to("#word" + String(i) + "letter" + String(j), {
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: window.innerWidth <= 725 ? 0.01 : 1,
            start: `${k * 15 + 50}px center`,
          },
          duration: 3,
          translateY: -700,
          delay: j,
          rotate: "90deg",
        });
      }
    }
  }
  return (
    <div className="animated-title-container" ref={containerRef}>
      {titleText.split(" ").map((word, i) => {
        return (
          <p>
            {word.split("").map((letter, j) => {
              let word_length =
                (window.innerWidth / 100) * 6.5 <= 3 * 16
                  ? 3 * 16
                  : (window.innerWidth / 100) * 6.5;
              word_length = word_length >= 8 * 16 ? 8 * 16 : word_length;
              word_length = window.innerWidth < 600 ? 2.3 * 16 : word_length;
              let l = word.split("").length;
              let left_spacing = (window.innerWidth - word_length * l) / 2;
              left_spacing += (j - 0.5) * word_length;

              return (
                <span
                  id={"word" + String(i) + "letter" + String(j)}
                  style={{ left: left_spacing }}
                >
                  {letter}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
};

export default AnimatedTitle;
