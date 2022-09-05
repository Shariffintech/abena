import React from "react";
import { Form, Button } from "react-bulma-components";

export default function Blog() {
  const blogposts = [
    {
      tite: "data collection assisting educators",
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
    <div className="backgroundImage">
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title> Abena DMS Blog</title>
        </Head>
      {blogposts.map((post) => (
        <div>
          {blogposts.title}
          {blogposts.description}
        </div>
      ))}
      </div>
    </div>
  );
}
