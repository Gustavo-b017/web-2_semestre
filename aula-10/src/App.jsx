import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p class="text-yellow-200 text-3xl mt-6 bg-green-500 my-1 p-6 w-full hover:bg-orange-400 hover:text-white animate-bounce ">aumente seu ego</p>

      <div class="flex gap-5 justify-between ">
        <div class="bg-orange-500 w-20 h-10 "></div>
        <div class="bg-orange-500 w-20 h-10 "></div>
        <div class="bg-orange-500 w-20 h-10 "></div>
      </div>

      <p class="text-yellow-200 text-3xl bg-green-500 mt-10 p-6 w-full 
      hover:bg-orange-400 hover:text-white animate-bounce ">vem quente que to fervendo</p>

      <div class="flex gap-5 justify-between ">
        <div class="bg-orange-500 w-20 h-10 "></div>
        <div class="bg-orange-500 w-20 h-10 "></div>
        <div class="bg-orange-500 w-20 h-10 "></div>
      </div>
    </>
  )
}

export default App
