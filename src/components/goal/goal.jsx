import React from 'react'

function goal() {
    const goalboxes = [
        { title: 'Box 1', description: 'Description 1', background: ['#00aaff', '#0077ff'] },
        { title: 'Box 2', description: 'Description 2', background: ['#ffd700', '#ff7f00'] },
        { title: 'Box 3', description: 'Description 3', background: ['#00ff00', '#007f00'] },
        { title: 'Box 4', description: 'Description 4', background: ['#00aaff', '#0077ff'] },
        { title: 'Box 5', description: 'Description 5', background: ['#ffd700', '#ff7f00'] },
        { title: 'Box 6', description: 'Description 6', background: ['#00ff00', '#007f00'] },
        { title: 'Box 7', description: 'Description 7', background: ['#00aaff', '#0077ff'] },
        { title: 'Box 8', description: 'Description 8', background: ['#ffd700', '#ff7f00'] },
        { title: 'Box 9', description: 'Description 9', background: ['#00ff00', '#007f00'] },
      ];

      const shuffledBoxes = shuffleArray(goalboxes);
  return (
    <div>
      {shuffledBoxes.map((box, index) => (
        <Box key={index} title={box.title} description={box.description} background={box.background} />
      ))}
    </div>
  )
}


// Function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
export default goal