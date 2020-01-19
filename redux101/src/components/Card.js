import React from "react";

export default ({ character }) => {
  return (
    <div className="sm:w-1/4 p-2 hover:shadow cursor-pointer card">
      <div className="card-wrapper bg-primary-200 px-6 py-8 rounded-lg shadow-lg text-center hover:bg-primary-100">
        <div className="mb-3">
          <img
            className="w-auto mx-auto rounded-full"
            src={character.image}
            alt=""
          />
        </div>
        <h2 className="text-xl font-medium text-primary-400">
          {character.name}
        </h2>
        <span className="text-primary-400 block mb-5">{character.status}</span>

        <button className="px-4 py-2 bg-primary-400 text-white rounded">
          Info
        </button>
      </div>
    </div>
  );
};
