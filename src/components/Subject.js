import React, { useContext } from "react";
import { subjectContext } from "./ContexData";

const Subject = () => {
   const subject= useContext(subjectContext);
  return <div style={{ backgroundColor: "red", padding: "20px" }}>Subject: {subject}</div>;
};

export default Subject;
