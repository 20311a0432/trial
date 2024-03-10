import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Details({location}) {

    const [data, setData] = useState(null);

    const fetchGeoLocation = async () => {

        try {
            const response = await axios.get(import.meta.env.VITE_GEOLOCATION_URL,{
                params:{
                    q: location,
                    api_key: import.meta.env.VITE_GEOLOCATION_API_KEY
                }
            })

            setData(response.data)
            console.log("I am here");
            
        } catch (error) {
            console.log("Error while fetching geo location  ->> ",error.message);
        }  
    }

    useEffect(() => {
        if (location !== "") {
            fetchGeoLocation();
        }
    },[location])

    if (!data) {
        return (
            <h1 className='text-black h-10 w-10'>Loading...</h1>
        )
    } else {
        return (
            <h1 className='text-black'>{data[0].lat}</h1>
        )
    }
}

export default Details