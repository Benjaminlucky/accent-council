import React from 'react';
import './goals.css'
import { goals } from '../../data';

function Box({ title, description, background }) {
  const boxStyle = {
    background: `linear-gradient(${background[0]}, ${background[1]})`,
    padding: '20px',
    borderRadius: '10px',
    color: 'white',
    marginBottom: '20px',
  };

  return (
    <div style={boxStyle} className='boxStyle'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  // Define three distinct background gradients
  const backgrounds = [
    ['#00ff00', '#007f00'], // Green
    ['#ffd700', '#ff7f00'], // Yellow
    ['#050577', '#0077ff'], // Blue
  ];

  // Create an array of boxes with each background gradient assigned sequentially
  const boxes = goals.map((goal, index) => ({
    title: goal.title,
    description: goal.description,
    background: backgrounds[index % 3], // Cycling through backgrounds
  }));

  return (
    <div className="goals__section">
        <div className="goals__wrapper">
            <div className="goals__content">
                <div className="goals__title">
                    <h2>The Bridge Council Conference Goals</h2>
                    <span>Our collectives objectives is to foster collaboration and dialogue aimed at:</span>
                </div>
                <div className="goal">
                    {boxes.map((box, index) => (
                        <Box key={index} title={box.title} description={box.description} background={box.background} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
