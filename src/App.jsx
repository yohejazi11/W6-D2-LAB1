import { useState } from 'react'

import './App.css'

function App() {
  const [mood,setMoode] = useState("light")
  const [num1, setCount1] = useState(10)
  const [num2, setCount2] = useState(15)
  const [totel, fun]=useState()

  function changeMood(){
    if(setMoode=="light"){
      setMoode("black")
    }
    else if(setMoode=="dark"){
      setMoode("white")

    }

  }

  function plus(){
    fun(num1 + num2)
  }
  function minus(){
    fun(num1 - num2)
  }
  function multi(){
    fun(num1 * num2)
  }
  function dvided(){
    fun(num1 % num2)
  }
  function increase1() {
    setCount1(num1 + 1)
  }

  function decrease1() {
    setCount1(num1 - 1)

  }

  function increase2() {
    setCount2(num2 + 1)
  }

  function decrease2() {
    setCount2(num2 - 1)

  }


  return (
    <div className='w-full h-screen bg-[{mood}]'>
      <button onClick={changeMood}>{mood}</button>
      <div className='flex m-[auto] w-[50vw] gap-x-[1rem]'>
        <div className='flex flex-col w-[10vw] gap-y-[2rem]'>
          {num1}
          <div className='flex gap-x-[1rem]'>
            <button className='btn' onClick={increase1}>+</button>
            <button onClick={decrease1}>-</button>
          </div>
        <div>
          total :{totel}
          <div className='flex flex-col gap-y-[0.5re]'>
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
          <button onClick={multi}>*</button>
          <button onClick={dvided}>%</button>
          </div>



        </div>
        </div>
        <div className='flex flex-col w-[25vw] gap-y-[2rem]'>
          {num2}
          <div className='flex gap-x-[1rem]'>
          <button onClick={increase2}>+</button>
          <button onClick={decrease2}>-</button>
          </div>


        </div>
      </div>
    </div>
  )
}

export default App
