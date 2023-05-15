import React, { useState } from "react";
import { Button, Modal, Media, Content, Block } from "react-bulma-components";
import { JoinBetaForm } from "./joinBetaForm";
import "bulma/css/bulma.min.css";

const joinBetaModal = () => {
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
          Join Beta
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
      </Modal>
    </>
  );
};
