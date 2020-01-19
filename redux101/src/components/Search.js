import React from "react";
import SearchField from "./SearchField";

export default () => {
  return (
    <>
      <div className="flex flex-col content-center">
        <div className="mt-16">
          <h1 className="text-primary-100 leading-none font-bold text-2xl uppercase xs:text-2x1 md:text-5xl lg:6x1 text-center mb-5">
            Search <span className="text-primary-200">Character</span>
          </h1>
          <div className="w-full ">
            <SearchField />
          </div>
        </div>
      </div>
    </>
  );
};
