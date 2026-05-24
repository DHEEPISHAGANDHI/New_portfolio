import React, { useEffect, useRef, useState } from "react";
import "./ColoredCursor.scss";

export default function ColoredCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHover, setIsHover] = useState(false);
  const lastSparkRef = useRef(0);
  const sparkContainerRef = useRef(null);

  useEffect(() => {
    const sparkContainer = document.createElement("div");
    sparkContainerRef.current = sparkContainer;
    sparkContainer.className = "cursor-spark-layer";
    document.body.appendChild(sparkContainer);

    const createSpark = (x, y) => {
      const spark = document.createElement("div");
      spark.className = "cursor-spark";
      const dx = (Math.random() - 0.5) * 48;
      const dy = (Math.random() - 0.5) * 48;
      spark.style.left = x + "px";
      spark.style.top = y + "px";
      spark.style.setProperty("--dx", dx + "px");
      spark.style.setProperty("--dy", dy + "px");
      const size = 4 + Math.floor(Math.random() * 6);
      spark.style.width = size + "px";
      spark.style.height = size + "px";
      sparkContainer.appendChild(spark);
      spark.addEventListener("animationend", () => spark.remove());
    };

    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const now = Date.now();
      if (now - lastSparkRef.current > 40) {
        lastSparkRef.current = now;
        createSpark(e.clientX, e.clientY);
      }
    };

    const enterHover = () => setIsHover(true);
    const leaveHover = () => setIsHover(false);

    window.addEventListener("mousemove", handleMove);

    // Attach hover listeners to interactive elements
    const elems = document.querySelectorAll("a, button, input, label, .clickable");
    elems.forEach((el) => {
      el.addEventListener("mouseenter", enterHover);
      el.addEventListener("mouseleave", leaveHover);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      elems.forEach((el) => {
        el.removeEventListener("mouseenter", enterHover);
        el.removeEventListener("mouseleave", leaveHover);
      });
      sparkContainer.remove();
    };
  }, []);

  const style = { left: pos.x + "px", top: pos.y + "px" };

  return <div className={`cursor ${isHover ? "hover" : ""}`} style={style} />;
}
