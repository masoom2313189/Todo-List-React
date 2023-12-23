import React from "react";

const ClearAll = ({ setTodos }) => {
  const handleClear = () => {
    setTodos([]);
  };
  return (
    <div>
      <button className="clear-all" onClick={() => handleClear()}>
        Clear All
      </button>
    </div>
  );
};

export default ClearAll;
