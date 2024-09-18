import React from 'react'
import Topbar from '../components/Topbar'
import ProblemsTable from '../components/problemsTable'

export default function Home() {
  return (
    <>
    <main className='bg-dark-layer-2 min-h-screen'>
      <Topbar/>
      <h1
  className="text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5"
>
  &ldquo; CONSISTENCY IS THE KEY TO EXCELLENCE &rdquo; 👇
</h1>
<div className="relative overflow-x-auto mx-auto px-6 pb-10">
  <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
  
      <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b ">
        <tr>
          <th scope="col" className="px-1 py-3 w-0 font-large">
            Status
          </th>
          <th scope="col" className="px-6 py-3 w-0 font-large">
            Title
          </th>
          <th scope="col" className="px-6 py-3 w-0 font-large">
            Difficulty
          </th>
          <th scope="col" className="px-6 py-3 w-0 font-large">
            Category
          </th>
          <th scope="col" className="px-6 py-3 w-0 font-large">
            Solution
          </th>
        </tr>
      </thead>
    <ProblemsTable/> 
  </table>
</div>

    </main>
    </>
  )
}
