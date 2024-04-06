import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

export const AddToList: React.FC<IProps> = ({ setPeople, people }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    url: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      url: "",
      note: "",
    });
  };
  return (
    <div className="AddToList">
      <input
        className="AddToList-input"
        type="text"
        placeholder="Name"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        className="AddToList-input"
        type="text"
        placeholder="Age"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        className="AddToList-input"
        type="text"
        placeholder="Image url"
        value={input.url}
        onChange={handleChange}
        name="url"
      />
      <textarea
        className="AddToList-input"
        placeholder="Note"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button onClick={handleClick} className="AddToList-btn">
        Add to list
      </button>
    </div>
  );
};
