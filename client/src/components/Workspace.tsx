import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import Playground from "./Playground";
import { Problem } from "../problems/types/problem.ts";
import React from "react";

type WorkspaceProps = {
	problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
//console.log("Here:", problem)
	return (
		<Split className='split' minSize={0}>
			<ProblemDescription problem={problem}  />
			<div className='bg-dark-fill-2'>
				 <Playground  problem={problem} />
				 
			</div>
		</Split>
	);
};
export default Workspace;