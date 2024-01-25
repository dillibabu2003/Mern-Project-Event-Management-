
// import {AnimateSharedLayout} from 'framer-motion'
// import { useState } from 'react'    
import './Card.css'

const Card = (props) => {
  return (
    <CompactCard param={props}/>
  )
}

function CompactCard({param}){
    // const Png=param.png;
    return (
        <div className="CompactCard"
           style={{
             background: param.color.backGround,
             boxShadow: param.color.boxShadow,
           }}>
            <div className="detail" >
                 <span>{param.title} </span>
  
                <span>{param.value}</span>
                
            </div>
        </div>
    )
}
export default Card