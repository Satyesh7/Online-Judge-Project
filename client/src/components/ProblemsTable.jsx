import { problems } from "../mockProblems/problems";
import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { Link } from "react-router-dom";

const ProblemsTable = () => {
    return (
      <tbody className="text-white text-xl">
        {problems.map((doc, idx) => {
          const difficultyColor =
            doc.difficulty === "Easy"
              ? "text-green-500"
              : doc.difficulty === "Medium"
              ? "text-yellow-500"
              : "text-pink-500";
  
          return (
            <tr className={`${idx % 2 === 1 ? "bg-dark-layer-1" : ""}`} key={doc.id}>
              <th className="px-2 py-4 font-large whitespace-nowrap text-emerald-600">
                <BsCheckCircle fontSize={"18"} width="18" />
              </th>
  
              <td className="px-6 py-4">
                <Link className="hover:text-blue-600 cursor-pointer" href={`/problems/${doc.id}`}>
                  {doc.title}
                </Link>
              </td>
  
              <td className={`px-6 py-4 ${difficultyColor}`}>{doc.difficulty}</td>
  
              <td className="px-6 py-4">{doc.category}</td>
  
              <td className="px-6 py-4 text-xl" >
                {doc.videoId ? (
                  <a href={`https://www.youtube.com/watch?v=${doc.videoId}`} target="_blank" rel="noreferrer" >
                    Video Solution
                  </a>
                ) : (
                  "No Video"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };
  
export default ProblemsTable;