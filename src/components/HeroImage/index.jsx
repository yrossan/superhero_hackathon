import React from 'react'

const HeroImage = ({hero}) => {
  return (
    <div className='gallery-image'>
        <img src = {hero.image.url}/>
    </div>
  )
}

export default HeroImage
