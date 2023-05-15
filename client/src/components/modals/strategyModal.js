import React, { useState } from "react";
import { StrategyForm } from "../strategies/strategyForm";
import { Button, Modal, Media, Content, Block } from "react-bulma-components";
import "bulma/css/bulma.min.css";

const StrategyModal = () => {
  const [openModal, setOpenModal] = useState();
  return (
    <>
      <Button.Group renderAs={Block}>
        <Button
          className="abena-gradient"
          onClick={() => {
            return setOpenModal("card");
          }}
        >
          Submit EBS Strategy
        </Button>
      </Button.Group>
      <Modal
        show={openModal === "card"}
        onClose={() => {
          return setOpenModal();
        }}
      >
        <Modal.Card>
          <Modal.Card.Header showClose>
            <Modal.Card.Title>Submit A Strategy For Review!</Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <Media>
              <Media.Item>
                <Content>
                  <p>
                    <strong>Abena Bot</strong> <small>@abena-dms</small>{" "}
                    <small>(auto-generated)</small>
                    <br />
                    <br />
                    Thank you for your research and partaking in contributing a{" "}
                    <strong>evidence based strategy.</strong> Thousands of kids
                    that need support in the classroom are waiting for the
                    results of your research. Please submit your strategy for
                    review.
                  </p>
                </Content>
              </Media.Item>
            </Media>

            <br />
            <br />

            <StrategyForm />
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
    </>
  );
};

export default StrategyModal;
