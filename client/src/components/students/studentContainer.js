import React, { useState } from "react";

function studentContainer() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John",
      email: "",
      phone: "",
      tier: 1,
    },
  ]);
}
