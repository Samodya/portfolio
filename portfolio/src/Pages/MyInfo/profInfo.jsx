import {  useState } from "react";

export const ProfInfo = ({ active }) => {
  const [activeSkill, setActiveSkill] = useState("");

function handleExpChange(data) {
    setActiveSkill(data)
}


  return (
    <div className="prof_info_content">
      {active == "experience" && (
        <div className="prof_exp_section">
          <div className="exp_top_section">
            <div
              className="exp_Title"
              onClick={()=> {handleExpChange('ase')}}
            >
              Assosiate Software Engineer at Ewis Carrer Taining Center
            </div>
            <div className="exp_duration">2023/12 - Current</div>
          </div>
         
            <div className="exp_infor">
              <ul>
                <li>
                  1 year experience in developing Admin dashboards with MERN
                  stack{" "}
                </li>
                <li>
                  1 year experience in building Admin dashboards with PHP and
                  html
                </li>
                <li>
                  1 year experience in backend development with ExpressJS and
                  NodeJS
                </li>
              </ul>
            </div>
          
          <div className="exp_top_section">
            <div
              className="exp_Title"
              
            >
              Intern Software Engineer at Ewis Carrer Taining Center
            </div>
            <div className="exp_duration">2023/02 - 2023/12</div>
          </div>
         
            <div className="exp_infor">
              <ul>
                <li>
                  1 year experience in developing Admin dashboards with MERN
                  stack{" "}
                </li>
                <li>
                  1 year experience in building Admin dashboards with PHP and
                  html
                </li>
                <li>
                  1 year experience in backend development with ExpressJS and
                  NodeJS
                </li>
              </ul>
            </div>
          
        </div>
      )}
      {active == "skill" && (
        <div className="skill_section">
          <div className="skill_top_section">Web Application Design</div>
        </div>
      )}
    </div>
  );
};
