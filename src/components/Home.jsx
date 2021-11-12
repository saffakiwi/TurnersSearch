import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SearchAppBar from './AppBar';
import axios from 'axios';


const Home = () => {

  const [data, setData] = useState('');

  const getAllData = () => {
        axios
          .get("www.localhost:4000/info")
          .then((response) => {
            console.log(response.data);
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
}
useEffect(() => {
      getAllData();
},[]);


  return (

<div>
    <SearchAppBar/>


    <>
            {data ? 
                data.map(data => {
                    return(
                       <div className="data" key={data.id}>
                         <h3>{data.name}</h3>
                       </div>
                    )
                }) : <h3>No data yet</h3> }
        </>

    </div>
    )
}

export default Home
