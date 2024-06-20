import { useEffect, useState } from "react";
import { NavItems } from "./nav_items";
import "./navigation.css";
import { Link } from "react-router-dom";

export const TopNavigation = () => {
  const [navitems, setNavitems] = useState([]);

  useEffect(() => {
    setNavitems(NavItems);
  }, []);

  return (
    <div className="top_nav">
      {navitems &&
        navitems.map((index) => (
          <div className="top_nav_item" key={index.id} >
            <Link to={index.link}>{index.item_text}</Link>
          </div>
        ))}
    </div>
  );
};
