import React, { useEffect, useState } from "react";
import "./ColoredCursor.scss";

export default function ColoredCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHover, setIsHover] = useState(false);
  let lastSpark = 0;
  const SPARK_INTERVAL = 40; // ms

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const now = Date.now();
      if (now - lastSpark > SPARK_INTERVAL) {
        lastSpark = now;
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
    };
  }, []);

  const style = { left: pos.x + "px", top: pos.y + "px" };

  function createSpark(x, y) {
    try {
      const spark = document.createElement("div");
      spark.className = "cursor-spark";
      // random offset direction and distance
      const dx = (Math.random() - 0.5) * 48; // -24..24
      const dy = (Math.random() - 0.5) * 48;
      spark.style.left = x + "px";
      spark.style.top = y + "px";
      spark.style.setProperty("--dx", dx + "px");
      spark.style.setProperty("--dy", dy + "px");
      // slight size variation
      const size = 4 + Math.floor(Math.random() * 6);
      spark.style.width = size + "px";
      spark.style.height = size + "px";
      document.body.appendChild(spark);
      spark.addEventListener("animationend", () => spark.remove());
    } catch (e) {
      // ignore DOM errors
    }
  }

  return <div className={`cursor ${isHover ? "hover" : ""}`} style={style} />;
}
