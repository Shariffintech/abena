import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  IoThumbsUpOutline
} from "react-icons/io5";

function Strategy(props) {
  // const strategy = useSelector((state) => state.strategy);

  // const dispatch = useDispatch();

  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  // const [count, setCount] = useState(0);
  // const [favorite, setfavorite] = useState(false);
  // const [loved, setloved] = useState(false);
  // const [disliked, setdisliked] = useState(false);
  // const [status, setstatus] = useState("Not Reviewed");
  // const [modal, setmodal] = useState(false);
  console.log(props, ' my props');

  return (
    //map through the strategies and display them
    <motion.div whileHover={{ scale: .95 }}  className="columns">
    <div className="strategyCard colums is-mobile" key={props.id}>
      <section className="section">
        <div className="pending-strategies">
          <div className="container">
            <div className="columns mt-6">
              <Card className="accepted-t1-strategies">
                <Icon>
                  <span className="rbc rbc-bars" />
                </Icon>

                <Card.Content size={4} vertical="true" width={4}>
                  <Media>
                    <Media.Item renderAs="figure" position="center">
                      <h1 className="strategy-tier">{props.tier} </h1>
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
                        {props.name}
                      </Heading>
                      <Heading subtitle size={6} position="center">
                        
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
                        className="textarea is-warning has-fixed-size"
                        placeholder="Primary textarea"
                        readOnly={true}
                      >
                        {props.description}
                      </textarea>
                    </div>

                    <div className="strategy-reference">
                      <h3 className="reference-title">Reference</h3>
                      <textarea
                        className="textarea is-warning has-fixed-size"
                        placeholder="Primary textarea"
                        readOnly={true}
                      >
                        {props.reference}
                      </textarea>
                    </div>

                    <br />

                    <div
                      className="switch"
                      size={8}
                      data-ison={isOn}
                      onClick={() => toggleSwitch()}
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

                    <div className="column">
                    <p> Was this helpful?</p>
                    </div>
                    <div className="column">
                    <IoChatbubblesOutline />
                    Comments
                    </div>
                    <div className="column">
                    <IoThumbsUpOutline />
                    </div>
                    <div className="column">
                    <IoThumbsDownOutline />
                    </div>
                    <div className="column">
                    <IoHeartOutline />
                    </div>
                  </Card.Footer.Item>
                </Card.Footer>
              </Card>


            </div>
          </div>
        </div>
      </section>
    </div>

    
  </motion.div>


  );
}

export default Strategy;
