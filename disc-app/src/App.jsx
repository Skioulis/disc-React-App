import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer.jsx'
import SongList from './components/SongList/SongList.jsx'


function App() {

  return (
    <div className="App-flex">

        <Navbar />

        <main>
            <div className="viewport">
                <div className="image-wrap">
                    {/*<img src="./assets/Images/bg-img.png" alt=""/>*/}
                </div>
            </div>

            <SongList/>
        </main>

        <Footer/>

    </div>
  )
}

export default App
