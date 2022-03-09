import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import { Button } from "react-bulma-components";
import { Icon } from "react-bulma-components";
import {
  Card,
  Media,
  Heading,
  Content,
  Image,
  Field,
  Control,
  Textarea,
} from "react-bulma-components";
import {
  IoExpand,
  IoChatbubblesOutline,
  IoThumbsDownOutline,
  IoHeartOutline,
  IoStarOutline,
  IoToggleOutline,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";
import { motion } from "framer-motion";

export default function Strategy(props) {
  // const [count, setCount] = useState(0);
  // const [toggleStrategy, setToggleStrategy] = useState("On");
  // const [favorite, setfavorite] = useState(false);
  // const [loved, setloved] = useState(false);
  // const [disliked, setdisliked] = useState(false);
  // const [status, setstatus] = useState("Not Reviewed");
  // <Button onClick={this.toggleStrategy}> Toggle</Button>
  //       <Button onClick={this.toggleStrategy}> Yes</Button>

  // if they are changing at the same time make them seperate
  // use memo research
  // to do add a button to delete the strategy
  // todo add counter button for did you learn something new on landing page with animation

  // sort by status when called
  const sortByStatuses = (strategies) => {
    if (strategies.status === "accepted") {
      return strategies.filter((strategy) => strategy.status === "accepted");
    } else if (strategies.status === "rejected") {
      return strategies.filter((strategy) => strategy.status === "rejected");
    } else if (strategies.status === "in review") {
      return strategies.filter((strategy) => strategy.status === "review");
    }
  };

  // sort by tier when called
  const sortByTier = (strategy) => {
    if (strategy.tier === "1") {
      return strategy.filter((strategy) => strategy.tier === "1");
    }
    if (strategy.tier === "2") {
      return strategy.filter((strategy) => strategy.tier === "2");
    }
    if (strategy.tier === "3") {
      return strategy.filter((strategy) => strategy.tier === "3");
    }
  };

  // add ability to search for strategy by tier, category

  // add toggle to turn on strategy and turn off strategy (use state)
  // when strategy is turned on it is applied to the student
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
              <Card className="Pending Strategies">
                <Icon>
                  <span className="rbc rbc-bars" />
                </Icon>

                <Card.Content size={8} vertical="true">
                  <Media>
                    <Media.Item renderAs="figure" position="center">
                      <h1 className="strategy-tier">Tier {props.tier} </h1>
                      <br />
                      <Image
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
                      <p className="description-text">{props.description}</p>
                      <Button className="expand-button" size="one-third">
                        Expand <IoExpand />{" "}
                      </Button>
                    </div>

                    <div className="strategy-reference">
                      <h3 className="reference-title">Reference</h3>
                      <p className="reference-text">{props.reference}</p>
                    </div>

                    <br />
                    <time dateTime="2016-1-1">{props.createdAt}</time>
                  </Content>
                </Card.Content>

                <Card.Footer>
                  <Card.Footer.Item>
                    <p> Was this helpful?</p>
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

      <br />

      <section className="section">
        <h1> Pending Strategies to be reviewed</h1>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-one-third">
            <Card className="Pending Strategies">
              <Card.Header>
                <Card.Header.Title>
                  <h1 className="strategy-tier">Tier </h1>
                  <h1 className="strategy-tier">{props.tier}</h1>
                </Card.Header.Title>
              </Card.Header>

              <Card.Content size={8} vertical="true">
              <Media>
                    <Media.Item renderAs="figure" position="center">
                      <h1 className="strategy-tier">Tier {props.tier} </h1>
                      <br />
                      <Image
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
                      <p className="description-text">{props.description}</p>
                      <Button className="expand-button" size="one-third">
                        Expand <IoExpand />{" "}
                      </Button>
                    </div>

                    <div className="strategy-reference">
                      <h3 className="reference-title">Reference</h3>
                      <p className="reference-text">{props.reference}</p>
                    </div>

                    <br />
                    <time dateTime="2016-1-1">{props.createdAt}</time>
                  </Content>
                </Card.Content>

              <Card.Footer>
                <Card.Footer.Item renderAs="a" href="#Yes">
                  Approve
                </Card.Footer.Item>

                <Card.Footer.Item renderAs="a" href="#No">
                  Request Revision
                </Card.Footer.Item>

                <Card.Footer.Item renderAs="a" href="#No">
                  Reject
                </Card.Footer.Item>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

// Strategy.defaultProps = {
//   name: null,
//   reference: null,
//   description: null,
//   tier: 1,
//   category: "Academic",
// };
