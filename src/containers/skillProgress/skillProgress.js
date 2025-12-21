import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            <div className="skills-grid">
              {techStack.experience.map((exp, i) => {
                const percentage = parseInt(exp.progressPercentage);
                
                return (
                  <div key={i} className="skill-card">
                    <p className="skill-name">{exp.Stack}</p>
                    <div className="skill-graph">
                      <div className="graph-bar-container">
                        <div 
                          className="graph-bar-fill" 
                          style={{width: `${percentage}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
