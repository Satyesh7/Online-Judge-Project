import { problems } from "../../problems";
import { Problem } from "../../problems/types/problem.ts";
import React from "react";
import Topbar from "../../components/Topbar";
import Workspace from "../../components/Workspace";
import { useParams } from "react-router-dom";

type ProblemPageProps = {
	problem: Problem;
};

const ProblemPage: React.FC<ProblemPageProps> = () => {
	const params = useParams();
	//console.log(params)
	const problemid = params.pid ?? '';
	const problem = problems[problemid];



	return (
		<div>
			<Topbar problemPage />
			<Workspace problem={problem} />
		</div>
	);
};
export default ProblemPage;

// fetch the local data
//  SSG
// getStaticPaths => it create the dynamic routes
// export async function getStaticPaths() {
// 	const paths = Object.keys(problems).map((key) => ({
// 		params: { pid: key },
// 	}));

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }

// getStaticProps => it fetch the data

export async function getStaticProps({ params }: { params: { pid: string } }) {
	const { pid } = params;
	const problem = problems[pid];
	console.log("HERE PID:",pid, problems)
	if (!problem) {
		return {
			notFound: true,
		};
	}
	problem.handlerFunction = problem.handlerFunction.toString();
	return {
		props: {
			problem,
		},
	};
}