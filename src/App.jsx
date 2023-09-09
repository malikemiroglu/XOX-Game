import { useState } from 'react'
import './App.css'
import circle from './assets/circle.png'
import cross from './assets/cross.png'


function App() {
  const [turn, setTurn] = useState('X')
  const [board, setBoard] = useState(Array(9).fill(''))
  const [lock, setLock] = useState(false)

  const handleClick = (e,index) => {
    if(lock) return;
    
    if(turn === 'X' && board[index] === '') {
      e.target.innerHTML = `<img src=${cross} alt="cross" />`;
    }else {
      e.target.innerHTML = `<img src=${circle} alt="circle" />`;
    }

    if(board[index] === '') {
      setBoard(board.map((item, i) => i === index ? turn : item));
      setTurn(turn === 'X' ? 'O' : 'X');
    }else {
      alert('Bu alan dolu');
    }
    
    checkWinner();
  }

  const checkWinner = () => {
    if(board[0] === board[1] && board[0] === board[2] && board[0] !== '') {
      won(board[0])
    }else if(board[3] === board[4] && board[3] === board[5] && board[3] !== '') {
      won(board[3])
    }else if(board[6] === board[7] && board[6] === board[8] && board[6] !== '') {
      won(board[6])
    }else if(board[0] === board[3] && board[0] === board[6] && board[0] !== '') {
      won(board[0])
    }else if(board[1] === board[4] && board[1] === board[7] && board[1] !== '') {
      won(board[1])
    }else if(board[2] === board[5] && board[2] === board[8] && board[2] !== '') {
      won(board[2])
    }else if(board[0] === board[4] && board[0] === board[8] && board[0] !== '') {
      won(board[0])
    }else if(board[2] === board[4] && board[2] === board[6] && board[2] !== '') {
      won(board[2])
    }
  }

  const won = (winner) => {
    setLock(true);
    alert(`${winner} Kazandı`);
  }


  return (
    <>
      <div className="container">
        <h1 className='title'>XOX Oyunu <span>React</span></h1>

        <div className="board">

          <div className="row-1">
            <div className="boxes" onClick={(e) => handleClick(e,0)}></div>
            <div className="boxes" onClick={(e) => handleClick(e,1)}></div>
            <div className="boxes" onClick={(e) => handleClick(e,2)}></div>
          </div>

          <div className="row-2">
            <div className="boxes" onClick={(e) => handleClick(e,3)}></div>
            <div className="boxes" onClick={(e) => handleClick(e,4)}></div>
            <div className="boxes" onClick={(e) => handleClick(e,5)}></div>
          </div>

          <div className="row-3">
            <div className="boxes" onClick={(e) => handleClick(e,6)}></div>
            <div className="boxes" onClick={(e) => handleClick(e,7)}></div>
            <div className="boxes" onClick={(e) => handleClick(e,8)}></div>
          </div>
            
        </div>

        <button className="reset">Tekrar Oyna</button>
      </div>

    </>
  )
}

export default App
