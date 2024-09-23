import Split from "react-split";
import React from 'react'
import ProblemDescription from "./ProblemDescription";

const Workspace = () => {
  return (
    <Split className="split" >
      <ProblemDescription />
      <div>The Code Editor will be here</div>
    </Split>
  );
};

export default Workspace;
