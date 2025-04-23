import React from "react";
import { NavLink } from "react-router-dom";

interface Section {
  name: string;
  path: string;
}

interface SectionsBarProps {
  sections: Section[];
}

const SectionsBar: React.FC<SectionsBarProps> = ({ sections }) => {
  return (
    <header className="bg-white text-black w-1/3 mx-auto rounded-3xl font-inter font-light">
      <div className="px-10">
        <nav className="py-3 flex justify-center items-center">
          <ul className="list-none flex flex-row items-center gap-10">
            {sections.map((section) => (
              <li key={section.path}>
                <NavLink to={section.path}>{section.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-center pb-3">All clothes are Unisex</p>
      </div>
    </header>
  );
};

export default SectionsBar;
