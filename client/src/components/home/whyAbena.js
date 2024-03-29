import React from "react";
import {
  IoDesktopOutline,
  IoFlash,
  IoWalletSharp,
  IoEarthSharp,
  IoBarChart,
  IoLayers,
} from "react-icons/io5";
import {Columns, Block, Container,Image } from "react-bulma-components";
import edCloud from "../../assets/ed-cloud.png";

const WhyAbena = () => {
  return (
    <Container className="why-abena">
    <Container className="full-height">
      <Block>
        <h1 align="center" className="why-abena-title">
          Why Abena?
        </h1>
      </Block>
      <Container>
        <Columns multiline="true">
          <Columns.Column size={5} className="ml-auto">
            <Block className="mr-5" align="right">
              <Image
                src="https://user-images.githubusercontent.com/22308837/158078650-c5a4e608-4355-4392-89fa-9e9e2682284a.jpg"
                alt="why abena"
              />
            </Block>

            <Columns.Column margin="auto" className="ml-0">
              <Block>
                <h3 className="abena-offering-subtitle">
                  Education as Legos <IoLayers />
                </h3>

                <p>
                  Use data driven decision making to customize the learning goals of your classroom.
                </p>
              </Block>

              <Block size={8}>
                <h3 className="abena-offering-subtitle">
                  Smart Reporting <IoBarChart />
                </h3>

                <p>
                  Monitor students academic needs in real time and spare no
                  detail with complete transparency to the students profile.
                  Teachers will be empowered with insights that will allow them
                  to help increase the likelihood of a students success. 
                </p>
              </Block>
            </Columns.Column>
          </Columns.Column>

          <Columns.Column size={5} className="ml-6 mr-6" margin="auto">
            <Block>
              <h3 className="abena-offering-subtitle">
                Reduced Lead Time <IoFlash />
              </h3>

              <p>
                The classroom environment has never been more equipped, with
                Abena® DMS teachers are now prepared to track social and
                emotional behavior using the MTSS framework. Abena gives
                educators back the time and attention that they need in order to
                supports students needs. We believe in tracking behavioral,
                social, and emotional activity in real time maximize learning
                potential for every student.
              </p>
            </Block>

            <Block>
              <h3 className="abena-offering-subtitle">
                Parent Portal <IoDesktopOutline />{" "}
              </h3>

              <p>
                Get consent from parents to share the students information and
                communicate seamlessly to support the child through the school
                year!
              </p>
            </Block>

            <Block>
              <h3 className="abena-offering-subtitle">
                Affordable Liscensing <IoEarthSharp /> <IoWalletSharp />{" "}
              </h3>

              <p>
                You can tailor your policy to fit your budgets and your needs
                because we believe that Abena® DMS should be accessible to every educator! Suscribe today!
              </p>
            </Block>

            <Image
            src={edCloud}
            alt="ed-cloud"
            className="ed-cloud"
            align="right"
            />
          </Columns.Column>
        </Columns>
      </Container>
    </Container>
    </Container>
  );
};

export default WhyAbena;
