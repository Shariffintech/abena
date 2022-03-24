import React, { useState } from "react";
import { motion } from "framer-motion";
import "bulma/css/bulma.min.css";
import "../../App.css";

import {
  Card,
  Media,
  Heading,
  Content,
  Image,
  Icon,
} from "react-bulma-components";
import {
  IoChatbubblesOutline,
  IoThumbsDownOutline,
  IoHeartOutline,
  IoStarOutline,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";


function Strategy(props) {
  // const strategy = useSelector((state) => state.strategy);


  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  // const [setStrategyPerCategory] = useDispatch(
  //   strategySlice.actions.setStrategyPerCategory
  // );
  // const [setStrategyPerStudent] = useDispatch(
  //   strategySlice.actions.setStrategyPerStudent
  // );
  // const [setStrategyPerReference] = useDispatch(
  //   strategySlice.actions.setStrategyPerReference
  // );
  // const [setStrategyPerStatus] = useDispatch(
  //   strategySlice.actions.setStrategyPerStatus
  // );
  // const [setStrategyPerTier] = useDispatch(
  //   strategySlice.actions.setStrategyPerTier
  // );

  // const [count, setCount] = useState(0);
  // const [favorite, setfavorite] = useState(false);
  // const [loved, setloved] = useState(false);
  // const [disliked, setdisliked] = useState(false);
  // const [status, setstatus] = useState("Not Reviewed");
  // const [modal, setmodal] = useState(false);

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
                      onClick={
                        (() => toggleSwitch(), dispatch(toggleStrategy()))
                      }
                    >
                      {/* { toggleStrategy() ? ( <IoToggleSharp /> ) : ( <IoToggleSharp /> ) } */}

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

export default Strategy;
