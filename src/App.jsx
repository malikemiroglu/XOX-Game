import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <h1 className='title'>XOX Oyunu <span>React</span></h1>

        <div className="board">

          <div className="row-1">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>

          <div className="row-2">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>

          <div className="row-3">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
            
        </div>

        <button className="reset">Tekrar Oyna</button>
      </div>

    </>
  )
}

export default App
