import React from 'react'

function Speaker({image, name, title, bio}) {
  return (
    <div className="speaker__card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p className='title'>{title}</p>
        <p className='bio'>{bio}</p>
    </div>
  )
}

export default Speaker