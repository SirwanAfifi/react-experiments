import React from "react";
import Card from "./Card";

export default ({ characters }) => {
  return (
    <div className="mt-8 mb-8 flex flex-row flex-wrap">
      {characters.map(character => (
        <Card character={character} key={character.id} />
      ))}
    </div>
  );
};
