import React from 'react'
import { useState } from 'react'

type Props = {}

export default function AddProblem({}: Props) {

const [inputs, setInputs] = useState({

id: '',
title: '',
difficulty: '',
category:'',
videoId: '',
link: '',
order: 0,
})

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setInputs({
    
    ...inputs,
    
    [e.target.name]: e.target.value
    
    })}
{/* temp form */}
return(
<div className='p-9 max-w-3xl mx-auto min-h-screen flex flex-col items-center'>
  <h1 className='text-center text-3xl my-7 font-semibold'>Add Problem</h1>
<form className='text-center p-9 flex flex-col max-w-sm gap-4 justify-between'>

<input onChange={handleInputChange} type='text' placeholder='problem id' name='id' required id = 'id' />

<input onChange={handleInputChange } type='text' placeholder='title' name='title' required id = 'title' />

<input onChange={handleInputChange} type='text' placeholder='difficulty' name='difficulty' required id = 'difficulty'/>

<input onChange= {handleInputChange} type='text' placeholder='category' name='category' required id = 'category' /> <input onChange={handleInputChange} type='text' placeholder='order' name='order' required id = 'order'/>

<input onChange={handleInputChange} type='text' placeholder='videoId?' name='videoId' /> <input onChange={handleInputChange} type='text' placeholder='link?' name='link' />

<button className="dark:bg-gray-400">Save to db</button>

</form>
</div>
)
}