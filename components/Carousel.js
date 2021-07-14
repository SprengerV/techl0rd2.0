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
      <div className="carouselText">
        <h3 className="coinName center">{ current.name }</h3>
        <p className="address center">{ current.desc }</p>
      </div>
      <div className="navSuccess">
        { keys.map((key, i) => 
          <button
            key={ i }
            className="btn-success"
            onClick={ () => currentHandler(key) }
          >
            { key }
          </button>            
        ) }
      </div>
    </div>
    
    </>)
}

export default Carousel
