import React from "react";
import "../GroupList.css";

const GroupList = ({text, some}) => {
  const groups = [
    "Math Club",
    "Science Club",
    "Drama Club",
    "Coding Club",
    "Art Club",
  ];

  return (
    <div className="group-list-container">
      <h1 className="group-list-title">{text}</h1>
      <ul className="group-list">
        {groups.map((group, index) => (
          <li key={index} className="group-item">
            <img
              src={`https://via.placeholder.com/50?text=${group.charAt(0)}`}
              alt={`${group}`}
              className="group-icon"
            />
            {group}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
