import React from "react";

export interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

export const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header" style={{ display: "flex", gap: 20 }}>
            <img className="List-img" src={person.url} alt="" />
            <h2>{person.name}</h2>
            <p>{person.age} year old</p>
            <p className="List-note">{person.note}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <ul>
      Iam a list
      {renderList()}
    </ul>
  );
};
