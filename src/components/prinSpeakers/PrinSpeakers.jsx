import React from 'react'
import './prinSpeakers.css'
import { principalSpeakers } from '../../data.js'

function PrinSpeakers() {
  return (
    <div className="pSpeaker__section">
        <div className="pSpeaker__wrapper">
            <div className="pSpeaker__content">
                <div className="pSpeaker__title">
                    <span>meet our anticipated</span>
                    <h2>Principal Speakers</h2>
                </div>
                <div className="pSpeakers">
                    {
                        principalSpeakers.map((speaker, index) =>
                        <div key={index} className="speaker">
                            <img src={speaker.image} alt={speaker.name} />
                            <h2>{speaker.name}</h2>
                            <p>{speaker.desc}</p>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default PrinSpeakers