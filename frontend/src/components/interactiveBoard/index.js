import React from 'react'
import { useSelector } from 'react-redux';

export default function Interactive() {
  return (
    <div className="sequence-board">
    <div data-testid="row1" className="row 1">
        <button className="square 1-1" id="square1-1"></button>
        <button className="square 1-2"></button>
        <button className="square 1-3"></button>
        <button className="square 1-4"></button>
        <button className="square 1-5"></button>
    </div>
    <div data-testid="row2" className="row 2">
        <button className="square 2-1"></button>
        <button className="square 2-2"></button>
        <button className="square 2-3"></button>
        <button className="square 2-4"></button>
        <button className="square 2-5"></button>
    </div>
    <div data-testid="row3" className="row 3">
        <button className="square 3-1"></button>
        <button className="square 3-2"></button>
        <button className="square 3-3"></button>
        <button className="square 3-4"></button>
        <button className="square 3-5"></button>
    </div>
    <div data-testid="row4" className="row 4">
        <button className="square 4-1"></button>
        <button className="square 4-2"></button>
        <button className="square 4-3"></button>
        <button className="square 4-4"></button>
        <button className="square 4-5"></button>
    </div>
    <div data-testid="row5" className="row 5">
        <button className="square 5-1"></button>
        <button className="square 5-2"></button>
        <button className="square 5-3"></button>
        <button className="square 5-4"></button>
        <button className="square 5-5"></button>
    </div>
    <p> im the interactive board</p>
</div>
  )
}
