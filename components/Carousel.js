import React, { useEffect, useState } from 'react'
import coins from '../src/coins'

const Carousel = ({ data }) => {
  
  const [current, setCurrent] = useState({})
    
  const keys = Object.keys(data)

  const currentHandler = (key) => {
    setCurrent(data[key])
  }

  useEffect(() => {
    if (!current.name) {
      const active = keys[0]
      setCurrent(data[active])
    }
  }, [keys, current, data])

  return (<>
   
    <div className="carousel">
      <img className="carouselImg" src={ current.img }/>
      <div className="carouselNav nav-success">
        <div className="carouselBtns">
        { keys.map((key, i) => 
          <button
            key={ i }
            className="carouselBtn carouselBtn-success"
            onClick={ () => currentHandler(key) }
          >
            { key }
          </button>            
        ) }
        </div>  
      </div>
      <div className="carouselText">
        <h3 className="carouselName center">{ current.name }</h3>
        <p className="carouselDesc center">{ current.desc }</p>
      </div>
    </div>
    
    </>)
}

export default Carousel
