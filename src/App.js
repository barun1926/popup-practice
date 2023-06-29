
import React, { useState } from 'react'
import './App.css'





 function App() {
const[click,setClick]=useState(false)
const[click2,setClick2]=useState(false)
const[click3,setClick3]=useState(false)
const[inputText,setInputText]=useState("")
const handleClick =()=>{
  setClick(!click)
  setClick2(false)
}
 const handleClick2=()=>{
   setClick2(!click2)
   setClick(!click)
 }
 const handleClick3=()=>{
  setClick2(!click2)
  setClick(true)
 }
 const handleClick5=()=>{
  setClick3(!click3)
  setClick(true)
 }
 const handleClick4=()=>{
  alert("Bug   "+inputText)
 }
 const handleClick9=()=>{
  setClick(true)
  setClick3(!click3)
 }
  
 const handleClick412=()=>{
  alert("idea   " +inputText)

 }
  return (
    <>
    <div className='post'>
    {/* <a href='#'>
<span>feedback</span></a>  */}
        {click&&
      
      <div className='box'><div className='text'>
        <h3>Please give your feedback!</h3></div>
        <div className='box1'>
        <div className='box2' >
          <img src='https://react-feedback-widget-mu.vercel.app/assets/thought.69cfdaa0.svg' height="80px" onClick={()=>handleClick2()}/>
        </div>
          <div className='box3'>
            <img src='https://react-feedback-widget-mu.vercel.app/assets/idea.907b9faf.svg' height='80px' onClick={()=>handleClick5()}/>
          </div>
            <div className='box4'>
            <img src='https://react-feedback-widget-mu.vercel.app/assets/bug.cdeb28a1.svg' height='80px' width='80px'onClick={()=>handleClick2()}/>
            </div></div>
</div>}   
{/* <button className='btn' onClick={()=>handleClick()}>click me</button>     */}
    </div>
  {click2&&  <div className='box'>
    {/* <input type='text'/> */}
    <div className='text2' onClick={()=>handleClick3()}>
        <h3>Bug</h3></div>
         <div className='box1'>
         <input type='text' className='input' onChange={(e)=>{setInputText(e.target.value)}}/>
         <button className='text3'  onClick={()=>handleClick4()}>send feedback</button>
        {/* <div className='box2' >
          <img src='https://react-feedback-widget-mu.vercel.app/assets/thought.69cfdaa0.svg' height="80px"/>
        </div>
          <div className='box3'>
            <img src='https://react-feedback-widget-mu.vercel.app/assets/idea.907b9faf.svg' height='80px'/>
          </div>
            <div className='box4'>
            <img src='https://react-feedback-widget-mu.vercel.app/assets/bug.cdeb28a1.svg' height='80px' width='80px'/>
        </div>*/}</div>
</div>}
{click3 &&
<div className='box'>
<div className='text2' onClick={()=>handleClick9()}>
        <h3>idea</h3></div>
         <div className='box1'>
         <input type='text' className='input' onChange={(e)=>{setInputText(e.target.value)}}/>
         <button className='text3'  onClick={()=>handleClick412()}>send feedback</button></div>
       </div>  }
    <a href='#' onClick={()=>handleClick()}>
<span>feedback</span></a>
    </>
  )
}
 export default App