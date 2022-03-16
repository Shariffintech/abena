import React, { useState } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  LayoutGroup,
} from "framer-motion";
import { Box, Block, Columns, Container } from "react-bulma-components";
// import { } from "react-bulma-components"

export default function Team(props) {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <Container className="team">
      <h1 className="why-abena-title" align="center">
        Team
      </h1>
      <Columns multiline={false} centered={true}>
        <Columns.Column size="one-third">
          <motion.div
            className="team-image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Block>
              <img
                className="shawna-team-image ml-6"
                src="https://user-images.githubusercontent.com/22308837/158008241-31da65bc-e53b-4822-b520-6566a0fe4b25.png"
              />
              {/* <img
                className="profile-container-image"
                src="https://user-images.githubusercontent.com/22308837/158213026-7bf9d381-26be-4f06-bb23-fbffedac83a1.png"
              /> */}

              <Block className="team-title ml-6">
                <strong>Founder, EdD Candidate </strong>
                <h2 className="team-name">Shawna Starling </h2>
              </Block>
              <Block className="ml-6">
                <p className="team-description">Superpowers:</p>
                <br />
                <p className="team-description">
                  20+ years of in early education.
                </p>
                <p className="team-description">
                  Fluent in building early education programs.
                </p>
                <p className="team-description">
                  Unapologetic about the importance of early education.
                </p>
              </Block>
            </Block>
          </motion.div>
        </Columns.Column>

        <Columns.Column size="one-third">
          <motion.div
            className="team-image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <img
              className="sharif-team-image ml-6"
              src="https://user-images.githubusercontent.com/22308837/158008262-4151ccf9-7592-4b0d-833b-7118e43268ea.png"
            />
            {/* <img
                className="profile-container-image"
                src="https://user-images.githubusercontent.com/22308837/158213026-7bf9d381-26be-4f06-bb23-fbffedac83a1.png"
              /> */}

            <Block className="team-title ml-6" >
              <strong color="abena-purple">Co-Founder, Software Engineer</strong>

              <h2 className="team-name">Sharif Tarver</h2>
            </Block>
            <Block className="ml-6">
              <p className="team-description">Superpowers:</p>
              <br />
              <p className="team-description">
                4+ yrs of exp working on startups (FinTech, SaaS).
              </p>
              <p className="team-description">
                Flatiron grad with a passion for learning.
              </p>

              <p className="team-description">
                Adamant about building products that make people's lives better.
              </p>

              <p className="team-description">
                Scrappy problem solver who loves to code.
              </p>
            </Block>
          </motion.div>
        </Columns.Column>
      </Columns>
    </Container>
  );
}
