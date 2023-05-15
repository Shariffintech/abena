import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import { Button } from "react-bulma-components";

export default function LikeButton(props) {
  const [like, setLikes] = useState(0);

  return (

    <Button
      style={{ alignItems: "right" }}
      onClick={() => setCount(props.count + like)}
    >
      Click 
    </Button>
  );
}
