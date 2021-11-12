import React from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'

const GetStarted = () => {

  const history = useHistory()

  return (
    <div className="getStarted">
     
      <motion.div
        className="title"
        initial={{ x: 99, y: -99 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: 'easeOut', duration: 1.3 }}
        drag={true}
        dragConstraints={{ top: 1, bottom: 1, right: 1, left: 1 }}
        dragElastic={1}
        whileHover={{cursor: "pointer"}}
      >
        <img draggable="false" src="turners_logo.jpg" alt=""/>
      </motion.div>

      <motion.button
        className="button"
        onClick={() => history.push('/Home')}
        initial={{opacity: 0, y: 180}}
        animate={{opacity: [0, 1], y: [140, 0]}}
        transition={{ ease: "easeOut", delay: 1.5, duration: 0.7 }}
      >
          Enter Here
      </motion.button>

      <motion.div animate={{opacity: [0, 1]}}>
        <div className="circle c1" />
        <div className="circle c1 ripple" />
        <div className="circle c2" />
        <div className="circle c2 ripple" />
        <div className="circle c3" />
        <div className="circle c3 ripple" />
        <div className="circle c4" />
        <div className="circle c4 ripple"/>
      </motion.div>
    </div>
  )
}

export default GetStarted
