import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Card from "./components/card/Card.jsx";

function App() {

  return (
    <>
        <Navbar />
        <main>
            <Card />
        </main>


    </>
  )
}

export default App
