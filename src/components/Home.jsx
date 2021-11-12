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
        <Link to='/'>
        <motion.button
        className="button"
        initial={{opacity: 0, y: 180}}
        animate={{opacity: [0, 1], y: [140, 0]}}
        transition={{ ease: "easeOut", delay: 0.7, duration: 0.7 }}
      >
          Welcome
      </motion.button>
      </Link>

    </div>
    )
}

export default Home
