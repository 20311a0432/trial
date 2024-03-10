import React, { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Details from './pages/Details';


function App() {

    const [location,setLocation] = useState("");

    const onSearch = async (input) => {
        setLocation(input);
        console.log("input -> ",input);
    }  

    return (
        <div className="flex flex-col justify-center items-center bg-slate-400 min-h-screen">
            <Dashboard onSearch={onSearch}/>
            <Details location={location}/>
        </div>
    )
  
}

export default App
