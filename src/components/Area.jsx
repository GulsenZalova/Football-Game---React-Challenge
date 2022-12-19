import React, { useEffect, useState } from 'react'

function Area() {
    const [position, setPosition] = useState({
      x: 330,
      y: 200
    })
    const [gamerScore1,setgamerScore1]=useState(0)
    const [gamerScore2,setgamerScore2]=useState(0)

    useEffect(()=>{
      let randomPositionX=Math.floor(Math.random()*300)
      let randomPositionY=Math.floor(Math.random()*300)
      if((position.x>=0&&position.x<=20)&&(position.y>=100&&position.y<=280)){
        console.log("goool 1 ucun")
        setgamerScore2(gamerScore2+1)
        setPosition({...position, x: position.x=randomPositionX, y:position.y=randomPositionY})
       }
       if((position.x>=660&&position.x<=680)&&(position.y>=100&&position.y<=280)){
        console.log("goool 2ucun")
        setgamerScore1(gamerScore1+1)
        setPosition({...position, x: position.x=randomPositionX, y:position.y=randomPositionY})
       }
    },[position])
    console.log(position)
    
    
  return (
    <div className='container'>
      <div className='game-container'>
        <div className='scors'>
        <p className='scoreText'>Gamer 1 : <span className='score'>{gamerScore1}</span></p>
        <p className='scoreText'>Gamer 2 : <span className='score'>{gamerScore2}</span></p>
        </div>
      <div className='game-area'>
                <span className='ball' style={{top: `${position.y}px`, bottom: `${position.y}px`,left: `${position.x}px`,right: `${position.x}px`}}></span>
                <span className='door left'></span>
                <span className='door rigth'></span>
      </div>
      <div className='control-btns'>
        <button className='control-btn' onClick={()=>setPosition({...position, y: position.y - 10})}>Top</button>
        <button className='control-btn' onClick={()=>setPosition({...position, x: position.x + 10})}>Rigth</button>
        <button className='control-btn' onClick={()=>setPosition({...position, y: position.y + 10})}>Bottom</button>
        <button className='control-btn' onClick={()=>setPosition({...position, x: position.x - 10})}>Left</button>
      </div>
      </div>
    </div>
  )
}

export default Area
