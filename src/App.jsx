import { useRef, useState } from 'react'
import './App.css'
import circle from './assets/circle.png'
import cross from './assets/cross.png'

const crossImg = `<img src=${cross} alt="cross" />`
const circleImg = `<img src=${circle} alt="circle" />`
const board = Array(9).fill('')

function App() {
  const [turn, setTurn] = useState('X')
  const [lock, setLock] = useState(false)
  const titleRef = useRef(null)

  const handleClick = (e,index) => {
    if(lock) return;

    if(turn === 'X' && board[index] === '') {
      e.target.innerHTML = crossImg;
      board[index] = 'X';
      setTurn('O');
    }else if(turn === 'O' && board[index] === '') {
      e.target.innerHTML = circleImg;
      board[index] = 'O';
      setTurn('X');
    } else {
      alert('Bu alan dolu');
    }
    
    checkWinner();
  }

  const checkWinner = () => {
    const winningConditions = [
      [0,1,2], [3,4,5], [6,7,8], 
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6] 
    ]

    winningConditions.forEach(condition => {
      if(board[condition[0]] === board[condition[1]] && board[condition[0]] === board[condition[2]] && board[condition[0]] !== '') {
        won(board[condition[0]])
      }
    })
  }

  const won = (winner) => {
    setLock(true);
    if(winner === 'X') {
      titleRef.current.innerHTML = `Tebrikler: ${crossImg} Kazandı`;
    }else {
      titleRef.current.innerHTML = `Tebrikler: ${circleImg} Kazandı`;
    }
  }

  const resetGame = () => {
    board.fill('');
    setTurn('X');
    setLock(false);
    titleRef.current.innerHTML = 'XOX Oyunu <span>React</span>';
    const boxes = document.querySelectorAll('.boxes');
    boxes.forEach(box => box.innerHTML = '')
  }


  return (
    <>
      <div className="container">
        <h1 className='title' ref={titleRef}>XOX Oyunu <span>React</span></h1>

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

        <button className="reset" onClick={() => resetGame()}>Tekrar Oyna</button>
      </div>

    </>
  )
}

export default App
