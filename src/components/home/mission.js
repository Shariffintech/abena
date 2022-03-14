import React from "react";
import { Button, Card, Container, Form } from "react-bulma-components";

import "../../style.css";

function Mission() {
  // to do: add event listeners for scroll down to move lights with lighthouse


  const { Input, Field, Control, Label } = Form;

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const scrollHeight = e.target.scrollHeight;
    const clientHeight = e.target.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      console.log("scroll to bottom");
    }
  };

  return (
    // to do: sort out styling of text, add link to product hunt page for PH button
    // to do: add chat bubble next to student icons
    // to do: add email validation for users signing up for beta release

    <div className="mission-container">
      
      <div className="eclipse"/>
      <div className="mission-statement">
      <h1 className="mission-title">Mission</h1>
      <p className="paragraph-1">
        At Abena, our goal is to help our teachers be thoughtful and intentional
        as they support the <strong className="bold-blu">academic, social emotional, developmental and
        behavioral needs of children </strong> in their classroom. We have discovered an
        ideal way to build a product that resonates with this mission and have
        developed a roadmap to attend to the unique needs and interactions among
        children, teachers, parents and community-based partners.
      </p>

      <br />
      <p className="paragraph-2">
        Abena DMS is a clever tool used to boost data-driven decision making and
        demystifying complexities of using SEL, PBIS. RTI and MTSS in the
        classroom. This integrated approach for supporting children encourages
        all team members to <stong className="bold-blu">streamline communication</stong> and easily pick-up dialogue
        where each use may leave off. By simplifying methods for gathering,
        analyzing and storing critical data, <strong className="bold-blu">child outcomes may be improved. </strong>
      </p>
      

     <br />

      <p className="paragraph-3">
        A few specific area we're elevating in our system is how to proactively
        support the needs of all children and rapidly respond when a concern
        arises while keeping all stakeholders involved along the way! Stay
        informed with the launch of Abena DMS in <strong className="bold-blu">2022 and the next phase of
        education.</strong>
      </p>
      
    
      <section className="mtss-pyramid">
        <div className="group-313 flex-col">
          <p className="tier-1">Tier 1</p>
          <p className="tier-2">Tier 2</p>
          <p className="tier-3">Tier 3</p>
        </div>

        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2aRhaU5AJgN2L6tA3rcWuk-404%3A217?alt=media&token=34948bc6-8e45-41c3-bbc0-37213fcb414c"
          alt=" not found"
          className="polygon-1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2aRhaU5AJgN2L6tA3rcWuk-410%3A315?alt=media&token=f65e54d1-6cff-4157-88b6-95f900ff93fa"
          alt=" not found"
          className="peruvian-1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2aRhaU5AJgN2L6tA3rcWuk-410%3A318?alt=media&token=168f376d-1c51-4cf8-87c8-428c464f4b02"
          alt=" not found"
          className="girl-1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2aRhaU5AJgN2L6tA3rcWuk-410%3A317?alt=media&token=ec96c572-9f9b-4d57-b3fc-7fe90ee47553"
          alt=" not found"
          className="boy-1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2aRhaU5AJgN2L6tA3rcWuk-410%3A316?alt=media&token=b73b2158-a844-4663-9f7e-f2018cf0d7de"
          alt=" not found"
          className="girl-11"
        />
      </section>
      <br/>

      <Input className="form-input" type="email" placeholder="Enter email here..." />
      </div>
      
      
    </div>
  );
}

export default Mission;
