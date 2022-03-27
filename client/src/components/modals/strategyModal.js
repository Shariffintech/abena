import React, {useState} from "react";
import {Button, Modal,Media, Content, Container, Card, Block} from "react-bulma-components";
import "bulma/css/bulma.min.css";

const StrategyModal = () => {


  const [openModal, setOpenModal] = useState();
  return (
    <>
      <Button.Group renderAs={Block}>
        <Button
          color="info"
          onClick={() => {
            return setOpenModal('card');
          }}
        >
         Submit EBS Strategy
        </Button>
      </Button.Group>
      <Modal

        show={openModal === 'card'}
        onClose={() => {
          return setOpenModal();
        }}
      >
        <Modal.Card>
          <Modal.Card.Header showClose>
            <Modal.Card.Title>Title</Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <Media>
              <Media.Item>
                <Content>
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small>{' '}
                    <small>31m</small>
                    <br />
                    If the children of the Modal is a card, the close button
                    will be on the Card Head instead than the top-right corner
                    You can also pass showClose = false to Card.Head to hide the
                    close button
                  </p>
                </Content>
              </Media.Item>
            </Media>
          </Modal.Card.Body>
          <Modal.Card.Footer renderAs={Button.Group} align="right" hasAddons>
            <Button color="success">Like</Button>
            <Button>Share</Button>
          </Modal.Card.Footer>
        </Modal.Card>
      </Modal>
    </>
  );
}

export default StrategyModal;