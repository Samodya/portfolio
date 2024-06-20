import { Link } from "react-router-dom";
import coverimg_img from "../Assets/coverImg_img.png";
import { ItemCard } from "../Components/iItemCards/itemcard";
import item_card_img_1 from "../Assets/download.gif";
import { useEffect, useState } from "react";
import { motion, AnimatePresence,spring } from "framer-motion";




export const Home = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const [currentSlide, setCurrentSlide] = useState(0);

 

  return (
    <div className="home">
      <div className="landing_banner">
        
      <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>
        <div className="motion_div">
       
        </div>
      </div>
      
    </div>
  );
};
