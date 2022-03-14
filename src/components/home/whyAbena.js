import React from "react";
import {
  IoDesktopOutline,
  IoFlash,
  IoWalletSharp,
  IoEarthSharp,
  IoBarChart,
  IoLayers,
} from "react-icons/io5";
import { Container, Block } from "react-bulma-components";

const WhyAbena = () => {
  return (
    <div className="why-abena">
      {/* <Container className="why-content-container"> */}
      <h1 className="why-abena-title">Why Abena?</h1>

      {/* <Container className="reduced-lead-container">
            <Block className="reduced-lead"> */}
   

      <Container alignItems="auto">
      <div className="why-abena-img-container">
        <img
          className="why-abena-img"
          src="https://user-images.githubusercontent.com/22308837/158078650-c5a4e608-4355-4392-89fa-9e9e2682284a.jpg"
          alt="why abena"
        />
      </div>
        <h3 className="reduced-abena-subtitle">
          Reduced Lead Time <IoFlash />
        </h3>

        <p className="reduced-offering-paragraph">
          The classroom environment has never been more equipped, with Abena DMS
          teachers are now prepared to track social and emotional behavior using
          the MTSS framework. Abena gives educators back the time and attention
          that they need in order to supports students needs. We believe in
          tracking behavioral, social, and emotional activity in real time
          maximize learning potential for every student.
        </p>
        {/* </Block>
        </Container> */}
        <br />
        {/* <Container className="parent-portal-container"> */}
        <h3 className="parent-abena-subtitle">
          Parent Portal <IoDesktopOutline />{" "}
        </h3>

        <p className="parent-offering-paragraph">
          Get consent from parents to share the students information and
          communicate seamlessly to support the child through the school year!
        </p>
        {/* </Container> */}
        <br />

        {/* <Container className="affordable-liscensing-container"> */}
        <h3 className="affordable-abena-subtitle">
          Affordable Liscensing <IoEarthSharp /> <IoWalletSharp />{" "}
        </h3>

        <p className="affordable-offering-paragraph">
          You can tailor your policy to fit your budgets and your needs because
          we believe that life insurance isn’t a one-size-fits-all solution for
          your family. Get the policy that’s best for your family today.
        </p>
    
      {/* </Container> */}

      <br />

      {/* <Container className="smart-reporting-container"> */}
      <h3 className="smart-abena-subtitle">
        Smart Reporting <IoBarChart />{" "}
      </h3>

      <p className="smart-offering-paragraph">
        Monitor students academic needs in real time and spare no detail with
        complete transparency to the students profile. Teachers will be
        empowered with insights that will allow them to follow a students
        success path and help get the student back on track.
      </p>
      {/* </Container> */}
      <br />

      {/* <Container className="education-legos-container"> */}
      <h3 className="legos-abena-subtitle">
        Education as Legos <IoLayers />
      </h3>

      <p className="legos-offering-paragraph">
        Add or remove features that are tailored to supporting your classroom
        needs. Remove all the services that you don’t use from our offerings.
      </p>
      </Container>
      {/* </Container>
         
       </Container> */}
    </div>
  );
};

export default WhyAbena;
