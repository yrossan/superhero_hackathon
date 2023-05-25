import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HeroImage } from '..'
const HeroGallery = () => {
    let [Hero,setHero] = useState([])
    const [loading, setLoading] = useState(false)
    let HeroList = []

 useEffect(() => {
    async function fetchHeroes() {
        // e.preventDefault()
        setLoading(true)
        // heroButton.style.visibility="hidden"
        
        //for loop
        //fetch
        //set hero
        for (let heroID=1; heroID <=30; heroID++){
            const response = await fetch(`https://superheroapi.com/api.php/2268091433374349/${heroID}`)
            const data = await response.json()
            HeroList.push(data)
        }
        
        // console.log("HeroList: ",HeroList)
        setHero(Hero = HeroList)
        setLoading(false);

        
        // console.log("Hero: ",Hero)


        // added loading here so it happens immediatly after clicking the button
    }
    fetchHeroes()
 },[])
    
    function showHeroes() {
        return (
            <div className='shows'>
                { Hero.map((hero)=>(<HeroImage key={hero.id} hero={hero}/>))}
            </div>
           
        )
    }     
        
    
    

  return (
    <>
    {/* <button onClick={fetchHeroes} id='heroButton'>HeroGallery</button> */}
    {loading ? <h2><em>loading...</em></h2> : showHeroes()}
    </>
    
  )
}

export default HeroGallery
