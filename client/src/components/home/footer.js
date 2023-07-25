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
// import animatedLighthouse from "../../assets/animated-lighthouse.png";
import discordButton from "../../assets/discord.png";
import { Link } from "react-router-dom";

const FrameWorks = () => {
  // to do: load frameworks like a carousel

  const handleClick = () => {
    window.open("https://discord.gg/XkKEBmMf");
  };


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
            <p className="newsletter-blurb">
              As our product and community continues to evolve so does the
              opportunity to grow the online ECE community! <br /> <br />
              Join our community discord!     
              
            <Image
             
             alt="discord-button"
             className="discord-button"
             src={discordButton}
             onClick = {handleClick}
             style={{ maxWidth: '25%', maxHeight: '25%' }}
           />
            </p>

            <br />
       
       

          </Form.Field>
        </Columns.Column>

     
       
        

      </Columns>
    </Container>
  );
};

export default FrameWorks;
