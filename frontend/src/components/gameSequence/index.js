import React, { useEffect, useState } from 'react'

export default function Sequence() {
  const [sequence, setSequence] = useState([])

  useEffect(() => {
    const numberOfFlashes = 5;
    let sequenceArray = [];

    for (let i = 0; i < numberOfFlashes; i++) {
        let coordinates = {
            row : 0,
            column: 0
        };
        coordinates.row = Math.floor(Math.random() * 5 + 1);
        coordinates.column = Math.floor(Math.random() * 5 + 1);
        sequenceArray.push(coordinates);
    }
    setSequence(sequenceArray);
  }, [])  
  return (
    <div>
            
    </div>
  )
}
