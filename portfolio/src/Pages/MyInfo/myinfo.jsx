import "./myinfo.css";
import ProfImg from "../../Assets/profile.png";
import { useState } from "react";
import { ProfInfo } from "./profInfo";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { social_icons } from "react-social-icons";

export const MyInfo = () => {
  const [active, setActive] = useState("experience");
  const [sociatText, setSocialText] = useState("");

  const handleClick = (data) => {
    data.preventDefault;
    setActive(data);
  };

  const socialIconVariant = {
    hoverBack: {
      scale: 0.8,
    },
  };

  return (
    <div className="personal_details">
      <div className="my_info">
        <div className="personal_info">
          <div className="prof_img">
            <img src={ProfImg} />
          </div>
          <div className="user_info">
            <div className="user_name"> Samodya Nissanka</div>
            <div className="occupation">
              Assosiate Software Engineer at Ewis Career Training Center Kandy
            </div>
            <div className="social_media_icons">
              <motion.a
                href="https://github.com/Samodya"
                variants={socialIconVariant}
                whileHover={{
                  scale:0.8
                }}
                onHoverStart={() => setSocialText("GitHub")}
                onHoverEnd={() => setSocialText("")}
              >
                <GitHubIcon style={{ fontSize: 35, color: "black" }} />
                {sociatText == "GitHub" && sociatText}
              </motion.a>
              <motion.a
                href={"http://www.linkedin.com/in/samodya-nissanka-01b5aa21b"}
                variants={socialIconVariant}
                whileHover={{
                  scale:0.8
                }}
                onHoverStart={() => setSocialText("LinkedIn")}
                onHoverEnd={() => setSocialText("")}
              >
                <LinkedInIcon style={{ fontSize: 40, color: "#1e3261" }} />
                {sociatText=='LinkedIn' && sociatText}
              </motion.a>
            </div>
            <div></div>
            {/* <div className="occupation">Undergraduate -Software Engineerat CardifMetropolitan University (BSc.hons)</div> */}
          </div>
        </div>
        <div className="prof_info">
          <div>
            <div className="tab_section">
              <div
                className={
                  active == "experience" ? "tab_item_active" : "tab_item"
                }
                onClick={() => handleClick("experience")}
              >
                Experience
              </div>
              <div
                className={active == "skill" ? "tab_item_active" : "tab_item"}
                onClick={() => handleClick("skill")}
              >
                Skills
              </div>
              <div
                className={active == "quali" ? "tab_item_active" : "tab_item"}
                onClick={() => handleClick("quali")}
              >
                Qualifications
              </div>
              <div
                className={active == "tools" ? "tab_item_active" : "tab_item"}
                onClick={() => handleClick("tools")}
              >
                Tools
              </div>
            </div>
          </div>
          <ProfInfo active={active} />
        </div>
      </div>
    </div>
  );
};
