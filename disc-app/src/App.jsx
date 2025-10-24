import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer.jsx'
import SongList from './components/SongList/SongList.jsx'
import BackgroundImage from './components/backgroundImage/BackgroundImage.jsx'


function App() {

  return (
    <div className="App-flex">

        <Navbar />

        <main>


            <SongList/>

            <BackgroundImage/>
        </main>

        <Footer/>

    </div>
  )
}

export default App
