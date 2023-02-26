import React, { useState } from "react";
import { Container, Block, Columns, Image } from "react-bulma-components";

import { motion } from "framer-motion";
import JoinBetaButton from "../joinBeta/joinBetaButton";
import ProductHunt from '../productHunt';
import "../../../style.css";
import Lighthouse from "../../../assets/lighthouse.png";

const Mission = () => {
  

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
            <br />
            <p className="paragraph-2">
              Abena® is an adaptive early childhood tool that allows teachers to focus on supporting childcare students in the classroom instead of using cumbersome paper-driven processes to onboard and track the progress of new students. 
            </p>
            <br />
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
