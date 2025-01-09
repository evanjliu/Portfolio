import React from 'react';
// Import any react icons using the following format:
import { HiAcademicCap } from "react-icons/hi";

function Project({ title, description, icon }) {
    return (
        <div className="project-card">
            {icon && <div className="project-icon">{icon}</div>}
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Project;