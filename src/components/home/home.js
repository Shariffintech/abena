import React from "react";
import {Mission} from './mission';
import {Team} from './team';
import {FrameWorks} from './frameWorks';


// to do: add respective components to be rendered below
function Home() {
  
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <h1>Mission</h1>

          <p>
            At Abena, our goal is to help our teachers be thoughtful and
            intentional as they support the academic, social emotional,
            developmental and behavioral needs of children in their classroom.
            We have discovered an ideal way to build a product that resonates
            with this mission and have developed a roadmap to attend to the
            unique needs and interactions among children, teachers, parents and
            community-based partners. Abena DMS is a clever tool used to boost
            data-driven decision making and demystifying complexities of using
            SEL, PBIS. RTI and MTSS in the classroom. This integrated approach
            for supporting children encourages all team members to streamline
            communication and easily pick-up dialogue where each use may leave
            off. By simplifying methods for gathering, analyzing and storing
            critical data, child outcomes may be improved.
          </p>

          <p>
            A few specific area we're elevating in our system is how to
            proactively support the needs of all children and rapidly respond
            when a concern arises while keeping all stakeholders involved along
            the way! Stay informed with the launch of Abena DMS in 2022 and the
            next phase of education.
          </p>
        </header>

      </div>

    );
  }

export default Home;
