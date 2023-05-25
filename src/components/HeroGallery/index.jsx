import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HeroImage } from '..'
const HeroGallery = () => {
    let [Hero,setHero] = useState([])
    let HeroList = []
    




    async function fetchHeroes(e) {
        e.preventDefault()
        heroButton.style.visibility="hidden"
        
        //for loop
        //fetch
        //set hero
        for (let heroID=1; heroID <=20; heroID++){
            const response = await fetch(`https://superheroapi.com/api.php/2268091433374349/${heroID}`)
            const data = await response.json()
            HeroList.push(data)

        }
        
        // console.log("HeroList: ",HeroList)
        setHero(Hero = HeroList)
        // console.log("Hero: ",Hero)
        
        
    }
    

  return (
    <>
    <button onClick={fetchHeroes} id='heroButton'>HeroGallery</button>
    {Hero.map((hero)=>(
        <HeroImage key={hero.id} hero={hero}/>
    ))}
    </>
    
  )
}

export default HeroGallery
