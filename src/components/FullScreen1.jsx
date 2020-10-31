import React, {useEffect, useState} from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Facial from './Facial';
import StoT from './StoT';
import QuizForm from '../screens/QuizForm'

function FullScreen1() {
  const handle = useFullScreenHandle();
  const [fullScreenMode,setFullScreenMode]=useState(false)
  const [count,setCount]=useState(0)
  const [s,sets]=useState(false)
  const [esc,setesc]=useState(true)
  const [confirm_exit,setconfirm_exit]=useState(false)
  useEffect(()=>{
    setCount(prev=>prev+1);
    console.log("fs="+count);
  },[fullScreenMode])
  
  function exit(){
    
  }
  return (
    
    <div>
      <h1 className="text-center">Quiz Name</h1>
      <h3 className='ml-3'>Welcome Name</h3>
      <p className="ml-3 lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam nobis similique tempora!</p>
      <div className='col-12 d-flex justify-content-center '>
        <button className="btn btn-primary p-3" onClick={handle.enter}>
          Start Quiz
        </button>
      </div>
      
      <FullScreen  handle={handle} onChange={()=>{
        setFullScreenMode(prevprops=>!prevprops)
        setesc(prev=>!prev)
        
        sets(prevprops=>!prevprops)
        console.log('>>>>><<<<<<',esc)
        
        
        // console.log(fullScreenMode);
      }}>
        
       
        
        <div >
          {!s && <QuizForm exit={handle.exit} esc={esc} />}
         
        </div>
        
      </FullScreen>
    </div>
  );
}

export default FullScreen1
