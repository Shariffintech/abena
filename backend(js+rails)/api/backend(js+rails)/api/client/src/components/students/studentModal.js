import React, { useState } from "react";
import { Students } from "../students/students";
import { Button, Modal, Media, Content, Card } from "react-bulma-components";
import "bulma/css/bulma.min.css";

const StudentModal = (props) => {
  const [openModal, setOpenModal] = useState();

  const students = [
    {
      id: 1,
      fullname: "Shawna Starling",
      overall_concern: "Anxiety Disorder- Autism 1",
      funding_stream: "CCIS/Non-Program",
      sleeping_pattern: "Takes naps",
      prior_school: "Abbot Academy",
      team: "Dad",
      strategies: [
        {
          active: true,
          id: 1,
          name: "Strategy 1",
          description: "Description of strategy 1",
        },
      ],
    },
    {
      id: 2,
      fullname: "Darla Starling",
      overall_concern: "Anxiety Disorder- Autism 3",
      funding_stream: "CCIS/Non-Program",
      sleeping_pattern: "Does not take naps",
      prior_school: "Abbot Academy",
      team: "Mom",
      strategies: "Culturally Sensitive",
    },
  ];

  return (
    <>
      <Modal
        show={openModal === "card"}
        onClose={() => {
          return setOpenModal();
        }}
      >
        <Modal.Card>
          <Modal.Card.Header showClose>
            <Modal.Card.Title> Students in my classroom </Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <Media>
              <Media.Item>
                <Card.Content>
                  <Content>
                    <p>{students.fullname}</p>
                    <p>{students.strategies}</p>
                  </Content>
                </Card.Content>
              </Media.Item>
            </Media>
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
    </>
  );
};
