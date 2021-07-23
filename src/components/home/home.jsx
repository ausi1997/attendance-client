import React, { useEffect, useState } from 'react';

const Home = ()=>{
 
    const [data,setData] = useState([]);

    useEffect(()=>{
        localStorage.clear();
        setData(localStorage);
    },[data]);
    return(
        <div>
        home
        </div>
    )
}

export default Home;