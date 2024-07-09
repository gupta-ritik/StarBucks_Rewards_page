import React from "react";
import { Link } from "react-router-dom";

const MenuOptions = () => {
  return (
    <div className="shrink-0">
      <ul className="flex gap-x-[2.4rem] tracking-widest uppercase font-bold py-[4rem] text-sm">
        <li>
          <a href="/" className="hover:text-green">
            Menu
          </a>
        </li>
        <li>
          <a href="/" className="hover:text-green">
            Rewards
          </a>
        </li>
        <Link to="/gift">
          <li>
            <a href="/" className="hover:text-green translate-x-7">
              Gift Cards
            </a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MenuOptions;
