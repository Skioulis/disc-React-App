import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import SongList from './components/SongList/SongList.jsx'

function App() {

  return (
    <>
        <Navbar />
        <main>
            <SongList />
        </main>


    </>
  )
}

export default App
