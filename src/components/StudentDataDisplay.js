
import React, { useContext } from "react";
import { studentContext } from "./Student";

const StudentDataDisplay = () => {
  const student = useContext(studentContext);

  return <h2>Student Data: {student}</h2>;
};

export default StudentDataDisplay;
