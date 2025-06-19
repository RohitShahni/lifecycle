import React from "react";
import Subject from "./Subject";
import { createContext } from "react";


export const studentContext = createContext('studentData')

const Student = () => {
  return (
    <div style={{ backgroundColor: "green", padding: "20px" }}>
      Student Component
      <Subject />
    </div>
  );
};

export default Student;
