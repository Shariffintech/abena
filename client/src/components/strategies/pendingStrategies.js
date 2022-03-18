import React from "react";
import { motion } from "framer-motion";
import Card from "react-bulma-components/lib/components/card";

const pendingStrategies = () => {
  return (
    <>
      <section className="section">
        <h1> Pending Strategies to be reviewed</h1>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-one-third">
            <Card className="pending-strategies">
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
    </>
  );
};

export default pendingStrategies;
