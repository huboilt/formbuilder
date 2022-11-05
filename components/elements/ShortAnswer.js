import React from "react";

const ShortAnswer = ({ item }) => {
  return (
    <div>
      <div className="item h-auto bg-gray-600 w-1/2 ml-48 p-4 mt-2">
        <input type="text" placeholder="Short answers  go here" />
      </div>
    </div>
  );
};

export default ShortAnswer;
