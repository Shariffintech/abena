import React from "react";

export default function Blog() {
  const blogposts = [
    {
      tite: "data collection is assisting educators in making educated decisions",
      description:
        "Would you like to know how important data collection is assisting educators in making educated decisions, engaging families, developing strategies, boost teaming and collaboration in the classroom?",
    },
    {
      title: "Professional Development in the classroom for teachers",
      description: "no description yet",
    },
    {
      title: "Is EdTech still the key to success in early childhood education?",
      description: "no description yet",
    },
  ];
  return (
    <div className="Blog">
      {blogposts.map((post, index) => (
        <div>
          {blogposts.title}
          {blogposts.description}
        </div>
      ))}
    </div>
  );
}
