import React from "react";
import "bulma/css/bulma.min.css";
import Student from "./student";
import { getStudents } from "../../actions/actions";

export default function Student(props) {
  // show students as a pool of moving cards

  // to do map all students to a student card

  const strategies = [
    {
      id: 1,
      name: "student 1",
      description: "Description 1",
      reference: "Reference 1",
      status: "Not Reviewed",
      tier: "1",
      category: "Category 1",
    },
    {
      id: 2,
      name: "student 2",
      description: "Description 2",
      reference: "Reference 2",
      status: "Not Reviewed",
      tier: "2",
      category: "Category 2",
    },

    {
      id: 3,
      name: "student 3",
      description: "Description 3",
      status: "Not Reviewed",
      tier: "3",
      category: "Category 3",
    },
  ];
  return (
    <section>
      {strategies.map((student) => (
        <Student
          name={student.name}
          description={student.description}
          tier={student.tier}
          category={student.category}
          reference={student.reference}
          createdAt={student.createdAt}
          status={student.status}
          id={student.id}
        />
      ))}
    </section>
  );
}
