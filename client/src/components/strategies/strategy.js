import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import "../../App.css";
import { motion } from "framer-motion";
import Modal from "./modal";
import Backdrop from "./backdrop";

import {
  Card,
  Media,
  Heading,
  Content,
  Image,
  Icon,
  Button,
  Container,
  Columns,
} from "react-bulma-components";
import {
  IoExpand,
  IoChatbubblesOutline,
  IoThumbsDownOutline,
  IoHeartOutline,
  IoStarOutline,
  IoToggleSharp,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";

export default function Strategy(props) {
  // const [count, setCount] = useState(0);
  // const [toggleStrategy, setToggleStrategy] = useState("On");
  // const [favorite, setfavorite] = useState(false);
  // const [loved, setloved] = useState(false);
  // const [disliked, setdisliked] = useState(false);
  // const [status, setstatus] = useState("Not Reviewed");
  // const [modal, setmodal] = useState(false);
  // use memo research

  // todo add counter button for did you learn something new on landing page with animation

  // when strategy is turned on it is applied to the student

  // have strategies automatically move in a carousel upon load

  // add a create button / function that will pop a modal for creating a new strategy and import the strategyForm to insert in the modal

  // add a search bar to search for strategies , add a sort function to sort by category/ tier

  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="strategyCard colums is-mobile" key={props.id}>
      <section className="section">
        <div className="pending-strategies">
          <div className="container">
            <div className="columns is-3">
        
                <Card className="accepted-t1-strategies">
                  <Icon>
                    <span className="rbc rbc-bars" />
                  </Icon>

                  <Card.Content size={8} vertical="true">
                    <Media>
                      <Media.Item renderAs="figure" position="center">
                        <h1 className="strategy-tier">Tier {props.tier} </h1>
                        <br />
                        <Image
                          className="tier-1"
                          size={64}
                          alt="64x64"
                          src="https://user-images.githubusercontent.com/22308837/157333646-7be6a078-4b0a-4101-a34e-7d90b5b92f66.png"
                        />
                      </Media.Item>

                      <Media.Item>
                        <IoEllipsisHorizontalSharp position="right" />
                        <Heading size={4} position="left">
                          <div className="strategy-name">
                            <p className="strategy-name">Strategy Name</p>
                          </div>
                        </Heading>
                        <Heading subtitle size={6} position="center">
                          <p className="strategy-name">{props.name}</p>
                        </Heading>

                        <p size={4} position="right">
                          Favorite <IoStarOutline />
                        </p>
                      </Media.Item>
                    </Media>

                    <Content>
                      <div className="strategy-description" position="center">
                        <h3 className="description-title">Description</h3>
                        <textarea
                          class="textarea is-warning has-fixed-size"
                          placeholder="Primary textarea"
                          readonly="true"
                        >
                          {props.description}
                        </textarea>
                        <strategyModal />
                      </div>

                      <div className="strategy-reference">
                        <h3 className="reference-title">Reference</h3>
                        <textarea
                          class="textarea is-warning has-fixed-size"
                          placeholder="Primary textarea"
                          readonly="true"
                        >
                          {props.reference}
                        </textarea>
                      </div>

                      <br />

                      <div
                        className="switch"
                        data-isOn={isOn}
                        onClick={toggleSwitch}
                      >
                        <motion.div
                          className="handle"
                          layout
                          transition={spring}
                        />
                      </div>

                      <time dateTime="2016-1-1">{props.createdAt}</time>
                    </Content>
                  </Card.Content>

                  <Card.Footer>
                    <Card.Footer.Item>
                      <p> Was this helpful?</p>
                      <IoChatbubblesOutline />
                      Comments
                      <IoThumbsDownOutline />
                      Dislike
                      <IoHeartOutline />
                      Love
                    </Card.Footer.Item>
                  </Card.Footer>
                </Card>
       
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
