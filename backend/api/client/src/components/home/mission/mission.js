import React, { useState } from "react";
import { Container, Block, Columns, Image } from "react-bulma-components";

import { motion } from "framer-motion";
import JoinBetaButton from "../joinBeta/joinBetaButton";
import ProductHunt from '../productHunt';
import "../../../style.css";
import Lighthouse from "../../../assets/lighthouse.png";

const Mission = () => {
  // to do: add event listeners for scroll down to move lights with lighthouse
  // to do: add nav bar with links to scroll to: team, mission, why abena dms, api documentation, pricing (coming soon) sections
  // to do: link product hunt button to product hunt page
  // to do: setup emailing list through sendgrid after users join beta
  // to do: show (count) place in line for educators
  // as you scroll kids will reposition into the mtss pyramid

  // const handleScroll = (e) => {
  //   const scrollTop = e.target.scrollTop;
  //   const scrollHeight = e.target.scrollHeight;
  //   const clientHeight = e.target.clientHeight;

  //   if (scrollTop + clientHeight === scrollHeight) {
  //     console.log("scroll to bottom");
  //   }
  // };

  // setup listener window.scrolly flash every 40 seconds

  return (
    // to do: sort out styling of text, add link to product hunt page for PH button
    // to do: add chat bubble next to student icons
    // to do: add email validation for users signing up for beta release

    <Container className="mission-container ml-auto" margin="auto">
      <Columns className="mt-6 pt-auto" margin="auto">
        <Columns.Column
          className="mission-statement ml-6 pt-6"
          size="half"
          margin="auto"
        >
          <svg
            className="ambient-light"
            width="958"
            height="315"
            viewBox="0 0 958 315"
            fill="none"
          >
            <rect
              x="323"
              y="23"
              width="313"
              height="292"
              fill="url(#pattern0)"
            />
            <g filter="url(#filter0_f_706_92)">
              <path
                d="M504 119L844.5 30.6654L844.5 207.335L504 119Z"
                fill="white"
              />
            </g>
            <g filter="url(#filter1_f_706_92)">
              <path
                d="M454 119L113.5 207.335L113.5 30.6654L454 119Z"
                fill="white"
              />
            </g>
            <g opacity="0.5" filter="url(#filter2_f_706_92)">
              <path
                d="M504 119L844.5 30.6654L844.5 207.335L504 119Z"
                fill="url(#paint0_linear_706_92)"
              />
            </g>
            <g opacity="0.5" filter="url(#filter3_f_706_92)">
              <path
                d="M454 119L113.5 207.335L113.5 30.6654L454 119Z"
                fill="url(#paint1_linear_706_92)"
              />
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  // xlink:href="#image0_706_92"
                  transform="translate(0 -0.0359589) scale(0.002 0.00214384)"
                />
              </pattern>
              <filter
                id="filter0_f_706_92"
                x="492"
                y="18.6654"
                width="364.5"
                height="200.669"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="6"
                  result="effect1_foregroundBlur_706_92"
                />
              </filter>
              <filter
                id="filter1_f_706_92"
                x="98.5"
                y="15.6654"
                width="370.5"
                height="206.669"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="7.5"
                  result="effect1_foregroundBlur_706_92"
                />
              </filter>
              <filter
                id="filter2_f_706_92"
                x="474"
                y="0.665421"
                width="400.5"
                height="236.669"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_706_92"
                />
              </filter>
              <filter
                id="filter3_f_706_92"
                x="83.5"
                y="0.665405"
                width="400.5"
                height="236.669"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_706_92"
                />
              </filter>
              <linearGradient
                id="paint0_linear_706_92"
                x1="504"
                y1="119"
                x2="958"
                y2="119"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.125"
                  stop-color="#E9EC49"
                  stop-opacity="0.84011"
                />
                <stop
                  offset="0.708333"
                  stop-color="#EFCFFA"
                  stop-opacity="0.954627"
                />
                <stop offset="1" stop-color="#E99DEF" stop-opacity="0.69" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_706_92"
                x1="454"
                y1="119"
                x2="-4.45856e-06"
                y2="119"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.125"
                  stop-color="#E9EC49"
                  stop-opacity="0.84011"
                />
                <stop
                  offset="0.708333"
                  stop-color="#EFCFFA"
                  stop-opacity="0.954627"
                />
                <stop offset="1" stop-color="#E99DEF" stop-opacity="0.69" />
              </linearGradient>
              <image id="image0_706_92" width="500" height="500" />
            </defs>
          </svg>

          <div className="mission-statement-text">
            <h1 className="mission-title pb-6" align="center">
              Mission
            </h1>

            <p className="paragraph-1">
              At Abena® DMS, our goal is to help our teachers be thoughtful and
              intentional as they support the{" "}
              <strong className="bold-blu">
                academic, social emotional, developmental and behavioral needs
                of children{" "}
              </strong>{" "}
              in their classroom. We have discovered an ideal way to build a
              product that resonates with this mission and have developed a
              roadmap to attend to the unique needs and interactions among
              children, teachers, parents and community-based partners.
            </p>

            <br />
            <p className="paragraph-2">
              Abena® DMS is a clever tool used to boost data-driven decision
              making and demystifying complexities of using SEL, PBIS. RTI and
              MTSS in the classroom. This integrated approach for supporting
              children encourages all team members to{" "}
              <strong className="bold-blu">streamline communication</strong> and
              easily pick-up dialogue where each stakeholder may leave off. By
              simplifying methods for gathering, analyzing and storing critical
              data,{" "}
              <strong className="bold-blu">
                child outcomes may be improved.{" "}
              </strong>
            </p>

            <br />

            <p className="paragraph-3">
              A few specific area we're elevating in our system is how to
              proactively support the needs of all children and rapidly respond
              when a concern arises while keeping all stakeholders involved
              along the way! Stay informed with the launch of Abena® DMS in{" "}
              <strong className="bold-blu">
                2022 and the next phase of early childhood education.
              </strong>
            </p>
          </div>
          <div className="eclipse" />

          <Columns className="join-beta-button">
            <Columns.Column className="is-4">
              <JoinBetaButton onBetaSubmit={(e) => setEmail(e.target.value)} />
            </Columns.Column>
            <Columns.Column>
            <ProductHunt/></Columns.Column>
          </Columns>
        </Columns.Column>

        <Columns.Column size={4} multiline="false">
          <motion.div
            className="mission-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Block align="center" size="4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2aRhaU5AJgN2L6tA3rcWuk-404%3A217?alt=media&token=34948bc6-8e45-41c3-bbc0-37213fcb414c"
                alt=" mtss pyramid"
                className="mtss-pyramid"
              />

              <div className="group-313" align="right">
                <p className="tier-1">Tier 3 </p>
                <p className="tier-2">Tier 2 </p>
                <p className="tier-3">Tier 1 </p>
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
              </div>
            </Block>
          </motion.div>
        </Columns.Column>

        <Columns.Column size={4} multiline="false">
          <motion.div
            className="mission-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Block className="tier-block" size={6}>
              <svg
                className="ambient-light"
                width="958"
                height="315"
                viewBox="0 0 958 315"
                fill="none"
              >
                <rect
                  x="323"
                  y="23"
                  width="313"
                  height="292"
                  fill="url(#pattern0)"
                />
                <g filter="url(#filter0_f_706_92)">
                  <path
                    d="M504 119L844.5 30.6654L844.5 207.335L504 119Z"
                    fill="white"
                  />
                </g>
                <g filter="url(#filter1_f_706_92)">
                  <path
                    d="M454 119L113.5 207.335L113.5 30.6654L454 119Z"
                    fill="white"
                  />
                </g>
                <g opacity="0.5" filter="url(#filter2_f_706_92)">
                  <path
                    d="M504 119L844.5 30.6654L844.5 207.335L504 119Z"
                    fill="url(#paint0_linear_706_92)"
                  />
                </g>
                <g opacity="0.5" filter="url(#filter3_f_706_92)">
                  <path
                    d="M454 119L113.5 207.335L113.5 30.6654L454 119Z"
                    fill="url(#paint1_linear_706_92)"
                  />
                </g>
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      // xlink:href="#image0_706_92"
                      transform="translate(0 -0.0359589) scale(0.002 0.00214384)"
                    />
                  </pattern>
                  <filter
                    id="filter0_f_706_92"
                    x="492"
                    y="18.6654"
                    width="364.5"
                    height="200.669"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="6"
                      result="effect1_foregroundBlur_706_92"
                    />
                  </filter>
                  <filter
                    id="filter1_f_706_92"
                    x="98.5"
                    y="15.6654"
                    width="370.5"
                    height="206.669"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="7.5"
                      result="effect1_foregroundBlur_706_92"
                    />
                  </filter>
                  <filter
                    id="filter2_f_706_92"
                    x="474"
                    y="0.665421"
                    width="400.5"
                    height="236.669"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="15"
                      result="effect1_foregroundBlur_706_92"
                    />
                  </filter>
                  <filter
                    id="filter3_f_706_92"
                    x="83.5"
                    y="0.665405"
                    width="400.5"
                    height="236.669"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="15"
                      result="effect1_foregroundBlur_706_92"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_706_92"
                    x1="504"
                    y1="119"
                    x2="958"
                    y2="119"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.125"
                      stop-color="#E9EC49"
                      stop-opacity="0.84011"
                    />
                    <stop
                      offset="0.708333"
                      stop-color="#EFCFFA"
                      stop-opacity="0.954627"
                    />
                    <stop offset="1" stop-color="#E99DEF" stop-opacity="0.69" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_706_92"
                    x1="454"
                    y1="119"
                    x2="-4.45856e-06"
                    y2="119"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.125"
                      stop-color="#E9EC49"
                      stop-opacity="0.84011"
                    />
                    <stop
                      offset="0.708333"
                      stop-color="#EFCFFA"
                      stop-opacity="0.954627"
                    />
                    <stop offset="1" stop-color="#E99DEF" stop-opacity="0.69" />
                  </linearGradient>
                  <image id="image0_706_92" width="500" height="500" />
                </defs>
              </svg>
            </Block>
          </motion.div>
        </Columns.Column>

        <Columns.Column>
          <Image
            className="lighthouse"
            src={Lighthouse}
            alt="Light house for ambient light"
            width="500" height="500"
          />
        </Columns.Column>
      </Columns>
    </Container>
  );
};

export default Mission;
