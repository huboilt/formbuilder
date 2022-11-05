import React from "react";

const LongAnswer = ({ item }) => {
  return (
    <div>
      <div className="item h-auto bg-gray-600 w-1/2 ml-48 p-4 mt-2">
        <textarea placeholder="type a long answer here"> </textarea>
      </div>
    </div>
  );
};

export default LongAnswer;
