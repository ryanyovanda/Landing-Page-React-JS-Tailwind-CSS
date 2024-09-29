import {FC} from "react";
import './styles.css';
import {DUMMY_PROJECTS} from "../../constants/projectList.ts";
import Project from "./Project/project.tsx";

const About: FC = () => {
  return (
    <div className="portofolio">
      <div className="left">
        About
      </div>
      <div className="right">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>      
      </div>
    </div>
  );
}

export default About;