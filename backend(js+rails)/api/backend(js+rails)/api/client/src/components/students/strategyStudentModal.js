import React, { useState } from "react";
import {
  Button,
  Modal,
  Media,
  Content,
  Block,
  Card,
} from "react-bulma-components";
import "bulma/css/bulma.min.css";

const [isOn, setIsOn] = useState(false);
const [openModal, setOpenModal] = useState();

const toggleSwitch = () => setIsOn(!isOn);
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export function StudentStrategyModal(props) {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="switch" data-ison={isOn} onClick={() => toggleSwitch()}>
      <motion.div className="handle" layout transition={spring} />
      <Modal
        show={openModal === "card"}
        onClose={() => {
          return setOpenModal();
        }}
      >
        <Modal.Card>
          <Modal.Card.Body>
            <Media>
              <Media.Item>
                <Content>
                  <p>
                    <strong>Abena Bot</strong> <small>@abena-dms</small>
                    <small>(auto-generated)</small>
                    <br />
                    <br />
                    We are excited to include you in the beta phase of Abena
                    DMS. While we are hard at work building the core features of
                    the app we will keep you in the loop throughout the process.
                  </p>
                </Content>
              </Media.Item>
            </Media>

            <br />
            <br />

            <JoinBetaForm />
          </Modal.Card.Body>
        </Modal.Card>


        {students.map((student) => (
        <Student
            key={student.id}
            id={student.id}
            name={student.name}
            
        />
      ))}

        <Card>
          <Media>
            <Media.Item renderAs="figure" align="left">
              <Image
                size={64}
                alt="64x64"
                src="http://bulma.io/images/placeholders/128x128.png"
              />
            </Media.Item>
            <Media.Item>
              <h2 className="student-photo">{props.student.photo}</h2>
              <h1 className="student-name">{props.student.name}</h1>
            </Media.Item>
          </Media>
        </Card>
      </Modal>
    </div>
  );
}
