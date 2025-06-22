import React, { useRef } from "react";

const Count = () => {
  const renderCount = useRef(0);
  console.log("renderCount====", renderCount);

  return (
    <div>
      {renderCount.current++} renderCount: {renderCount.current}
    </div>
  );
};

export default React.memo(Count);
