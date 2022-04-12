import React, { useState } from "react";
import { motion } from "framer-motion";
import "bulma/css/bulma.min.css";
import "../../App.css";
import LikeButton from "./likeButton";

import { Card, Content, Image, Icon } from "react-bulma-components";
import {
  IoChatbubblesOutline,
  IoThumbsDownOutline,
  IoHeartOutline,
  IoStarOutline,
  IoThumbsUpOutline,
} from "react-icons/io5";

function Strategy(props) {
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

  return (
    <motion.div whileHover={{ scale: 0.95 }}>
      <section className="section mt-4">
        <div className="column" style={{ width: "140%" }} size={6}>
          <Card>
            <Icon>
              <span className="rbc rbc-bars" />
            </Icon>
            
            <Card.Content>
              <h1 className="strategy-tier" size={6}>
                {props.tier}{" "}
              </h1>
              <LikeButton />
              <br />
              <Image
                size={64}
                alt="64x64"
                src="https://user-images.githubusercontent.com/22308837/157333646-7be6a078-4b0a-4101-a34e-7d90b5b92f66.png"
                position="right"
              />

              <Content>
                <div className="strategy-name" position="center">
                  <h3>Strategy Name</h3>
                  <textarea
                    size={4}
                    className="textarea is-primary has-fixed-size"
                    placeholder="Primary textarea"
                    readOnly={true}
                    value={props.name}
                  />
                  <br />
                </div>

                <div className="strategy-description" position="center">
                  <h3 className="description-title">Description</h3>
                  <textarea
                    className="textarea is-primary has-fixed-size"
                    placeholder="Primary textarea"
                    readOnly={true}
                    value={props.description}
                  />
                  <br />
                </div>
                <div className="strategy-reference">
                  <h3 className="reference-title">Reference</h3>
                  <textarea
                    className="textarea is-primary has-fixed-size"
                    placeholder="Primary textarea"
                    readOnly={true}
                    value={props.reference}
                  />
                </div>
                <br />
                <div className="strategy-category">
                  <h3 className="category-title">Deploy</h3>
                </div>

                <div
                  className="switch"
                  data-ison={isOn}
                  onClick={() => toggleSwitch()}
                >
                  <motion.div className="handle" layout transition={spring} />
                </div>
                <time dateTime="2016-1-1" value={props.createdAt} />
              </Content>
            </Card.Content>
            <Card.Footer>
              <Card.Footer.Item>
                <Icon className="icon" color="primary">
                  <IoChatbubblesOutline />
                </Icon>
                <span>{props.comments}</span>
              </Card.Footer.Item>
              <Card.Footer.Item>
                <Icon className="icon" color="danger">
                  <IoThumbsDownOutline />
                </Icon>
                <span>{props.dislikes}</span>
              </Card.Footer.Item>
              <Card.Footer.Item>
                <Icon className="icon" color="success">
                  <IoThumbsUpOutline />
                </Icon>
                <span>{props.likes}</span>
              </Card.Footer.Item>
              <Card.Footer.Item>
                <Icon className="icon" color="info">
                  <IoHeartOutline />
                </Icon>
                <span>{props.favorites}</span>
              </Card.Footer.Item>
              <Card.Footer.Item>
                <Icon className="icon" color="info">
                  <IoStarOutline />
                </Icon>
                <span>{props.stars}</span>
              </Card.Footer.Item>
            </Card.Footer>
          </Card>
        </div>
      </section>
    </motion.div>
  );
}

export default Strategy;
