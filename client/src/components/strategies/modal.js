
import React from "react";

const Modal = (props) => {
  return (
    <div className="modal">
      <p>{props.description}</p>

        <button onClick={props.onClose}>Close</button>
        {/* Assign strategy to student */}
        <button onClick={props.onAssign}>Assign</button>
    </div>
  );
};

export default Modal;
