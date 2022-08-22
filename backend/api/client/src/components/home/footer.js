import React from "react";
import {
  Box,
  Image,
  Field,
  Form,
  Button,
  Container,
  Columns,
} from "react-bulma-components";
import animatedLighthouse from "../../assets/animated-lighthouse.png";

const FrameWorks = () => {
  // to do: load frameworks like a carousel

  return (
    <Container className="newsletter pt-6">
      <Columns margin="auto" className="newsletterColumn ml-6">
        <Columns.Column className="is-3">
          <Image
            className="footer-img"
            src={animatedLighthouse}
            alt="animated-lighthouse"
          />
        </Columns.Column>
       
          <Columns.Column className=" is-5 pt-4">
          <Form.Field className="email-input">
          <p className="newsletter-blurb">As our product and community continues to evolve so does the opportunity to uplift the ECE community! <br/> <br/>Subscribe to our monthly newsletter below.</p>

          <br/>
            <Form.Control>
              <Form.Input placeholder="Email Address" type="text" />
            </Form.Control>
            </Form.Field>
          </Columns.Column>

        
         <Columns.Column className=" is-3 pt-4">

            <Button className="newsletterButton">Subscribe</Button>
        </Columns.Column>
      </Columns>
    </Container>
  );
};

export default FrameWorks;
