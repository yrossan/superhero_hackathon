import React from 'react'
import '../../App.css'

const HeroImage = ({hero}) => {
  return (
    <div className='gallery-image'>
        <img src = {hero.image.url}/>
    </div>

    
  )
}

export default HeroImage
