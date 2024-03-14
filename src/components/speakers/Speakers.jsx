import React from 'react';
import './speaker.css'
import { speakersList } from '../../data';
import Speaker from './Speaker';

function Speakers({ speakers }) {
  return (
    <div className="speakers__section">
      <div className="speaker__wrapper">
        <div className="speaker__content">
          <div className="speaker__title">
            <span>meet our</span>
            <h2>Principal Speakers</h2>
          </div>
          <div className="speaker__wrap">
            {speakersList.map((speaker, index) => (
              <Speaker
                key={index}
                image={speaker.image}
                name={speaker.name}
                title={speaker.title}
                bio={speaker.bio}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
