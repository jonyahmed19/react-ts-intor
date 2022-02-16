import React from "react";
import { JState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {
  return (
    <ul>
      {people.map((person) => {
        return (
          <li key={person.name} className="List">
            <div className="List-header">
              <img src={person.url} alt={person.name} className="List-img" />
              <h2>{person.name}</h2>
            </div>
            <p>{person.age} years old</p>
            <p className="List-name">{person.note}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
