import React from "react";
import Mission from "./mission/mission";
import Team from "./team";
import FrameWorks from "./frameWorks";
import WhyAbena from "./whyAbena";

export default function Home() {
  return (
    <div className="App">
      <Mission />
      <FrameWorks />
      <Team />
      <WhyAbena />
    </div>
  );
}
