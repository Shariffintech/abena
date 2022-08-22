import React, { useState } from "react";
import { motion } from "framer-motion";
import { Block, Columns, Container, Card } from "react-bulma-components";

export default function Team(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container className="team">
      <h1 className="team-title is-size-1-desktop" align="center" top="">
        Team
      </h1>
      <Columns className="team-cards" multiline="false" centered="true">
        <Columns.Column size="one-third">
          <motion.div
            className="team-image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Block>
              <Card borderRadius={50}>
                <Card.Content>
                  <img
                    className="shawna-team-image ml-6"
                    src="https://user-images.githubusercontent.com/22308837/158008241-31da65bc-e53b-4822-b520-6566a0fe4b25.png"
                  />

                  <Block className="team-names ml-6">
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
                </Card.Content>
              </Card>
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
            <Block>
              <Card>
                <Card.Content>
                  <img
                    className="sharif-team-image ml-6"
                    src="https://user-images.githubusercontent.com/22308837/158008262-4151ccf9-7592-4b0d-833b-7118e43268ea.png"
                  />

                  <Block className="team-names ml-6">
                    <strong color="abena-purple">
                      Co-Founder, Software Engineer
                    </strong>

                    <h2 className="team-name">Sharif Tarver</h2>
                  </Block>

                  <Block className="ml-6">
                    <p className="team-description">Superpowers:</p>
                    <br />
                    <p className="team-description">
                      4+ yrs of exp working on startups (FinTech, SaaS).
                    </p>

                    <p className="team-description">
                    Passion for learning. Adamant about building products that make people's lives
                      better.
                    </p>

                    <p className="team-description">
                      Scrappy problem solver who loves to code.
                    </p>
                  </Block>
                </Card.Content>
              </Card>
            </Block>
          </motion.div>
        </Columns.Column>
      </Columns>
    </Container>
  );
}
