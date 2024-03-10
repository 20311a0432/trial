import React, { useRef, useState } from 'react'

function Dashboard({onSearch}) {

    const [input, setInput] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        onSearch(input);
    }

    const handleChange = (e) => {setInput(e.target.value);}

    

  return (
    <div className='flex justify-center items-center min-h-screen'>
        <form onSubmit={submitHandler} method="post" className='flex flex-col'>
            <input type="search" placeholder='Search' name="city" id="city" className='mb-4' onChange={handleChange}/>
            <button type='submit'>search</button>
        </form>
    </div>
  )
}

export default Dashboard