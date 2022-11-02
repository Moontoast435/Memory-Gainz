import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HowToPlay() {
let navigate = useNavigate();

  return (
    <div>
        <p>
            This is a simple memory sequence game! When the squares light up, try to memorise the sequence. You will then be prompted to click on the squares in the sequence that was shown. 
        </p>
        <button onClick={() => navigate('/')}>Go Back</button>     
    </div>
  )
}
